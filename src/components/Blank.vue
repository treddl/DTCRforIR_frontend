<template>
  <div>
    <div class="content">
      <p class="pt-4">
        {{ this.blank.responseActionDescription }}
      </p>
    </div>

    <br />

    <form @submit.prevent="validateInput">
      <div class="mr-2 is-size-7 blank-wrapper">
        <!-- display of task content prior to final submission -->
        <div v-if="!this.blank.rightTry && triesLeft > 0 && !completedBefore">
          <div class="table-wrapper">
            <!-- from the Vue.js docs: 
            You can use the v-model directive to create two-way data bindings on form input -->
            <input class="input blank-input is-short is-json is-size-8" :class="{ 'input-wrong': this.blank.wrongTry }"
              v-model="userInput"
              :placeholder="this.blank.placeholder"
            />
            <br />
            <div class="buttons is-left mt-5">
              <button class="button submit-button is-rounded"
                type="submit"
                value="Submit"
              >
                Submit <span> &#10140;</span>
              </button>
              <br />
              <button class="button is-rounded has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                v-if="!hintActivated && this.blank.hintDescription != null"
                :data-tooltip="'Buy hint for -1 Point'"
                @click="buyHint"              
              >
                Need a hint?
              </button>
            </div>
          </div>
        </div>
        <!-- display of task content on final submission -->
        <div v-else>
          <input class="input is-json input-label-short is-size-8"
            :value="this.blank.responseActionDescription + ': '"
            readonly
          />
          <input class="input blank-input is-short"
            :value="this.blank.flag"
            readonly
          />
        </div>
      </div>

      <!-- display hint -->
      <div class="content"
        v-if="hintActivated"
        >
        Hint: {{ this.blank.hintDescription }} (-1 point)
      </div>
      
      <!-- display messages regaring the user input -->
      <div>
        <div class="has-text-danger" 
          v-if="emptyInput"
          >
          Input cannot be empty.
        </div>            
        <div class="has-text-danger"
          v-else-if="triesLeft < 3 && triesLeft > 0 && !completedBefore && !this.blank.rightTry"
          >
          You were wrong. You have {{ triesLeft }} Tries left.
        </div>
        <div class="has-text-primary" 
          v-else-if="this.blank.rightTry"
          >
          Great Try! You earned {{ triesLeft }} point(s).
        </div>
        <div class="has-text-danger" 
          v-else-if="triesLeft == 0 && this.blank.wrongTry"
          >
          Sorry. You have no tries left.
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Blank",

  props: {
    blankData: {
      required: true,
    },
    index: {},
    tileNo: {},    
    completedBefore: {},
  },

  data() {
    return {
      blank: this.blankData,
      userInput: "",
      hintActivated: false,
      emptyInput: false,
      triesLeft: this.getTriesLeft(),
      points: null,
    };
  },

  methods: {
    getTriesLeft() {
      if (localStorage.getItem("storedData") != null) {
        return JSON.parse(localStorage.getItem("storedData"))[this.tileNo][
          this.index
        ];
      } else {
        return 3;
      }
    },
    buyHint() {
      this.$emit("buy-hint");
      this.hintActivated = true;
    },
    completed() {
      if (this.triesLeft > 0 && !this.blank.rightTry) {
        return false;
      }
      return true;
    },
    validateInput() {
      if (this.userInput == "") {
        this.emptyInput = true;
      } 
      else if (this.userInput.trim() != this.blank.flag) {
        this.emptyInput = false;
        this.triesLeft -= 1;
        if (this.triesLeft == 1) {
            alert("Sorry, that was not correct.\nYou've only got one try left!")
        }
        try {
          var allTries = JSON.parse(localStorage.getItem("storedData"));
          allTries[this.tileNo][this.index] =
            allTries[this.tileNo][this.index] - 1;
          localStorage.setItem("storedData", JSON.stringify(allTries));
        } catch (err) {
          console.log("localStorage empty");
        }

        this.blank.wrongTry = true;
      } 
      else {
        this.emptyInput = false;
        this.blank.rightTry = true;
        this.blank.wrongTry = false;
        this.hintActivated = false;
        try {
          var allTries2 = JSON.parse(localStorage.getItem("storedData"));
          allTries2[this.tileNo][this.index] = 0;
          localStorage.setItem("storedData", JSON.stringify(allTries2));
        } catch (err) {
          console.log("localStorage empty");
        }
      }
      if (this.completed()) {
        this.points = this.triesLeft;
        this.$emit("blank-completed", this.points); //the trainee gets as many points for the blank as he or she has tries left
        this.$emit("tries-count", this.triesLeft);
      }
    },
  },

  computed: {},
};
</script>

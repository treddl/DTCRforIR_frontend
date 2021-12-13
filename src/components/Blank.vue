<template>
  <div>
    <form @submit.prevent="validateInput">
      <div class="mr-2 blank-wrapper">
        <!-- display of task content prior to final submission -->
        <div v-if="!this.blank.rightTry && triesLeft > 0 && !completedBefore">
          <div class="content table-wrapper">
            <div class="block" v-html="this.blank.responseActionID"></div>
            <div
              class="block"
              v-html="this.blank.responseActionInstruction"
            ></div>

            <div v-if="blank.isTerminalTask">
              <terminal
                :termData="blank"
                :userPseudonym="this.userPseudonym"
              >
              </terminal>
            </div>

            <br />

            <!-- from the Vue.js docs: 
            You can use the v-model directive to create two-way data bindings on form input -->
            <div class="block" v-html="this.blank.flagInstruction"></div>
            <input
              class="input blank-input is-short is-json is-size-8"
              :class="{ 'input-wrong': this.blank.wrongTry }"
              v-model="userInput"
              :placeholder="this.blank.placeholder"
            />
            <div class="buttons is-left mt-5">
              <button
                class="button submit-button is-rounded"
                type="submit"
                value="Submit"
              >
                Submit <span> &#10140;</span>
              </button>
              <br />
              <button
                class="
                  button
                  is-rounded
                  has-tooltip-arrow has-tooltip-multiline has-tooltip-top
                "
                v-if="!hintActivated && this.blank.hint != null"
                :data-tooltip="'Buy hint for -1 Point'"
                @click="buyHint"
              >
                Need a hint?
              </button>
            </div>
          </div>
        </div>

        <!-- display of task content on final submission -->
        <div class="directive-completed has-background-white-ter p-3"
             v-else>
          <div class="block"
               v-html="this.blank.responseActionID">
          </div>
          <div
            class="block"
            v-html="this.blank.responseActionInstruction"
          ></div>
          <div class="block" v-html="this.blank.flagInstruction"></div>
          <div class="block">The correct flag is:</div>
          <input
            class="input blank-input is-short"
            :value="this.blank.flag"
            readonly
          />
        </div>
      </div>

      <!-- display hint -->
      <br />
      <div class="message is-primary" v-if="hintActivated">
        <div class="message-body">
        Hint: <span v-html="this.blank.hint"></span> (-1 point)
        </div>
      </div>

      <!-- display messages regarding submitted user input -->
      <div>
        <div class="message is-danger" v-if="emptyInput">
            <div class="message-body">
            Input cannot be empty.
            </div>
        </div>
        <div class="message is-danger"
            v-else-if="triesLeft < 3 && triesLeft > 0 && !completedBefore && !this.blank.rightTry"
        >
            <div class="message-body">
              You were wrong. You have {{ triesLeft }} Tries left.
            </div>
        </div>
        <div
          class="message is-success"
          v-else-if="this.blank.rightTry"
        >
            <div class="message-body">
              Good on you! You earned {{ triesLeft }} point(s). 🎉
            </div>
        </div>
        <div
          class="message is-danger"
          v-else-if="triesLeft == 0 && this.blank.wrongTry"
        >
            <div class="message-body">
              Sorry. You have no tries left.
            </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Terminal from "./Terminal.vue";

export default {
  name: "Blank",

  components: {
    Terminal,
  },

  props: {
    blankData: {
      required: true,
    },
    index: {},
    tileNo: {},
    userPseudonym: {},
    completedBefore: {},
  },

  data() {
    return {
      blank: this.blankData,
      userInput: "",
      hintActivated: false,
      emptyInput: false,
      triesLeft: this.getTriesLeft(),
      points: null
    };
  },

  methods: {
    getTriesLeft() {
      /*if (localStorage.getItem("storedData") != null) {
        return JSON.parse(localStorage.getItem("storedData"))[this.tileNo][
          this.index
        ];
      } else {
        return 3;
      }*/
      return 3;
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
      } else if (this.userInput.trim() != this.blank.flag) {
        this.emptyInput = false;
        this.triesLeft -= 1;
        if (this.triesLeft == 1) {
          alert("Sorry, that was not correct.\nYou've only got one try left!");
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
      } else {
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

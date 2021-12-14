<template>
  <div>
    <div class="is-task" :id="this.tileNo">
      <div class="is-directive">
        <!-- display title and subtitle -->
        <div>
          <text
            class="title is-json is-text-red"
            :class="{ 'has-text-grey': taskCompleted || completedBefore }">
            {{ this.title }}
          </text>
          <br>
          <text class="has-text-grey subtitle nice-subtitle">
            {{ this.subtitle }}
          </text>
        </div>
        
        <!-- display post task completion: information for the user and buttons to proceed -->
        <div v-if="task_completed">
          <div class="is-primary-darker subtitle is-json">
          Task completed
          </div>

          <div class="notification notification-green is-light success-message">
            <span class="is-primary-darker is-size-5 mb-5">
              You earned {{ this.pointsOverall }} points.
            </span>
          </div>

          <div class="columns is-hcentered mt-5">
            <img class="image is-hcentered rotate" style="width: 70px"
              src="./../assets/rocket.svg"           
            />
            <span class="ml-4 is-hcentered">              
              <span class="title is-title-smaller is-primary-darker is-json"
                v-if="this.triesLeft > 0">
                Congrats, you've submitted the corret flag!
              </span>
              <!-- display different message in case the traine went out of tries -->
              <span class="title is-title-smaller is-primary-darker is-json"
                v-else>
                Don't worry, we've submitted the corret flag for you. You'll have  more luck next time!
              </span>
              <!-- TODO update this text dynamically depending on what the trainee has achieved
                        e.g., the attack will stop soon etc. or nothing at all if it was only a 
                        search and submit -->
              <br />The correct response actions have been applied to the systems. ...
            </span>
          </div>
          
          <!-- display buttons Continue and Show/Hide -->
          <div class="buttons is-left mt-5">
            <!-- TODO update task6 to your final key to show button "Finish Game" -->
            <button class="button is-rounded submit-button"
              v-if="this.tileNo != 'task6'"
              @click="proceed()"            
            >
              Continue
            </button>          
            <button class="button is-rounded submit-button"
              v-if="this.tileNo == 'task6'"
              @click="finishGame()"             
            >
              Finish Game
            </button>

            <button class="button is-rounded is-light is-red-br"
              v-if="!showContent"
              @click="show()"            
            >
              Show
            </button>
            <button class="button is-rounded is-light"
              v-else
              @click="hide()"            
            >
              Hide
            </button>
          </div>
        </div>

        <br />
        
        <!-- diplay prior task completion: actual task  -->
        <div v-if="showContent">
          <div :class="{ 'directive-completed': task_completed || completedBefore }"
            >
            <span class="has-text-black is-json is-size-7">
              directives[{{ Object.keys(directive).length }}]:
            </span>
            <div class="directive-header">
              <div v-for="(item, index) in json_header" :key="item">
                <json-field :name="index" :value="item"></json-field>
              </div>

              <span class="has-text-black is-json is-size-7">
                rules[{{ rules.length }}]:
              </span>

              <div class="is-rule"
                v-for="(rule, index) in rules"
                :key="rule"
                :class="{
                  'is-rule-level-2': index == 1,
                  'is-rule-level-3': index == 2,
                }"
              >
                <div v-for="(item, index_inner) in rule" :key="item">
                  <div v-if="checkBlank(index_inner, index) != null">
                    <blank
                      :blankData="blanks[checkBlank(index_inner, index)]"
                      :index="checkBlank(index_inner, index)"
                      :tileNo="this.tileNo"
                      :completedBefore="completedBefore"
                      @blank-completed="completeTask"
                      @buy-hint="this.$emit('submit-points', -1)"
                      @tries-count="storeTries"                      
                    >
                    </blank>
                  </div>
                  <div v-else>
                    <json-field :name="index_inner" :value="item"></json-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blank from "./Blank.vue";
import JsonField from "./JsonField.vue";

export default {
  name: "BlankTaskNew",

  components: {
    Blank,
    JsonField,
  },

  props: {
    customData: {
      type: Object,
      required: true,
    },
    order: {},
    tasksCompleted: {},
  },

  data() {
    return {
      tileNo: this.customData.tileNo,
      level: this.customData.level,
      apiPath: this.customData.apiPath,

      title: this.customData.title,
      subtitle: this.customData.subtitle,
      taskDescription: this.customData.taskDescription,
      blanks: this.customData.blanks,   

      
      directive: this.taskData.directive,
      json_header: Object.fromEntries(
        Object.entries(this.taskData.directive.directives[0]).slice(0, 7)
      ),
      rules: this.taskData.directive.directives[0].rules,
      
      viewJson: false,

      blanks_completed: this.getBlanksCompleted(),
      task_completed: false,
      pointsOverall: 0,

      timestamp_before: null,
      timestamp_after: null,
      timeToComplete: null,

      showContent: true,
      triesLeft: null
    };
  },

  computed: {
    completedBefore() {
      if (this.level < this.tasksCompleted) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    completeTask(points) {
      if (this.timestamp_before == null) {
        //set start time of task with first submit
        this.timestamp_before = new Date();
      }
      if (points != 0) {
        this.$emit("submit-points", points);
      }
      this.pointsOverall += points;
      this.blanks_completed += 1;
      try { //was passiert hier, TODO Lena
        var allBlanks = JSON.parse(localStorage.getItem("blanksCompleted"));
        allBlanks[this.tileNo] = allBlanks[this.tileNo] + 1;
        localStorage.setItem("blanksCompleted", JSON.stringify(allBlanks));
      } catch (err) {
        console.log("localStorage empty");
      }

      if (this.blanks_completed == Object.keys(this.blanks).length) {
        // this calls the Flask API under 'URL:apiPath'
        // 
        this.$http.get(window.location.href.replace("7080", "9090") + this.apiPath)
          .then((response) => {
            console.log(response.data);
          });
        this.task_completed = true;
        this.timestamp_after = new Date();
        this.timeToComplete =
          (this.timestamp_after.getTime() - this.timestamp_before.getTime()) /
          1000;
        this.$emit("task-completed", [
          this.timestamp_before,
          this.timestamp_after,
          this.timeToComplete,
        ]);
        this.scrollToElement(this.tileNo);
      }
    },

    getBlanksCompleted() {
        if (localStorage.getItem("blanksCompleted") != null) {
          return JSON.parse(localStorage.getItem("blanksCompleted"))[this.tileNo];
        } else {
          return 0;
        }
      },

    checkBlank(index_inner, stage) {
      for (var i = 0; i < Object.keys(this.blanks).length; i++) {
        if (
          index_inner == this.blanks[i].name &&
          stage + 1 == this.blanks[i].stage
        ) {
          return i;
        }
      }
      return null;
    },

    storeTries(tries) {
      this.triesLeft = tries;
    },

    proceed() {
      this.hide();
      var nextSection = this.order.indexOf(this.tileNo) + 1;
      this.scrollToElement(this.order[nextSection]);
    },

    hide() {
      this.showContent = false;
    },

    show() {
      this.showContent = true;
    },

    scrollToElement(id) {
      const el = document.getElementById(id);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", alignToTop: true });
      });
    },

    format_time(s) {
      const dtFormat = new Intl.DateTimeFormat("de-DE", {
        //timeStyle: 'medium',
        //timeZone: 'GMT'
      });
      return dtFormat.format(new Date(s * 1e3));
    }
  }
};
</script>
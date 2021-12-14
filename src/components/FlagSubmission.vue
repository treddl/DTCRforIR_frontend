<template>
    <div class="is-task" :id="this.taskData.tileNo">
      <div class="buttons is-left mt-5">
          <button class="button is-rounded is-success" 
            @click="this.beginPhase = true; this.trackBegin"
            v-if="!this.beginPhase"
          >
            Begin
          </button>
      </div>
      <div class="is-directive"
        v-if="beginPhase">

        <!-- display post task completion: information for the user and buttons to proceed -->
        <div v-if="taskCompleted">
          <div class="is-primary-darker subtitle is-json">
            Phase completed
          </div>

          <div class="message is-success">
            <div class="message-body">
                <span class="is-primary-darker is-size-5">
                  You earned {{ this.pointsOverall }} points.
                </span>
            </div>
          </div>

          <div class="columns is-hcentered mt-5">
            <img
              class="image is-hcentered rotate"
              style="width: 70px"
              src="./../assets/magnifyingGlass.svg"
            />
            <span class="ml-4 is-hcentered">
              <span
                class="title is-title-smaller is-primary-darker is-json"
                v-if="this.triesLeft"
              >
                Congrats!
              </span>
              <!-- display different message in case the traine went out of tries -->
              <span
                class="title is-title-smaller is-primary-darker is-json"
                v-else
              >
                Don't worry, we've submitted the corret flag for you. You'll
                have more luck next time!
              </span>
            </span>
          </div>

          <!-- display buttons Continue and Show/Hide -->
          <div class="buttons is-left mt-5">
            <!-- TODO update task6 to your final key to show button "Finish Game" -->
            <button
              class="button is-rounded submit-button"
              v-if="this.taskData.tileNo != 'unit2Resp'"
              @click="proceed()"
            >
              Continue
            </button>
            <button
              class="button is-rounded submit-button"
              v-if="this.taskData.tileNo == 'unit2Resp'"
              @click="this.$emit('game-finished')"
            >
              Finish Game
            </button>

            <button
              class="button is-rounded is-light is-red-br"
              v-if="!showContent"
              @click="show()"
            >
              Show
            </button>
            <button class="button is-rounded is-light" 
              v-else @click="hide()">
              Hide
            </button>
          </div>
        </div>

        <br />

        <!-- diplay prior task completion: actual task  -->
        <div v-if="showContent">
          <!-- bind the display style of this element to the truthiness of 'taskCompleted' or 'completedBefore' -->
          <div
            :class="{ 'directive-completed': taskCompleted || completedBefore }"
          >
            <div class="block" v-html="this.phaseIntroduction"></div>
            <div v-for="(blank, index) in this.blanks" :key="blank">
              <!-- use component Blank.vue with the data from blanks -->
              <blank
                class="pt-4 pb-4"
                :blankData="blank"
                :index="index"
                :tileNo="this.taskData.tileNo"
                :completedBefore="completedBefore"
                :userPseudonym="this.userPseudonym"
                @blank-completed="completeTask"
                @buy-hint="this.$emit('submit-points', -1)"
                @tries-count="storeTries"
              >
              </blank>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import Blank from "./Blank.vue";

export default {
  name: "FlagSubmission",

  components: {
    Blank,
  },

  props: {
    taskData: {
      type: Object,
      required: true,
    },
    userPseudonym: {},
    order: {},
    tasksCompleted: {},
  },

  data() {
    return {
      level: this.taskData.level,

      responsePhase: this.taskData.responsePhase,
      phaseIntroduction: this.taskData.phaseIntroduction,

      blanks: this.taskData.blanks,

      blanks_completed: 0,
      taskCompleted: false,
      pointsOverall: 0,

      timestamp_before: null,
      timestamp_after: null,
      timeToComplete: null,

      beginPhase: false,
      showContent: true,
      triesLeft: false,
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
    trackBegin () {
     // TODO: create date object with current time & link with scroing system
    },
      
    completeTask(points) {
      this.blanks_completed += 1;
      if (this.timestamp_before == null) {
        //set start time of task with first submit
        this.timestamp_before = new Date();
      }

      this.$emit("submit-points", points);
      this.pointsOverall += points;

      if (this.blanks_completed == Object.keys(this.blanks).length) {
        this.taskCompleted = true;
        this.timestamp_after = new Date();
        this.timeToComplete =
          (this.timestamp_after.getTime() - this.timestamp_before.getTime()) /
          1000;

        this.$emit("task-completed", [
          this.timestamp_before,
          this.timestamp_after,
          this.timeToComplete,
        ]);
        this.scrollToElement(this.taskData.tileNo);
      }
    },

    proceed() {
      this.hide();
      var nextSection = this.order.indexOf(this.taskData.tileNo) + 1;
      this.scrollToElement(this.order[nextSection]);
    },

    storeTries(tries) {
      this.triesLeft = tries;
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
  },
};
</script>
<template>
  <div class="is-info content" :id="this.tileNo">
    <div>
      <div class="has-text-link-dark has-text-left title is-5 is-json">
        Lesson 3: SIEM events & alarms (text)
      </div>
      <div class="buttons is-left mt-5">
        <button
          @click="this.showInfo = true"
          class="button is-rounded is-info"
          v-if="!showInfo"
        >
          Show lesson
        </button>
        <button
          @click="this.showInfo = false"
          class="button is-rounded is-info is-light"
          v-else
        >
          Hide lesson
        </button>
      </div>
      <!-- show main lesson content -->
      <div class="content" v-if="showInfo">
        <div class="has-text-link-dark has-text-left title is-6 is-json">
          SIEM EVENTS
        </div>

        <div class="pl-2">
          <div class="block">
            By the time a 
            <span class="has-text-dark has-text-weight-bold">log</span>
            enters the SIEM, it is called an 
            <span class="has-text-dark has-text-weight-bold">event.</span>
            So logs and events are basically the 
            <span class="has-text-dark has-text-weight-bold">same thing.</span>
            SIEM events consist of 
            <span class="has-text-dark has-text-weight-bold">different kinds</span>
            of 
            <span class="has-text-dark has-text-weight-bold">information,</span>
            stored and organized by event 
            <span class="has-text-dark has-text-weight-bold">fields.</span>
          </div>
          <div class="block">
            In the dashboard's
            <span class="has-text-dark has-text-weight-bold">Event Overview</span>  
            you can see some of the most relevant fields.
          </div>
          <img src="./../assets/SIEM_event.png" class="image pl-2" style="height: auto width: auto">
          <br> 
          <div class="block">
            The SIEM distinguishes different 
            <span class="has-text-dark has-text-weight-bold">event types</span> 
            by assigning each type a tuple of 
            <span class="is-family-monospace has-background-light">plugin_sid</span>
            and
            <span class="is-family-monospace has-background-light">title.</span>
          </div>
          <div class="block">
            The field 
            <span class="is-family-monospace has-background-light">category</span>
            tells us if the log is just some INFO to notice or if it's a WARNING that needs closer inspection.
          </div>
          <div class="block mb-5">
            In the
            <span class="has-text-dark has-text-weight-bold">detail view,</span>          
            there's even more information. For example, in the field 
            <span class="is-family-monospace has-background-light">custom_data</span>
            you find an event's
            <span class="has-text-dark has-text-weight-bold">full log message.</span>
          </div>
        </div>

        <div class="has-text-link-dark has-text-left title is-6 is-json">
          SIEM ALARMS
        </div>

        <div class="pl-2">
          <div class="block">
            The SIEM triggers an alarm if predefined rules apply. The rules tell the SIEM what events to watch out for and in which sequence. If you must know, this monitoring is done by the 
                <span class="has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                    :data-tooltip="`this is where the magic of a SIEM happens: it's the thing that notices when something is fishy`"
                >
                    <span class="has-text-link-dark has-text-weight-bold">
                        correlation engine.
                    </span>
                </span>
         
          </div>
          <div class="block">
                <span class="has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                    :data-tooltip="'hey SIEM 👋&nbsp; please tell me with an alarm 🚨&nbsp; when you see event A one time 🔍 followed by event B five times 🔍'"
                >
                    <span class="has-text-link-dark has-text-weight-bold">
                        Hover here for a simple rule example.
                    </span>
                </span>
          </div>
          <div class="block mb-3">
            Like events, alarms also have a 
            <span class="has-text-dark has-text-weight-bold">detail view.</span>           
            Here you can see the 
            <span class="has-text-dark has-text-weight-bold">full log messages</span>
            of 
            <span class="has-text-dark has-text-weight-bold">all the events</span>          
            that are responsible for triggering the alarm.
          </div>
        </div>

        <!-- buttons for showing additional lesson content -->
        <div class="buttons is-left mt-5">
          <button
            @click="this.showAdditionalInformation = true"
            class="button is-rounded"
            v-if="!showAdditionalInformation"
          >
            Tell me more
          </button>
          <button
            @click="this.showAdditionalInformation = false"
            class="button is-rounded"
            v-else
          >
            Show less
          </button>
        </div>
        
        <!-- show additional lesson content -->
        <div class="pl-4" v-if="showAdditionalInformation">
          <div class="has-text-link-dark has-text-left title is-6 is-json">
              Here are some definitions of relevant fields:
          </div>
          <ul>
            <li>
              <span class="is-family-monospace has-background-light">title:</span>
              the 
              <span class="has-text-dark has-text-weight-bold">summary</span> 
              of the 
              <span class="has-text-dark has-text-weight-bold">log message</span> 
            </li>
            <li>
              <span class="is-family-monospace has-background-light">plugin_sid:</span>
              a unique ID that is used by the SIEM to 
              <span class="has-text-dark has-text-weight-bold">identify</span> 
              different log
              <span class="has-text-dark has-text-weight-bold">types,</span> 
               e.g., a log of a network packet or a log of a sensor update
            </li>
            <li>
              <span class="is-family-monospace has-background-light">sensor:</span>
              the system that 
              <span class="has-text-dark has-text-weight-bold">produced</span> 
              the log; NB: do not confuse this with the
              <span class="has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                  :data-tooltip="'they measure the liquid level in the filling machine, which then get logged by PLCs'"
              >
                  <span class="has-text-link-dark has-text-weight-bold">
                      sensors of the filling plant
                  </span>
              </span>  
              itself
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  name: "TextLesson1",

  props: {
    order: {},
  },

  data() {
    return {
      tileNo: "textlesson1",
      showAdditionalInformation: false,
      showInfo: true,
    };
  },

  methods: {
    proceed() {
      this.showAdditionalInformation = false;
      var nextSection = this.order.indexOf(this.tileNo) + 1;
      console.log(nextSection);
      this.scrollToElement(this.order[nextSection]);
    },

    scrollToElement(id) {
      //const el = document.getElementsByClassName(className)[0];
      const el = document.getElementById(id);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", alignToTop: true });
      });
    },
  },
};
</script>

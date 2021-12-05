<template>
  <div>
    <div class="is-info content" id="info1">
      <div class="mr-2 content is-size-6 has-text-justified">
        <!-- display title and subtitle -->
        <div>
          <text class="has-text-yellow has-text-left is-json title"
            >1.2 EventTypes.</text
          >
          <img
            src="./../assets/information.svg"
            class="image is-pulled-right"
            style="height: 120px"
          />
          <br />
          <text class="has-text-grey subtitle nice-subtitle">SIEM Basics</text>
        </div>

        <!-- display buttons Continue and Show/Hide to 
              - continue to the next lesson/task/unit while hiding the content below the title and subtile, or to
              - show/hide the content below the title and subtitle -->
        <div class="buttons is-left mt-5">
          <button class="button is-rounded submit-button"
            @click="proceed();"
          >
            Conitinue
          </button>

          <button class="button is-rounded is-red-br is-light"
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

        <!-- display text-based lesson -->
        <div class="pt-4" style="display: table-cell !important"
          v-if="showContent">
          <div>
            <p>
              The system produces different kinds of log data. The SIEM treats these
              logs as Security Events with different <strong>Event Types</strong>.
              This can be information about the current state of a system component
              (e. g. PLC sensor data) or a warning message that tells us something
              is not working right or a possibly malicious activity was detected.
              <br />
              A Event Type is defined by the following properties:
            </p>
            <ul>
              <li>
                <strong class="">plugin_sid:</strong> the ID of the event type
              </li>
              <li>
                <strong class="">title:</strong> gives information on what the Event
                is about (e. g. "Internal ENIP tag (SENSOR 3) updated")
              </li>
            </ul>
            <br />

            <strong class="is-primary-darker"> Example: </strong>
            SIEM-Event Search:
            <figure class="image">
              <img src="./../assets/EventType.png" />
            </figure>
            <p class="is-italic pt-1">
              On 09/02/2021 at 15:15:51 a SIEM Event of the Event-Type 
              <strong class="is-primary-darker">
                "Internal ENIP tag (SENSOR 3) updated" - plugin_sid: 2
                </strong>
              was detected.
            </p>
          </div>

          <!-- display additional educational material -->
          <div>
            <div class="buttons is-left mt-5">
              <button class="button is-rounded"
                v-if="!showAdditionalContent"
                @click="showAdditional()"          
              >
                Show More
              </button>
              <button class="button is-rounded"
                v-else
                @click="hideAdditional()"
              >
                Show Less
              </button>
            </div>
            <div v-if="showAdditionalContent">
              <ul>
                <li>
                  <strong>src_ip:</strong>
                  Source IP - refers to the sender of the Event.
                </li>
                <li>
                  <strong>dst_ip:</strong>
                  Destination-IP -refers to the receiver of the Event. If the Event
                  is e.g. for information purposes only this is the same as th
                  Source-IP.
                </li>
                <li>
                  <strong>plugin_id:</strong>
                  a ID that it used by the SIEM to identify SIEM Events in the
                  system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {  
  name: "DirInfo1",

  components: {

  },

  props: {
    order: {},
  },
  data() {
    return {
      showContent: true,
      showAdditionalContent: false,
    };
  },

  methods: {
    proceed() {
      this.hide();
      this.hideAdditional();
      var nextSection = this.order.indexOf("info1") + 1;
      console.log(nextSection);
      this.scrollToElement(this.order[nextSection]);
    },

    hide() {
      this.showContent = false;
    },

    show() {
      this.showContent = true;
    },

    hideAdditional() {
      this.showAdditionalContent = false;
    },

    showAdditinoal() {
      this.showAdditionalContent = true;
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
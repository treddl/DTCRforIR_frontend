<template>
  <div class="is-info content" :id="this.tileNo">
    <div>
      <div class="has-text-link-dark has-text-left title is-5 is-json" >
          Lesson 3: Deep dive into SIEM alarms & events (text)
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

      <div class="content" v-if="showInfo" >
        
        <div class="block">here goes the content of the text lesson</div>    

        <div>
            <div class="buttons is-left mt-5">
            <button
                @click="this.showAdditionalInformation = true"
                class="button is-rounded"
                v-if="!showAdditionalInformation"
            >
                Show More
            </button>
            <button
                @click="this.showAdditionalInformation = false"
                class="button is-rounded"
                v-else
            >
                Show Less
            </button>
            </div>

            <div v-if="showAdditionalInformation">
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
      showInfo: false,
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
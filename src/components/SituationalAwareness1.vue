<template>
  <div class="is-info content" :id="this.tileNo">
    <div>
      <div class="has-text-link-dark has-text-left title is-5 is-json" >
          Situational Awareness & Workflow
      </div>

      <div class="content"
        v-if="showInfo">
         
        <div class="block">The SIEM triggered our first alarm:  
            <span class="is-family-monospace has-background-light">
                Successful test of SIEM alarm function
            </span> 
        </div>
        <div class="block">This test alarms tells us that 
            <span class="has-text-dark has-text-weight-bold">
              all hosts
            </span>
            in the network are 
            <span class="has-text-dark has-text-weight-bold">
              online.
            </span>
            </div>

        <div class="block">As the name suggests, this is not a real security incident. The alarm does however show us that all 
            <span class="has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                :data-tooltip="'e.g., the SIEM successfully correlates warning logs'"
             >
                <span class="has-text-link-dark has-text-weight-bold">
                     security measures
                </span>
            </span> 
            are functioning fine.
        </div>
        <div class="block">We'll use this test alarm to get you started with incident response.</div>
        <div class="block">Your job now is to</div>    
            <ul>
            <li>
                <span class="has-text-dark has-text-weight-bold">
                identify
                </span>
                the 
                <span class="has-text-dark has-text-weight-bold">
                source host
                </span>
                of the network scan
            </li>
            <li>
                <span class="has-text-dark has-text-weight-bold">
                identify
                </span>
                the 
                <span class="has-text-dark has-text-weight-bold">
                events
                </span>
                that indicate the 
                <span class="has-text-dark has-text-weight-bold">
                normal operation
                </span>
                of the filling plant
            </li>
            </ul>

        <div class="block">Below we've prepared some 
            <span class="has-text-dark has-text-weight-bold">
               lessons
            </span> 
            with all the relevant 
            <span class="has-text-dark has-text-weight-bold">
               background knowledge
            </span> 
            . 
            You can 
            <span class="has-text-dark has-text-weight-bold">
               check them out now.
            </span> 
            Or, if you feel brave enough, head straight to the tasks in the Identification Phase. Happy investigating!
        </div>
      </div>
      <div class="buttons is-left mt-5">
        <button
          @click="this.showInfo = true"
          class="button is-rounded is-info"
          v-if="!showInfo"
        >
          Show info
        </button>
        <button
          @click="this.showInfo = false"
          class="button is-rounded is-info is-light"
          v-else
        >
          Hide info
        </button>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  name: "SituationalAwareness1",

  props: {
    order: {},
  },

  data() {
    return {
      tileNo: "sa1",  
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
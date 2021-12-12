<template>
  <div class="is-info content" :id="this.tileNo">
    <div>
      <div class="has-text-link-dark has-text-left title is-5 is-json" >
          Situational Awareness & Workflow
      </div>

      <div class="buttons is-left mt-5">
        <button class="button is-rounded submit-button" 
            @click="proceed()">
            CONTINUE
        </button>
        <button
          @click="this.showInfo = true"
          class="button is-rounded is-light is-red-br"
          v-if="!showInfo"
        >
          Show
        </button>
        <button
          @click="this.showInfo = false"
          class="button is-rounded is-light"
          v-else
        >
          Hide
        </button>
      </div>

      <div class="content"
        v-if="showInfo">
         
        <div class="block">The SIEM triggered our first alarm 
            <span class="is-family-monospace has-background-light">Successful test of SIEM alarm function</span> 
        </div>
        <div class="block">This test alarms tells us that all hosts in the network are online.</div>

        <div class="block">As the name suggests. This is not a real security indicent. The alarm does however show us that all security measures are functioning fine.</div>
        <div class="block">We'll use this test alarm to get you started with incident response.</div>
        <div class="block">Your job is now to</div>    
            <ul>
            <li>
                identify the source host of the network scan
            </li>
            <li>
                identify the events that indicate the normal operation of the filling plant
            </li>
            </ul>

        <div class="block">Below we're prepared some lessons with all the relevant background knowledge. 
            You can check them out now. Or, if you feel brave enough, head straight to the tasks in the Identification Phase. Happy investigating! 🧑‍💻
        </div>
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
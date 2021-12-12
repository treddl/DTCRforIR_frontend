<template>
  <div class="is-info content" :id="this.tileNo">
    <div>
      <div class="has-text-yellow has-text-left title is-3 is-json" >
          Situational Awarenes & Workflow
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
         
        <div class="block">This time the SIEM triggered a serious looking alarm 
            <span class="is-family-monospace has-background-light">MitM attack via ARP spoofing</span> 
        </div>
        <div class="block">Based on the type of the alarm we know that there is an intruder in our network.</div>
        <div class="block">One of the targets seems to be PLC1. We know this because PLC1 produces WARING logs.</div>
        <div class="block">The attack discrupts the filling process. This is no good news at all.</div>
        <div class="block">Your job is now to</div>    
            <ul>
            <li>
                identify both the other target of the attack and the host acting as the MitM
            </li>
            <li>
                stop the attack by isolating the attacker and cleaning up their malicous activity
            </li>
            </ul>

        <div class="block">Below you'll find fruther lessons. Best of luck to you and happy responding
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  name: "SituationalAwareness2",

  props: {
    order: {},
  },

  data() {
    return {
      tileNo: "sa2",  
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
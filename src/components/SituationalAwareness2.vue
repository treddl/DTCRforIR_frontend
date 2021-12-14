<template>
  <div class="is-info content" :id="this.tileNo">
    <div>
      <div class="has-text-link-dark has-text-left title is-5 is-json" >
          Situational Awareness & Workflow
      </div>
      <div class="content"
        v-if="showInfo">
         
        <div class="block">This time the SIEM triggered a serious looking 
            <span class="has-text-dark has-text-weight-bold">
              alarm
            </span>
            :
            <span class="is-family-monospace has-background-danger-light">MitM attack via ARP spoofing</span> 
        </div>
        <div class="block">
            Based on the type of the alarm we 
            <span class="has-text-dark has-text-weight-bold">
              know
            </span>
             that there is an 
            <span class="has-text-dark has-text-weight-bold">
              intruder in our network
            </span>
            .
        </div>
        <div class="block">
            <span class="has-text-dark has-text-weight-bold">
              One
            </span>
             of the 
            <span class="has-text-dark has-text-weight-bold">
              targets
            </span>
              is 
            <span class="has-text-dark has-text-weight-bold">
             PLC1
            </span>
            . We know this because PLC1 produces 
            <span class="has-text-dark has-text-weight-bold">
              WARING logs.
            </span>
            
        </div>
        <div class="block">
            The attack 
            <span class="has-text-dark has-text-weight-bold">
              discrupts
            </span>
             the 
            <span class="has-text-dark has-text-weight-bold">
              filling process.
            </span>
             The highest 
            <span class="has-text-dark has-text-weight-bold">
              priority
            </span>
             is to get the filling process 
            <span class="has-text-dark has-text-weight-bold">
              back up running.
            </span>
            
        </div>
        <div class="block">Your job now is to</div>    
            <ul>
            <li>
                <span class="has-text-dark has-text-weight-bold">
                  identify
                </span>
                 the
                <span class="has-text-dark has-text-weight-bold">
                  other target
                </span>                
                 of the attack as well as 
                <span class="has-text-dark has-text-weight-bold">
                  the host acting as the MitM
                </span>
            </li>
            <li>
                <span class="has-text-dark has-text-weight-bold">
                  stop
                </span>
                 the attack by 
                <span class="has-text-dark has-text-weight-bold">
                  isolating
                </span>
                 the attacker and 
                <span class="has-text-dark has-text-weight-bold">
                  identify cleaning up
                </span>                
                their malicous activity
            </li>
            </ul>

        <div class="block">
            Below you'll find 
            <span class="has-text-dark has-text-weight-bold">
               further lessons
            </span>
            . Best of luck to you and happy responding!
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
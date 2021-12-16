<template>
  <div class="is-info content" :id="this.tileNo">
    <div>
      <div class="has-text-link-dark has-text-left title is-5 is-json" >
          Lesson 5: Let it shell<span>&#35;</span>, let it shell<span>&#35;</span>, let it shell<span>&#35;</span> (text)
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
          What is a shell?
        </div>

          <div class="pl-2">
            <div class="block">
              In simple terms, a shell is a computer program that lets you interact with a computer's operating system.  
            </div>
            <div class="block mb-5"></div>
          </div>

        <div class="has-text-link-dark has-text-left title is-6 is-json">
          Working with a computer's network interfaces
        </div>
          <div class="pl-2">
            <div class="block">
              To view the network interfaces available on the computer, run <span class="is-family-monospace has-background-light">ip link show</span>
            </div>
            <div class="block mb-5">
              To turn on or off a specific network interface, run <span class="is-family-monospace has-background-light">ip link set dev NAME up|down:</span>
            </div>
          </div>

        <div class="has-text-link-dark has-text-left title is-6 is-json">
          Working with a computer's ARP cache
        </div>
          <div class="pl-2">
            <div class="block">
              To view the current ARP cache on the computer, run <span class="is-family-monospace has-background-light">arp</span>
            </div>
            <div class="block">
              To make changes to a specific entry in the ARP cache, run <span class="is-family-monospace has-background-light">arp IP_ADDR MAC_ADDR</span>
            </div>
            <div class="block mb-5"></div>
          </div>

        

        <!-- buttons for showing additional lesson content -->
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
        
        <!-- show additional lesson content -->
        <div v-if="showAdditionalInformation">
          <div class="bock">Here are some tipps on using a shell:</div>
          <ul>
            <li>
              with the keys up and down you can go through your history of typed commands; this is a neat feature if you have a typo in a longer command and don't want to retype it
            </li>
            <li>
              <span class="is-family-monospace has-background-light">clear</span> run this command to clear the screen; helpful when you have a lot of output you don't need anymore
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  name: "TextLesson2",

  props: {
    order: {},
  },

  data() {
    return {
      tileNo: "textlesson2",  
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
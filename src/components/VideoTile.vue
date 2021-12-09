<template>
  <div>
    <!-- maps the videos tileNo to this elememt's id -->
    <div class="is-info content" :id="this.tileNo">
      <div class="mr-2 content is-size-6 has-text-justified">
        <!-- display title and subtitle -->
        <div>
        <text class="has-text-yellow has-text-left title is-json">
          {{ this.title }}
        </text>
        <br>
        <text class="has-text-grey subtitle nice-subtitle">
          {{ this.subtitle }}
        </text>
        </div>
        <!-- display buttons Continue and Show/Hide
              - continue to the next lesson/task/unit while hiding the content below the title and subtile, or to
              - show/hide the content below the title and subtitle --> 
        <!-- TODO outosource this into a subcomponent if possible -->
        <div class="buttons is-left mt-5">
          <button class="button is-rounded submit-button" 
            @click="proceed()"
          >
            Continue
          </button>

          <button class="button is-rounded is-red-br is-light"
            v-if="!showContent"
            @click="this.showContent = true"
                   
          >
            Show Video
          </button>

          <button class="button is-rounded is-light"
            v-else
            @click="this.showContent = false"
        
          >
            Hide Video
          </button>
        </div>

        <!-- display video from YouTube -->
        <div class="videoWrapper" 
          v-if="showContent">
          <!-- Copy & Pasted from YouTube -->
          <iframe
            class="is-video"
            width="560"
            height="349"
            :src="this.url"
            frameborder="0"
            allowfullscreen
            allow=""
          ></iframe>
        </div>

  
  <div class="buttons is-left mt-5">

          <button class="button is-rounded is-red-br is-light"
            v-if="!showTranscript"
            @click="this.showTranscript = true"
                   
          >
            Show Transcript
          </button>

          <button class="button is-rounded is-light"
            v-else
            @click="this.showTranscript = false"
        
          >
            Hide Transcript
          </button>
        </div>


      <div v-if="showTranscript">
        <text class="has-text-justified"
            v-html="this.transcript"
          ></text>

      </div>




      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 'name' represents the tag name to be used in the parent component
  // "VideoTile" translates to either <VideoTile> or <video-tile>
  name: "VideoTile",

  // receive data that gets passed down from parent component (i.e., App.vue)
  // in this case App.vue passes down data from data/video_data.js
  props: {
    customData: {
      required: true,
    },
    order: {},
  },
  
  // variables to ues in the HTML template
  data() {
    return {
      tileNo: this.customData.tileNo,
      title: this.customData.title,
      subtitle: this.customData.subtitle,
      url: this.customData.url,      
      transcript: this.customData.transcript,
      showContent: true,
      showTranscript: false
    };
  },

  // methods to ues in the HTML template
  methods: {
    proceed() {
      this.showContent=false;
      var nextSection = this.order.indexOf(this.tileNo) + 1;
      this.scrollToElement(this.order[nextSection]);
      this.showTranscript = true;
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



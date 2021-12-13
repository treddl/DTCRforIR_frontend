<template>
  <div>
    <!-- maps the videos tileNo to this elememt's id -->
    <div class="is-info content" :id="this.tileNo">
      <div class="content">
        <div class="has-text-link-dark has-text-left title is-5 is-json" v-html="this.title">
        </div>

        <!-- display buttons Continue and Show/Hide
              - continue to the next lesson/task/unit while hiding the content below the title and subtile, or to
              - show/hide the content below the title and subtitle --> 
        <!-- TODO outosource this into a subcomponent if possible -->

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
          <button class="button is-rounded submit-button" 
                @click="proceed()"
                v-if="String(this.videoData.tileNo) == 'video1'"
              >
                Continue
          </button>
          <button class="button is-rounded is-info"
            v-if="!showContent"
            @click="show()"
            title="Show hidden content"          
          >
            Show lesson
          </button>
          <button class="button is-rounded is-info is-light"
            v-else
            @click="hide()"
            title="Hide content below"          
          >
            Hide lesson
          </button>
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
    videoData: {
      required: true,
    },
    order: {},
  },
  
  // variables to ues in the HTML template
  data() {
    return {
      tileNo: this.videoData.tileNo,
      title: this.videoData.title,
      subtitle: this.videoData.subtitle,
      url: this.videoData.url,      
      transcript: this.videoData.transcript,
      showContent: this.onIntroVideo(),
      showTranscript: false,
    };
  },

  // methods to ues in the HTML template
  methods: {
    onIntroVideo() {
        if (String(this.videoData.tileNo) == "video1") {
            return true;
        } else {
            return false;
        }
    },
    
    proceed() {
      this.hide();
      var nextSection = this.order.indexOf(this.tileNo) + 1;
      this.scrollToElement(this.order[nextSection]);
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

<template>
  <div>
    <div class="is-info content" :id="this.tileNo">
      <div class="content">
        <div class="has-text-link-dark has-text-left title is-5 is-json" 
          v-html="this.title"
        >
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
          <button class="button is-rounded is-info"
            v-if="!showContent"
            @click="this.showContent = true"
            title="Show hidden content"          
          >
            Show lesson
          </button>
          <button class="button is-rounded is-info is-light"
            v-else
            @click="this.showContent = false"
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
  name: "VideoTile",

  props: {
    videoData: {
      required: true,
    },
    order: {},
  },
  
  data() {
    return {
      tileNo: this.videoData.tileNo,
      title: this.videoData.title,
      subtitle: this.videoData.subtitle,
      url: this.videoData.url,      
      showContent: false,
    };
  },

  methods: {
  },
};
</script>

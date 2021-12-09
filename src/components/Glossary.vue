<template>

<nav class="glossary"
            >
            
            <div class="buttons is-right">

                      <button class="button is-primary is-small is-nav-button has-tooltip-arrow has-tooltip-left"
                        @click="(showGlossary = true), scrollToElement(this.info1)"
                        :data-tooltip="'Show Glossary'"
                        v-if="!showGlossary"
                      >
                        <font-awesome-icon :icon="['fa', 'book-open']" />
                      </button>

                      <button class="button is-primary is-small is-nav-button has-tooltip-arrow has-tooltip-left"
                        @click="(showGlossary = false), scrollToElement(this.info1)"
                        :data-tooltip="'Hide Glossary'"
                        v-else
                      >  
                      <font-awesome-icon :icon="['fa', 'book']" />
                      </button>
                      </div> 
  

              
           <div class="glossary-content" v-if="showGlossary">
               <a @click="scrollToElement('testID'), showGlossary=false"> plugin_sid, title </a> <br>
               <a @click="scrollToElement(this.order[2]), showGlossary=false"> Inhalt 2 </a> <br>
               <a @click="scrollToElement(this.order[3]), showGlossary=false"> Inhalt 3 </a> <br>
               <a @click="scrollToElement(this.order[3]), showGlossary=false"> Inhalt 4 </a>
               </div>
            </nav>
            
</template>

<script>
export default {
  name: "Glossary",

  data () {
      return {
    showGlossary: false,
    }
  },

  props: {
  
    order: {} 
  },

methods: {
  scrollToElement(id) {
      const el = document.getElementById(id);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth",
            block: 'center',
            inline: 'center'});
      });
    }

},
};
</script>

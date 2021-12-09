<template>
  <div class="b-black">
    <v-shell 
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      @shell_output="prompt"
      id="container"
    ></v-shell>
  </div>
</template>

<script>
export default {
  name: "Terminal",

  props: {
      customData: {
          type: Object,
          required: false
      }
  }
  
  
  ,


  data() {
    return {      
      host: this.customData.host,
      data: this.customData,
      send_to_terminal: "",
      banner: {
        header: "Cyber Range Shell",
        subHeader: "",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
          first: "",
          second: "",
          time: 750
        },
        //sign: this.getHostName(this.customData.host)
        sign: this.getHostName()
      },
    
    };
  },

  computed: {

    commands() { 
      
      console.log("data: ", this.customData)
      const out_ifconfig = this.customData.shellOutput.ifconfig
      const out_arp = this.customData.shellOutput.arp
      const out_whoami = this.customData.shellOutput.whoami
      const c = [
        { name: "ifconfig",
       
          get() {
            return out_ifconfig;
        }
        },
        {
          name: "arp",
      
          get() {
            return out_arp;
          }
        },
         {
          name: "whoami",
      
          get() {
            return out_whoami;
          }
        }
      ]

      return c

    }




  },

  



  methods: {
    getHostName() {
        //return "root@" + data + "~#"
        //var data = "plc1"
        return "root@" + this.host + "~#"
    },
      
    prompt(value) {
      switch (value.trim()) {


       
        default:
            this.send_to_terminal = `Command '${value}' not found. Enter 'help' for a list of valid commands.`;
      }
    }
  }
};
</script>



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
  },

  data() {
    return {      
      host: this.customData.host,
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
        sign: "root@" + this.host + "~#"
      },
      commands: [

        {
          name: "uname",
          get() {
            return navigator.appVersion;
          }
        }
      ]
    };
  },

  methods: {
    prompt(value) {
      switch (value.trim()) {
        case "ifconfig":
            this.send_to_terminal = this.customData.shellOutput.ifconfig;
            break;
        case "arp":
            this.send_to_terminal = this.customData.shellOutput.arp;
            break;
        case "whoami":
            this.send_to_terminal = this.customData.shellOutput.whoami;
            break;
        default:
            this.send_to_terminal = `Command '${value}' not found. Enter 'help' for a list of valid commands.`;
      }
    }
  }
};
</script>



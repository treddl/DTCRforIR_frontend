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
    terminalData: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      shellOut: this.terminalData.shellOutput,
      data: this.customData,
      send_to_terminal: "",
      banner: {
        header: "Cyber Range Shell",
        subHeader: "",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
          first: "",
          second: "",
          time: 750,
        },
        sign: this.getHostName(),
        apiIsRecovered: false,
      },
    };
  },

  computed: {
    commands() {
      console.log("data: ", this.customData);
      const out_ifconfig = this.customData.shellOutput.ifconfig;
      const out_arp = this.customData.shellOutput.arp;
      const out_whoami = this.customData.shellOutput.whoami;
      const c = [
        {
          name: "ifconfig",

          get() {
            return out_ifconfig;
          },
        },
        {
          name: "arp",

          get() {
            return out_arp;
          },
        },
        {
          name: "whoami",

          get() {
            return out_whoami;
          },
        },
      ];

      return c;
    },
  },

  methods: {
    getHostName() {
      return "root@HOST~#";
    },

    prompt(value) {
      switch (value.trim()) {
        case "ifconfig":
            this.send_to_terminal = this.shellOut.ifconfig;
            break;
        case "arp":
            if (this.arpIsRecovered) {
                this.send_to_terminal = this.shellOut.arpOutputRecoverd;
            } else 
            this.send_to_terminal = this.shellOut.arpOutputPoisend;
            break;
        case "arp -s 10.0.0.3 00:00:00:00:00:03":
            this.send_to_terminal = "";
            this.arpIsRecovered = true;
            break;
        case "whoami":
            this.send_to_terminal = this.shellOut.whoami;
            break;
        default:
            this.send_to_terminal = `Command '${value}' not found. Enter 'help' for a list of valid commands.`;
      }
    },
  },
};
</script>



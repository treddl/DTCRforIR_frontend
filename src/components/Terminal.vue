<template>
  <div class="b-black">
    <v-shell
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      :style="{height:'30em', overflow: 'scroll'}" 
      @shell_output="prompt"
      id="container"
    ></v-shell>
  </div>
</template>

<script>
export default {
  name: "Terminal",

  props: {
      termData: {
      },
      userPseudonym: {}
  },

  data() {
    return {
      terminalData: this.termData.terminalData,
      send_to_terminal: "",
      banner: {
        header: "Cyber Range Shell",
        subHeader: "",
        helpHeader: 'Enter "help" for a list of valid command options.',
        emoji: {
            first: "",
            second: "",
            time: 750
        },
        sign: this.getTerminalSign(),
      },
     hostName: this.getHostName(),
    };
  },
  
  computed: {
    commands() {
      console.log("data: ", this.terminalData);
      const c = [
        {
          name: "clear : clears terminal screen"
        },
        {
          name: "ip link [show|set] [INTERFACE] [OPTIONS] : lists|sets network interfaces"
        },
        {
          name: "arp [OPTIONS] [IP_ADDR] [MAC_ADDR] : lists|sets arp Cache (entries)"
        },
        {
          name: "whoami : shows current user"
        },
      ];
      return c;
    },
  },

  methods: {
    getHostName() {
        return String(this.termData.terminalData.host);
    },
    changeHostName() {
        this.hostName = String(this.userPseudonym);
        this.banner.sign = String(this.userPseudonym) + "@INCIDENT-RESPONSE~$"; 
    },
    getTerminalSign() {
      return "root@" + this.getHostName() + "~#";
      //  return "not";
    },
    prompt(value) {
      const hostName = this.hostName;
      if (hostName == String(this.userPseudonym)) {
        this.send_to_terminal = `You've completed the task. 
Submit the Flag: eating-eskimo`;
      } else {
switch (value.trim()) {
        case "ip":
            this.send_to_terminal = `Command '${value}' not complete: missing arguments.`;
            break;
        case "ip link":
            this.send_to_terminal = `Command '${value}' not complete: missing arguments.`;
            break;
        case "ip link show":
            this.send_to_terminal = this.terminalData.inputOutput.ipLinkShow[1];
          break;
        case "ip link set dev work-station-eth0 down":
            if (hostName == 'work-station') {
                this.send_to_terminal = this.terminalData.inputOutput.ipLinkDown[1];
                this.changeHostName();
            } else {
                `Nice try '$(this.userPseudonym)' `
            }
          break;
        case "ip link set dev plc1-eth0 down":
            if (hostName == 'plc1') {
                this.send_to_terminal = "";
            } else {
                `Command '${value}' not valid: arguments don't match device.`
            }
          break;
        case "ip link set dev plc3-eth1 down":
            if (hostName == 'plc3') {
                this.send_to_terminal = "";
            } else {
                `Command '${value}' not valid: arguments don't match device.`
            }
          break;
        case "arp":
          if (!this.arpIsRecovered) {
              this.send_to_terminal = this.terminalData.inputOutput.arpCache[1];
          } else {
              this.send_to_terminal = this.terminalData.inputOutput.arpCache[2];
            }
          break;
        case "arp -s":
            this.send_to_terminal = `Command '${value}' not complete: missing arguments`;
            break;
        case "arp -s 10.0.0.3 00:00:00:00:00:03":
          if (hostName == "plc1") {
            this.send_to_terminal = `ARP cache updated
use command 'arp' to show updated ARP cache`;
            this.arpIsRecovered = true;
          } else if (hostName == "plc3") {
            this.send_to_terminal = `Invalid command: ARP cache cannot be set for own interface.`;
          }
          break;
        case "arp -s 10.0.0.1 00:00:00:00:00:01":
          if (hostName == "plc1") {
            this.send_to_terminal = `Invalid command: ARP cache cannot be set for own interface.`;
          } else if (hostName == "plc3") {
            this.send_to_terminal = `ARP cache updated
use command 'arp' to show updated ARP cache`;
            this.arpIsRecovered = true;
          }
          break;
       // case "ping 10.0.0.5":
       //    this.pinging();
       //    break;
        case "whoami":
          this.send_to_terminal = this.terminalData.inputOutput.whoami[1];     
          break;
        default:
          this.send_to_terminal = `Command '${value}' not valid. Enter 'help' for a list of valid commands.`;
      }
      }
      
    },
  },
};
</script>



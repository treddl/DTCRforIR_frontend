const Unit2RespTasks = {
    tileNo: "unit2Resp",
    level: 2,
    successMessage: "⛑ Fantastic work! You stopped the attacker before they could do any more harm.",
    partSuccessMessage: "⛑ Fantastic work! Together we stopped the attacker before they could do anymore harm.",
    failMessage: "Don't beat yourself up. Maybe response just isn't your cup of tea.",
    rememberMessage: "",
    responsePhase: "identification",
    phaseIntroduction: '<div class="block">This is going great. We established which host acts as the MitM and which hosts are the tragets.</div> <div class="block">Now it is time to stop the attack and recover the affected systems.</div> <div class="block">Follow the response steps below and make a name for yourself as first class incident responder.</div>',
    blanks: [
        {
            level: 4,
            responseActionID: "Step 1",
            responseActionInstruction: 'Isolate the attacking host by turning off its network interface.',

            flagInstruction: "Submit the keyword that indicates the success of the action:",
            flag: "eating-eskimo",
            placeholder: "enter flag here ..",
            hint: 'First you need to find the name of the network interface for ethernet connections. You may want to check out the lesson on <span class="has-text-weight-bold">bash</span> again.',

            isTerminalTask: true,

            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {
                host: "work-station",
                arpIsRecovered: false,
                inputOutput: {
                    ipLinkShow: [
                        `ip link show`,
                        `1: lo: <>LOOPBACK,UP,LOWER_UP<>  state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: work-station-eth0: <>BROADCAST,MULTICAST<> state UP
    link/ether 00:00:00:00:00:05 brd ff:ff:ff:ff:ff:ff link-netnsid 0`
                    ],
                    ipLinkDown: [
                        `ip link set dev work-station-eth0 down`,
                        `Trying to connect to remote 'work-station' ... 
Waiting for response ...
Waiting for response ...
'work-station' is not reachable.
🚩 FLAG: eating-eskimo`
                    ],
                    whoami: [
                        `whoami`,
                        `root`
                    ],
                    arpCache: [
                        `arp`,
                        `Address                  HWtype  HWaddress           Flags Mask            Iface
10.0.0.2                 ether   00:00:00:00:00:02   C                     work-station-eth0
10.0.0.1                 ether   00:00:00:00:00:01   C                     work-station-eth0
10.0.0.3                 ether   00:00:00:00:00:03   C                     work-station-eth0
10.0.0.4                 ether   00:00:00:00:00:04   C                     work-station-eth0`
                    ],
                    command: [
                        ``,
                        ``
                    ],
                },
            }
        },
        {
            level: 5,
            responseActionID: "Step 2",
            responseActionInstruction: 'Recover the ARP cache on PLC1: Replace the spoofed ARP entry with the correct one in mode <span class="is-family-monospace">static</span>',


            flagInstruction: "Submit the key term that indicates the ARP entry is static:",
            flag: "polar-bear",
            placeholder: "",
            hint: 'The answer lies in the ARP cache, more precicely, in the column <span class="is-family-monospace has-background-light">Flags Mask</span>',

            isTerminalTask: true,

            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {
                host: "plc1",
                arpIsRecovered: false,
                inputOutput: {
                    ipLinkShow: [
                        `ip link show`,
                        `1: lo: <>LOOPBACK,UP,LOWER_UP<>  state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: plc1-eth0: <>BROADCAST,MULTICAST<> state UP
    link/ether 00:00:00:00:00:01 brd ff:ff:ff:ff:ff:ff link-netnsid 0`
                    ],
                    ipLinkDown: [
                        ``,
                        ``
                    ],
                    whoami: [
                        `whoami`,
                        `root`
                    ],
                    arpCache: [
                        `arp`,
                        `Address                  HWtype  HWaddress           Flags Mask            Iface
10.0.0.5                 ether   00:00:00:00:00:05   C                     plc1-eth0
10.0.0.2                 ether   00:00:00:00:00:02   C                     plc1-eth0
10.0.0.4                 ether   00:00:00:00:00:04   C                     plc1-eth0
10.0.0.3                 ether   00:00:00:00:00:05   C                     plc1-eth0`,
                        `Address                  HWtype  HWaddress           Flags Mask            Iface
10.0.0.5                 ether   00:00:00:00:00:05   C                     plc1-eth0
10.0.0.2                 ether   00:00:00:00:00:02   C                     plc1-eth0
10.0.0.4                 ether   00:00:00:00:00:04   C                     plc1-eth0
10.0.0.3                 ether   00:00:00:00:00:03   CM FLAG: polar-bear   plc1-eth0`                        
                    ],
                    arpRecovery: [
                        `arp -s 10.0.0.3 00:00:00:00:00:03`,
                        ``
                    ],

                },
            },
        },
        {
            level: 6,
            responseActionID: "Step 3",
            responseActionInstruction: 'Recover the ARP cache on PLC3: Replace the spoofed ARP entry with the correct one in mode <span class="is-family-monospace has-background-light">static</span>',


            flagInstruction: "Submit the key term that indicates the ARP entry is static:",
            flag: "snow-flake",
            placeholder: "",
            hint: 'The answer lies in the ARP cache, more precicely, in the column <span class="is-family-monospace has-background-light">Flags Mask</span>',

            isTerminalTask: true,

            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {
                host: "plc3",
                arpIsRecovered: false,
                inputOutput: {
                    ipLinkShow: [
                        `ip link show`,
                        `1: lo: <>LOOPBACK,UP,LOWER_UP<>  state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: plc3-eth1: <>BROADCAST,MULTICAST<> state UP
    link/ether 00:00:00:00:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid 0`
                    ],
                    ipLinkDown: [
                        ``,
                        ``
                    ],
                    whoami: [
                        `whoami`,
                        `root`
                    ],
                    arpCache: [
                        `arp`,
                        `Address                  HWtype  HWaddress           Flags Mask            Iface
10.0.0.2                 ether   00:00:00:00:00:02   C                     plc3-eth1
10.0.0.4                 ether   00:00:00:00:00:04   C                     plc3-eth1
10.0.0.1                 ether   00:00:00:00:00:05   C                     plc3-eth1
10.0.0.5                 ether   00:00:00:00:00:05   C                     plc3-eth1`,
                        `Address                  HWtype  HWaddress           Flags Mask            Iface
10.0.0.2                 ether   00:00:00:00:00:02   C                     plc3-eth1
10.0.0.4                 ether   00:00:00:00:00:04   C                     plc3-eth1
10.0.0.1                 ether   00:00:00:00:00:01   CM FLAG: snow-flake   plc3-eth1
10.0.0.5                 ether   00:00:00:00:00:05   C                     plc3-eth1`
                    ],
                    arpRecovery: [
                        `arp -s 10.0.0.1 00:00:00:00:00:01`,
                        ``
                    ],

                },
            },
        },
        {
            level: 7,
            responseActionID: "Step 4",
            responseActionInstruction: 'Verify that the malicous activity has stopped. Monitor the SIEM events and verify the normal functioning of the filling plant. From the event that indicates resumed normal operation, submit the plugin_sid, the system’s host name (sensor), and the timestamp.',
            flagInstruction: "Submit the three values, seperated by a comma:",
            flag: "400, plc1",
            placeholder: "",
            hint: 'Remeber that one PLC produced warning logs. The <span class="has-text-weight-medium">same PLC</span> now produces <span class="has-text-weight-medium">info</span> logs indicating <span class="has-text-weight-medium">successful</span> operation.',

            isTerminalTask: false,

            triesLeft: 3,
            wrongTry: false,
            rightTry: false,

        },


    ]
}

export default Unit2RespTasks;
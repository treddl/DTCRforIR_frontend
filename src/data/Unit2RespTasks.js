const Unit2RespTasks = {
    tileNo: "unit2Resp",
    level: 2, 
    responsePhase: "identification",
    phaseIntroduction: '<div class="block">This is going great. We established which host acts as the MitM and which hosts are the tragets. Now it is time to stop the attack and recover the affected systems.</div> <div class="block">Follow the response steps below and make a name for yourself as first class incident responder.</div>',
    apiPath: "",
    blanks: [
        {

            responseActionID: "RA5",
            responseActionInstruction: 'Isolate the attacking host by turning off its network interface.',
            
            
            flagInstruction: "Submit the keyword that indicates the success of the action:",
            flag: "DOWN",
            placeholder: "",
            hint: 'First you need to find the name of the network interface for ethernet connections. You may want to check out the lesson on <span class="has-text-weight-bold">bash</span> again.',

            level: 4,
            apiPath: "",
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {
                    host: "work-station",
                    shellOutput: {    
                        ifconfig: ``,
                    arp: `>`,
                    whoami: `<pre>root</pre>`,
                    arpStatic: ``,
                    },
                    arpFlag: "arp -s 10.0.0.2 00:00:00:00:00:02",
                    empty: `<pre></pre>`
                }
        },
        {
            responseActionID: "RA6",
            responseActionInstruction: 'Recover the ARP cache on PLC1: Replace the spoofed ARP entry with the correct one in mode <span class="is-family-monospace">static</span>',
            
            
            flagInstruction: "Submit the key term that indicates the ARP entry is static:",
            flag: "CM",
            placeholder: "",
            hint: 'The answer lies in the ARP cache, more precicely, in the column <span class="is-family-monospace has-background-light">Flags Mask</span>',

            isTerminalTask: true,
            level: 5,
            apiPath: "stop_mitm",
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {
                    host: "plc1",
                    shellOutput: {    
                        ifconfig: `<pre>lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
                    inet 127.0.0.1  netmask 255.0.0.0
                    inet6 ::1  prefixlen 128  scopeid 0x10<host>
                    loop  txqueuelen 1000  (Local Loopback)
                    RX packets 313774  bytes 21480200 (21.4 MB)
                    RX errors 0  dropped 0  overruns 0  frame 0
                    TX packets 313774  bytes 21480200 (21.4 MB)
                    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

                plc1-eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
                    inet 10.0.0.1  netmask 255.255.255.0  broadcast 10.0.0.255
                    inet6 fe80::200:ff:fe00:1  prefixlen 64  scopeid 0x20<link>
                    ether 00:00:00:00:00:01  txqueuelen 1000  (Ethernet)
                    RX packets 65675  bytes 5452486 (5.4 MB)
                    RX errors 0  dropped 0  overruns 0  frame 0
                    TX packets 91471  bytes 7500318 (7.5 MB)
                    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</pre>`,
                    arp: `<pre>Address                  HWtype  HWaddress           Flags Mask            Iface
                    10.0.0.5                 ether   00:00:00:00:00:05   C                     plc1-eth0
                    10.0.0.3                 ether   00:00:00:00:00:03   C                     plc1-eth0
                    10.0.0.4                 ether   00:00:00:00:00:00   C                     plc1-eth0
                    10.0.0.2                 ether   00:00:00:00:00:02   C                     plc1-eth0</pre>`,
                    whoami: `<pre>root</pre>`,
                    arpStatic: `<pre>Address                  HWtype  HWaddress           Flags Mask            Iface
                10.0.0.3                 ether   00:00:00:00:00:03   CM                    plc1-eth0
                10.0.0.5                 ether   00:00:00:00:00:05   C                     plc1-eth0
                10.0.0.2                 ether   00:00:00:00:00:02   C                     plc1-eth0
                10.0.0.4                 ether   00:00:00:00:00:00   C                     plc1-eth0</pre>`,

                    },
                    arpFlag: "arp -s 10.0.0.2 00:00:00:00:00:02",
                    empty: `<pre></pre>`
},
        },
        {
            responseActionID: "RA7",
            responseActionInstruction: 'Recover the ARP cache on PLC3: Replace the spoofed ARP entry with the correct one in mode <span class="is-family-monospace has-background-light">static</span>',
            
            
            flagInstruction: "Submit the key term that indicates the ARP entry is static:",
            flag: "CM",
            placeholder: "",
            hint: 'The answer lies in the ARP cache, more precicely, in the column <span class="is-family-monospace has-background-light">Flags Mask</span>',

            level: 6,
            apiPath: "stop_mitm",
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {
                    host: "plc3",
                    shellOutput: {    
                        ifconfig: `<pre>lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
                    inet 127.0.0.1  netmask 255.0.0.0
                    inet6 ::1  prefixlen 128  scopeid 0x10<host>
                    loop  txqueuelen 1000  (Local Loopback)
                    RX packets 313774  bytes 21480200 (21.4 MB)
                    RX errors 0  dropped 0  overruns 0  frame 0
                    TX packets 313774  bytes 21480200 (21.4 MB)
                    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

                plc1-eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
                    inet 10.0.0.1  netmask 255.255.255.0  broadcast 10.0.0.255
                    inet6 fe80::200:ff:fe00:1  prefixlen 64  scopeid 0x20<link>
                    ether 00:00:00:00:00:01  txqueuelen 1000  (Ethernet)
                    RX packets 65675  bytes 5452486 (5.4 MB)
                    RX errors 0  dropped 0  overruns 0  frame 0
                    TX packets 91471  bytes 7500318 (7.5 MB)
                    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</pre>`,
                    arp: `<pre>Address                  HWtype  HWaddress           Flags Mask            Iface
                    10.0.0.5                 ether   00:00:00:00:00:05   C                     plc1-eth0
                    10.0.0.3                 ether   00:00:00:00:00:03   C                     plc1-eth0
                    10.0.0.4                 ether   00:00:00:00:00:00   C                     plc1-eth0
                    10.0.0.2                 ether   00:00:00:00:00:02   C                     plc1-eth0</pre>`,
                    whoami: `<pre>root</pre>`,
                    arpStatic: `<pre>Address                  HWtype  HWaddress           Flags Mask            Iface
                10.0.0.3                 ether   00:00:00:00:00:03   CM                    plc1-eth0
                10.0.0.5                 ether   00:00:00:00:00:05   C                     plc1-eth0
                10.0.0.2                 ether   00:00:00:00:00:02   C                     plc1-eth0
                10.0.0.4                 ether   00:00:00:00:00:00   C                     plc1-eth0</pre>`,

                    },
                    arpFlag: "arp -s 10.0.0.2 00:00:00:00:00:02",
                    empty: `<pre></pre>`
                }
        },
        {
            responseActionID: "RA8",
            responseActionInstruction: 'Verify that the malicous activity has stopped. Monitor the SIEM events and verify the normal functioning of the filling plant. From the event that indicates resumed normal operation, submit the plugin_sid, the system’s host name (sensor), and the timestamp.',
            flagInstruction: "Submit the three values, seperated by a comma:",
            flag: "400, plc1, date.object",
            placeholder: "",
            hint: 'Remeber that one PLC produced warning logs. The <span class="has-text-weight-medium">same PLC</span> now produces <span class="has-text-weight-medium">info</span> logs indicating <span class="has-text-weight-medium">successful</span> operation.',

            isTerminalTask: false,
            level: 7,
            apiPath: "",
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
        },


    ]
}

export default Unit2RespTasks;
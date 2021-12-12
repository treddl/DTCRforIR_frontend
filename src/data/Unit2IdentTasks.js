const Unit2IdentTasks = {
    tileNo: "unit2Ident",
    level: 1, 
    responsePhase: "identification",
    phaseIntroduction: 'This time it is critical to get all the information right. Otherwise we risk isolating the wrong systems, causing even more disruptions!',
    blanks: [
        {

            responseActionID: "RA3",
            responseActionInstruction: 'Identify the other host that is the target of the attack. For this, search and review the relevant warnings.',
            flagInstruction: "Submit the host's IP address:",
            flag: "10.0.0.3",
            placeholder: "e.g., 10.0.0.10",
            hint: 'The answer lies in <span class="has-text-weight-bold">one</span> of the ARP-spoof-WARNINGs.',

            isTerminalTask: false,
            level: 2,
            apiPath: "",
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {}
        },
        {
            responseActionID: "RA4",
            responseActionInstruction: 'Identify the host acting as the MitM.',
            flagInstruction: 'Submit the <span class="has-text-weight-bold">host name</span>:',
            flag: "work-station",
            placeholder: "host NAME",
            hint: 'Remember that the <span class="has-text-weight-bold">attacker</span> replaces their MAC address with that of the target.',

            isTerminalTask: false,
            level: 3,
            apiPath: "",
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {}
        },

    ]
}

export default Unit2IdentTasks;
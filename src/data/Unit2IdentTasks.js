const Unit2IdentTasks = {
    tileNo: "unit2Ident",
    level: 1,
    successMessage: "🕵️‍♀️ Great work! But there’s no time to loose, let’s stop the attacker.",
    partSuccessMessage: "🕵️‍♀️ Great work! Never mind that you missed one task.",
    failMessage: "Don't panic, in the next phase the luck is on your side.",
    rememberMessage: "Remember you can always revisit lessons.",
    responsePhase: "identification",
    phaseIntroduction: 'This time it is critical to get all the information right. Otherwise we risk isolating the wrong systems, causing even more disruptions!',
    blanks: [
        {
            level: 2,
            responseActionID: "Step 1",
            responseActionInstruction: 'Identify the other host that is the target of the attack. For this, search and review the relevant warnings.',
            flagInstruction: "Submit the host's IP address:",
            flag: "10.0.0.3",
            placeholder: "e.g., 10.0.0.10",
            hint: 'The answer lies in <span class="has-text-weight-bold">one</span> of the ARP-spoof-WARNINGs.',

            isTerminalTask: false,

            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {}
        },
        {
            level: 3,
            responseActionID: "Step 2",
            responseActionInstruction: 'Identify the host acting as the MitM.',
            flagInstruction: 'Submit the <span class="has-text-weight-bold">host name</span>:',
            flag: "work-station",
            placeholder: "host NAME",
            hint: 'Remember that the <span class="has-text-weight-bold">attacker</span> replaces their MAC address with that of the target.',

            isTerminalTask: false,

            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {}
        },

    ]
}

export default Unit2IdentTasks;
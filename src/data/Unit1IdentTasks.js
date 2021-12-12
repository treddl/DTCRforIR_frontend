const Unit1IdentTasks = {
    tileNo: "unit1Ident",
    level: 0, 
    responsePhase: "identification",
    phaseIntroduction: 'The purpose of the identification phase is to establish the scope of the security incident. It is paramount to know, e.g., which systems behave maliciously and which normally. Only then is an effective response possible.',
    blanks: [
        {

            responseActionID: "RA1",
            responseActionInstruction: 'Identify the source <span class="has-tooltip-multiline has-text-primary has-text-weight-bold is-underlined" :data-tooltip="Any type of computer in a network is a host.">host</span> of the network scan.',
            flagInstruction: "Submit the host's IP address:",
            flag: "10.0.0.4",
            placeholder: "e.g., 10.0.0.10",
            hint: 'Search for and review one of the warning logs “test-warning”.',
            
            isTerminalTask: false,
            level: 0,
            apiPath: "",
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {}
        },
        {
            responseActionID: "RA2",
            responseActionInstruction: "Identify the two event types that indicate the normal operation of the filling plant.",
            flagInstruction: "Submit the two plugin_sids, separated by a comma:",
            flag: "100, 400",
            placeholder: "e.g., 500, 700",
            hint: 'Search for “success” to view only events that indicate normal functioning.',

            isTerminalTask: false,
            level: 1,
            apiPath: "start_mitm",
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {}
        },

    ]
}

export default Unit1IdentTasks;
const Unit1IdentTasks = {
    tileNo: "unit1Ident",
    level: 2,
    successMessage: "🕵️‍♀️ Congrats on your first investigation! You’re now ready to take on a real attack.",
    partSuccessMessage: "🕵️‍♀️ Congrats on your first investigation! (We won't tell anyone you missed one task)",
    failMessage: "Don't worry, next time you'll have more luck.",
    rememberMessage: "Remember you can always revisit lessons.",
    responsePhase: "identification",
    phaseIntroduction: 'The purpose of the identification phase is to establish the scope of the security incident. It is paramount to know, e.g., which systems behave maliciously and which normally. Only then is an effective response possible. To clear the ground, perform the following two steps.',
    blanks: [
        {
            level: 0,
            responseActionID: "Step 1",
            responseActionInstruction: 
            `Identify the source 
<span class="has-tooltip-arrow has-tooltip-multiline has-tooltip-top" 
data-tooltip="Any type of computer in a network is a host.">
    <span class="has-text-primary-dark has-text-weight-bold is-italic">
        host
    </span>
</span> of the network scan.`,
            flagInstruction: "Submit the host's IP address:",
            flag: "10.0.0.4",
            placeholder: "e.g., 10.0.0.10",
            hint: 'Search for and review one of the warning logs “test-warning”.',

            isTerminalTask: false,

            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {}
        },
        {
            level: 1,
            responseActionID: "Step 2",
            responseActionInstruction: "Identify the two event types that indicate the normal operation of the filling plant.",
            flagInstruction: "Submit the two plugin_sids, separated by a comma:",
            flag: "100, 400",
            placeholder: "e.g., 500, 700",
            hint: 'Search for “success” to view only events that indicate normal functioning.',

            isTerminalTask: false,
            
            triesLeft: 3,
            wrongTry: false,
            rightTry: false,
            terminalData: {}
        },

    ]
}

export default Unit1IdentTasks;
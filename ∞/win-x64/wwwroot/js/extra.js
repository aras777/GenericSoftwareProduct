var tour = {
    id: "GenericTour",
    steps: [
        {
            target: "counter", 
            title: "Before you start",
            content: "This is live sessions counter. Demo is fixed for one session for you, so you can see this view. All new sessions under this identity will have no effect on the counter.",
            placement: "bottom" // gdzie ma pojawić się dymek (np. top, bottom, left, right)
        },
        {
            target: "addValuePlusButton",
            title: "It's all about adding a value",
            content: "Write some value, so it can be stored.",
            placement: "right"
        },
        {
            target: "value-logos",
            title: "Here is your value written in two databases.",
            content: "This is \"Generic Software Product\". It can be customized to any solution. Please contact Author - Arkadiusz Schwarz (Arkadiusz_Schwarz@hotmail.com) for development options 💙💙.",
            placement: "bottom" 
        } ,
    ]
};

function myFunction() {

    X = $("#valueInput").val();

    if ((X.indexOf('\\') !== -1) || (X.indexOf('"') !== -1) || (X.indexOf('\r') !== -1) || (X.indexOf('\n') !== -1)) {
        alert("\",\\n,\\r characters and backslash are forbidden");
    }
    else {
        INTERPRETER_CODE = "CalculateSharedValue = function (sv) { return \"" + X + "\";};"
            + "RUN=function () {"
            + "    if (GLOBAL_ANALYTICS_PROCESSING===0)"
            + "    {"
            + "        GLOBAL_ANALYTICS_PROCESSING=1;"
            + "        console.log(\"⏳\");"
            + "        new Noty({timeout: 5000,type: \"info\",theme: \"bootstrap-v3\",text: \"⏳\"}).show();"
            + "        SharedDataSnapshot=PDS_ViewDataModel[2];"
            + "        SharedEnvSnapshot=PDS_ViewDataModel[0];"
            + "    }"
            + "    else if (GLOBAL_ANALYTICS_PROCESSING===1)"
            + "    {"
            + "        SharedDataSnapshot=PDS_ViewDataModel[2];"
            + "        EXTENSION_0();"
            + "    }"
            + "    else if (GLOBAL_ANALYTICS_PROCESSING===2)"
            + "    {"
            + "        SharedDataSnapshot=PDS_ViewDataModel[2];"
            + "        EXTENSION_1();"
            + "    }"
            + "};";

        GLOBAL_CALCULATED_PRIVATE_VALUE_INJECTED = function (pv) { return INTERPRETER_CODE };
    }

    function speakText(text) {
        var speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }

    let message = "Thank you for adding a value.";
    speakText(message);
}

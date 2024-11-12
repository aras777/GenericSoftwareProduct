function myFunction() {

    let X = $("#valueInput").val();

    // Sprawdzamy, czy X zawiera jakiekolwiek znaki inne niż
    // cyfry 0-9 oraz czy długość jest inna niż 1 znak
    if (!/^\d+$/.test(X)) {
        alert("Only numeric characters (0-9) are allowed.");
    } else if (X.length != 1) {
        alert("Length incorrect, it must be 1 digit.");
    } else {
        let INTERPRETER_CODE = "CalculateSharedValue = function (sv) {" +
            " return \"" + X + "\";};" +
            "RUN=function () {" +
            " if (GLOBAL_ANALYTICS_PROCESSING===0)" +
            " {" +
            " GLOBAL_ANALYTICS_PROCESSING=1;" +
            " console.log(\"⏳\");" +
            " new Noty({timeout: 5000,type: \"info\"," +
            " theme: \"bootstrap-v3\",text: \"⏳\"}).show();" +
            " SharedDataSnapshot=PDS_ViewDataModel[2];" +
            " SharedEnvSnapshot=PDS_ViewDataModel[0];" +
            " }" +
            " else if (GLOBAL_ANALYTICS_PROCESSING===1)" +
            " {" +
            " SharedDataSnapshot=PDS_ViewDataModel[2];" +
            " EXTENSION_0();" +
            " }" +
            " else if (GLOBAL_ANALYTICS_PROCESSING===2)" +
            " {" +
            " SharedDataSnapshot=PDS_ViewDataModel[2];" +
            " EXTENSION_1();" +
            " }" +
            "};";

        GLOBAL_CALCULATED_PRIVATE_VALUE_INJECTED = function (pv) {
            return INTERPRETER_CODE;
        };
    }
}
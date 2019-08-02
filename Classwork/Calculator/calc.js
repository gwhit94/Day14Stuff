
    //\// Have a div that functions as the input for the calculator.

    //\// Set up number buttons for 0-9

    //\// Set up action buttons for +, -, *, /, power, C, CE, and = 

    //// When a user clicks a number, add that to the screen (like a calculator!).

    // number button DOM references
    let zeroButton = document.querySelector("#zero");
    let oneButton = document.querySelector("#one");
    let twoButton = document.querySelector("#two");
    let threeButton = document.querySelector("#three");
    let fourButton = document.querySelector("#four");
    let fiveButton = document.querySelector("#five");
    let sixButton = document.querySelector("#six");
    let sevenButton = document.querySelector("#seven");
    let eightButton = document.querySelector("#eight");
    let nineButton = document.querySelector("#nine");
    let decimalButton = document.querySelector("#decimal");
    // action button DOM references
    let plusButton = document.querySelector("#plus");
    let minusButton = document.querySelector("#minus");
    let timesButton = document.querySelector("#times");
    let divideButton = document.querySelector("#divide");
    let powerButton = document.querySelector("#power");
    let clearButton = document.querySelector("#clear");
    let clearEntryButton = document.querySelector("#clearEntry");
    let equalsButton = document.querySelector("#equals");

    // numbutton listeners
    zeroButton.addEventListener("click", outputValue);
    zeroButton.numValue = 0;
    oneButton.addEventListener("click", outputValue);
    oneButton.numValue = 1;
    twoButton.addEventListener("click", outputValue);
    twoButton.numValue = 2;
    threeButton.addEventListener("click", outputValue);
    threeButton.numValue = 3;
    fourButton.addEventListener("click", outputValue);
    fourButton.numValue = 4;
    fiveButton.addEventListener("click", outputValue);
    fiveButton.numValue = 5;
    sixButton.addEventListener("click", outputValue);
    sixButton.numValue = 6;
    sevenButton.addEventListener("click", outputValue);
    sevenButton.numValue = 7;
    eightButton.addEventListener("click", outputValue);
    eightButton.numValue = 8;
    nineButton.addEventListener("click", outputValue);
    nineButton.numValue = 9;
    decimalButton.addEventListener("click", outputValue);
    decimalButton.numValue = ".";

    // action button listeners 
    plusButton.addEventListener("click", actionButton);
    plusButton.action = "+";
    minusButton.addEventListener("click", actionButton);
    minusButton.action = "-";
    timesButton.addEventListener("click", actionButton);
    timesButton.action = "*";
    divideButton.addEventListener("click", actionButton);
    divideButton.action = "/";
    powerButton.addEventListener("click", actionButton);
    powerButton.action = "**";
    clearButton.addEventListener("click", actionButton);
    clearButton.action = "clear";
    clearEntryButton.addEventListener("click", actionButton);
    clearEntryButton.action = "clearEntry";
    equalsButton.addEventListener("click", actionButton);
    equalsButton.action = "=";


    // on number button click adds number to display
    let outputScreen = document.querySelector("#output");
    let memory;
    let operator;
    let output;
    // let equalsOut;
    
    function outputValue(event){
        // Clears out screen when new number is pressed
        console.log(outputScreen.innerText, firstValue);
        if (parseFloat(outputScreen.innerText) === parseFloat(firstValue)){
            outputScreen.innerText = "";
        }
        outputScreen.innerText += event.target.numValue;
    }

    // check to see if an operator is already saved
        //if there is one saved
            // take firstValue, OPERATOR, value in screen and evaluate
            // save this evaluation into firstValue
            // save NEW operator button pressed into operator
            // display value above and Clear screen on new number entry


    // if no operator is saved
        // save value in display
        // save operator
        // clear display

    let a;
    let b;
    let firstValue;
    function actionButton(event){
        if (outputScreen.innerText === ""){
            return;
        } else if (operator === undefined) {
            memory = outputScreen.innerText;
            operator = event.target.action;
            outputScreen.innerText = "";
            console.log("No operator, storing . .");
            console.log("Memory: " + memory);
            console.log("Operator: " + operator);
            return;
        } else if (event.target.action === "clearEntry") {
            outputScreen.innerText = "";
            console.log("Cleared Entry", "Memory: " + memory, "Operator: " + operator);
            return;
        } else if (event.target.action === "clear") {
            outputScreen.innerText = "";
            memory = undefined;
            operator = undefined;
            console.log("Cleared All", "Memory: " + memory, "Operator: " + operator);
            return;
        } else if (operator != undefined){
            a = parseFloat(outputScreen.innerText);
            b = parseFloat(memory);
            console.log("b: " + b , "a: " + a, " Operator: " + operator);
            firstValue = calculate(a,b,operator);
            console.log("Calculated: " + firstValue);
            operator = event.target.action;
            console.log("New operator: " + operator);
            outputScreen.innerText = firstValue;
            return;
        }
    }

    function calculate(a,b,operator){
        switch (operator){
            case "+":
                return b + a;
            case "-":
                return b - a;
            case "*":
                return b * a;
            case "/":
                return b / a;  
            case "**":
                return b**a;
            case "=":
                memory = firstValue;
                return firstValue;
        }
    }
    




    // When a user clicks an action button, check for the following:

    //\/     If there's nothing in memory and they didn't press =, store the current value in memory and then clear the screen to allow them to input the next number.

    //     If something is in memory, perform the previous action and display that value on the screen. When they press a new button, clear the screen to allow them to start typing a new number.
    //     If '=' is pressed, show the value of the last action pressed.
    //     If 'CE' is pressed, clear out the div but keep the chain of actions in memory.
    //     If 'C' is pressed, clear out memory and start from scratch.

    // BONUS - Allow a user to push either the numpad or the actual numbers on the keyboard to use the calculator if they don't want to click buttons. This Site will help with this.

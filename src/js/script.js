document.addEventListener('DOMContentLoaded', function(){
    
    //Theme changes 
    const theme_one = document.getElementById('theme-one');
    const theme_two = document.getElementById('theme-two');
    const theme_three = document.getElementById('theme-three');

    const ball_swicht = document.getElementById('switch-ball');

    const body = document.getElementsByTagName('body');
    // Calculator vars
    const nums = document.querySelectorAll('.btn-calc');

    const operators = document.querySelectorAll('.operator');
    // Calculator screen
    const screen = document.getElementById('result');

    // functions
    function printcharacter(value){
        var previewVal = screen.textContent;

        if (previewVal == '0'){
            previewVal = value
            screen.innerText= previewVal;
        }
        else{
            screen.innerText = previewVal + value
        }
    }

    // Delete characters
    function Del(){
        let arrayResult = screen.textContent.split("");

        arrayResult.pop();
        if(arrayResult.length == 0){
            arrayResult.push('0');
        }
        let newResult = arrayResult.join("");

        screen.innerText = newResult;
    }

    //Delete all values
    function Reset(){
        let arrayReset = screen.textContent.split();

        for (let i = 0; i < arrayReset.length; i++){
            arrayReset.pop();
        }

        if(arrayReset.length == 0){
            arrayReset.push('0');
        }

        screen.innerText = arrayReset;
    }

    // Operations
    function sum(num1, num2){
        return num1 + num2;
    }

    function res(num1, num2){
        return num1 - num2;
    }

    function mul(num1, num2){
        return num1 * num2;
    }

    function div(num1, num2){
        return num1 / num2;
    }

    // Results
    function Execute(){
        // Text in screen
        let textExecute = screen.textContent;

        // Sum
        let resultExecuteSum = textExecute.includes('+');

        let arrayExecuteSum = textExecute.split('+');

        if(resultExecuteSum == true){
            let value1 = arrayExecuteSum[0];
            let value2 = arrayExecuteSum[1];

            if (value1.includes('.') == true){
                value1 = parseFloat(arrayExecuteSum[0]);
            }
            else{
                value1 = parseInt(arrayExecuteSum[0])
            }
            if (value2.includes('.') == true){
                value2 = parseFloat(arrayExecuteSum[1]);
            }
            else{
                value2 = parseInt(arrayExecuteSum[1])
            }

            let resultsum = sum(value1, value2);

            screen.textContent = resultsum;
        }

        // Rest
        let resultExecuteRes = textExecute.includes('-');

        let arrayExecuteRes = textExecute.split('-');

        if(resultExecuteRes == true){
            let value1 = arrayExecuteRes[0];
            let value2 = arrayExecuteRes[1];

            if (value1.includes('.') == true){
                value1 = parseFloat(arrayExecuteRes[0]);
            }
            else{
                value1 = parseInt(arrayExecuteRes[0])
            }
            if (value2.includes('.') == true){
                value2 = parseFloat(arrayExecuteRes[1]);
            }
            else{
                value2 = parseInt(arrayExecuteRes[1])
            }

            let resultres = sum(value1, value2);

            screen.textContent = resultres;
        }

        // Mult
        let resultExecuteSMul = textExecute.includes('X');

        let arrayExecuteMul = textExecute.split('X');

        if(resultExecuteMul == true){
            let value1 = arrayExecuteMul[0];
            let value2 = arrayExecuteMul[1];

            if (value1.includes('.') == true){
                value1 = parseFloat(arrayExecuteMul[0]);
            }
            else{
                value1 = parseInt(arrayExecuteMul[0])
            }
            if (value2.includes('.') == true){
                value2 = parseFloat(arrayExecuteMul[1]);
            }
            else{
                value2 = parseInt(arrayExecuteMul[1])
            }

            let resultmul = sum(value1, value2);

            screen.textContent = resultmul;
        }

        // Division
        let resultExecuteDiv = textExecute.includes('/');

        let arrayExecuteDiv = textExecute.split('/');

        if(resultExecuteDiv == true){
            let value1 = arrayExecuteDiv[0];
            let value2 = arrayExecuteDiv[1];

            if (value1.includes('.') == true){
                value1 = parseFloat(arrayExecuteDiv[0]);
            }
            else{
                value1 = parseInt(arrayExecuteDiv[0])
            }
            if (value2.includes('.') == true){
                value2 = parseFloat(arrayExecuteDiv[1]);
            }
            else{
                value2 = parseInt(arrayExecuteDiv[1])
            }

            let resultdiv = sum(value1, value2);

            screen.textContent = resultdiv;
        }

        theme_one.addEventListener('change', () =>{
            if(theme_one.checked == true){
                document.body.classList.remove('theme_two');
                document.body.classList.remove('theme_three');
                ball_switch.style.left = '4px';
            }
        })

        theme_two.addEventListener('change', () =>{
            if(theme_two.checked == true){
                document.body.classList.remove('theme_three');
                document.body.classList.add('theme_two');
                ball_switch.style.left = '36px';
            }
        })

        theme_three.addEventListener('change', () =>{
            if(theme_three.checked == true){
                document.body.classList.remove('theme_two');
                document.body.classList.add('theme_three');
                ball_switch.style.left = '70px';
            }
        })

        // numbers
        nums.forEach(boton =>(
            boton.addEventListener('click', () =>{
                printcharacter(boton.value);
            })
        ))

        operators.forEach(operator => (
            operator.addEventListener('click', ()=>{
                if(operator.value == "DEL"){
                    Del();
                }
                else if(operator.value == "RESET"){
                    Reset();
                }
                else if(operator.value == "PLUS"){
                    printcharacter(operator.textContent);
                }
                else if(operator.value == "NEG"){
                    printcharacter(operator.textContent);
                }
                else if(operator.value == "MULT"){
                    printcharacter(operator.textContent);
                }
                else if(operator.value == "SLASH"){
                    printcharacter(operator.textContent);
                }
                else if(operator.value == "POINT"){
                    printcharacter(operator.textContent);
                }
                else if(operator.value == "RESULT"){
                    Execute();
                }
            })
        ))
    }

})
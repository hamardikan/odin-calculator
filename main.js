let calculation = localStorage.getItem('calculation') || ``;
    showCalculation();

    function updateCalculation(val) {
        calculation += val;
        showCalculation();
        localStorage.setItem('calculation', calculation);
    }

    function saveCalculation () {
        localStorage.setItem('calculation', calculation);    
    }

    function showCalculation () {
        document.querySelector('.numberScreen').innerHTML = `${calculation}`;
    }

    function calculate () {
        try {
            calculation = eval(calculation);
        } catch (e) {
            calculation = 'Error';
        }
        saveCalculation();
        showCalculation();
    }

    function clearCalculation() {
        calculation = '';
        showCalculation();
        saveCalculation();

    }

    function changeSign(){
        if (calculation !== '' || calculation!== '0'){
            if (calculation.startsWith('-')){
                calculation = calculation.slice(1);
            } else {
                calculation = "-" + calculation;
            }
            showCalculation();
            saveCalculation();
        }
    }

    function backspace() {
        calculation = calculation.slice(0,-1);
        showCalculation();
        saveCalculation();
    }

    
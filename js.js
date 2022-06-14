

function playmyaudio() {
    document.getElementById("myaudio").play();
}


function validateForm() {

    playmyaudio();
    weight = document.getElementById("weight-input").value;
    var height = document.getElementById("height-input").value;
    var age = document.getElementById("age-input").value;

    if (document.getElementById('kg').checked == false && document.getElementById('lb').checked == false ) {
        alert ('Select type of weight');
        return false;
    }

    if (document.getElementById('feet').checked == false && document.getElementById('cm').checked == false ) {
        alert ('Select type of height');
        return false;
    }
    

    if (weight == '') {
        alert('insert weigt');
        return false;
    }

    if (height == '') {
        alert('Insert height');
        return false;
    }

    if (age == '') {
        alert('Insert age');
        return false
    }

    return true
}

function calculate() {

    if (validateForm() == true) {
        calculateBMR();
    } else {
        alert('insert value');
    }
}


function values() {
    var kg = document.getElementsByName('kg').value;

    if (kg == true) {
        weight = weight * 100;
        return false
    }
    return true
}


function calculateBMR() {


    var gender = document.getElementById("gender-input").value;
    var weight = document.getElementById("weight-input").value;
    var height = document.getElementById("height-input").value;
    var age = document.getElementById("age-input").value;

    if (document.getElementById("lb").checked == true) {
            
        weight = weight * 0.45359237;
    }

    if (document.getElementById("feet").checked == true) {
            
        height = height * 30.48;
      
    }

    if (gender == 'female') {
        BMR = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
    } else
        BMR = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)

    document.getElementById("bmr").value = BMR.toFixed(2);

    var calories;

    var activity = document.getElementById('activity').value;

    calories = BMR * activity

    document.getElementById("calories").value = calories.toFixed(2);



}

function playmyaudio() {
    document.getElementById("myaudio").play();
}



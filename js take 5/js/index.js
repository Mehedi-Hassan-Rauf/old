



let container = document.querySelector('.container');
let select = document.getElementById('select');
var question1 = document.getElementsByClassName('question1');
let submit = document.getElementById('submit');
var p = document.getElementById('p');
let total = 0;







submit.addEventListener('click',function(event) {
    event.preventDefault();
    correct1();
    correct2();
    correct3();
    correct4();
    correct5();
    correct6();
    correct7();
    correct8();
    correct9();
    correct10();
    marks();
    

})


function marks() {
    select.style.backgroundColor='transperent';
    select.style.width='50%';
    select.style.height='100px';
    select.style.fontSize='30px';
    select.style.marginTop='10%';
    select.style.marginLeft='25%';
    select.style.textAlign='center';
    select.innerText="Your total score is "+total;


}





function correct1() {
    let q1 = document.select.question1.value;
    if (q1=="dhaka") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct2() {
    let q2 = document.select.question2.value;
    if (q2=="1971") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct3() {
    let q3 = document.select.question3.value;
    if (q3=="messi") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct4() {
    let q4 = document.select.question4.value;
    if (q4=="elon musk") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct5() {
    let q5 = document.select.question5.value;
    if (q5=="elon musk") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct6() {
    let q6 = document.select.question6.value;
    if (q6=="amazon") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct7() {
    let q7 = document.select.question7.value;
    if (q7=="facebook") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct8() {
    let q8 = document.select.question8.value;
    if (q8=="mukesh ambani") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct9() {
    let q9 = document.select.question9.value;
    if (q9=="good") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}

function correct10() {
    let q10 = document.select.question10.value;
    if (q10=="read") {
        let c = 1;
        total++;
    } else {
        total = total + 0;
    }
}











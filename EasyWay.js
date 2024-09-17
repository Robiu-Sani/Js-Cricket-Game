const resultBody = document.querySelector(".resultBody"),
PcEasyBtn1 = document.querySelector(".PcEasyPlayer1"),
EasyPlayer1 = document.querySelector(".EasyPlayer1"),
EasyPlayer2 = document.querySelector(".EasyPlayer2"),
PcNormalB = document.querySelector(".NormalPlayerpc1"),
PcHardB = document.querySelector(".HardPc1"),
NormalPlayer1 = document.querySelector(".NormalPlayer1"),
NormalPlayer2 = document.querySelector(".NormalPlayer2"),
HardPlayer1 = document.querySelector(".HardPlayer1"),
HardPlayer2 = document.querySelector(".HardPlayer2"),
p1resultRun = document.querySelector(".p1resultRun"),
p2resultRun = document.querySelector(".p2resultRun"),
WinnerCall = document.querySelector(".WinnerCall"),

PcEasyImg = document.querySelector(".PcEasyImg"),
PlayerEasyImg = document.querySelector(".PlayerEasyImg"),
PcNormalImg = document.querySelector(".PcNormalImg"),
PcHardImg = document.querySelector(".PcHardImg"),
PlayerNormalImg = document.querySelector(".PlayerNormalImg"),
PlayerHardImg = document.querySelector(".PlayerHardImg"),

p1Boll = document.querySelector(".p1Boll"),
p1Run = document.querySelector(".p1Run"),
p1Weaiket = document.querySelector(".p1Weaiket"),
p1CRun = document.querySelector(".p1CRun"),

p2Boll = document.querySelector(".p2Boll"),
p2Run = document.querySelector(".p2Run"),
p2Weaiket = document.querySelector(".p2Weaiket"),
p2CRun = document.querySelector(".p2CRun");




var p1BollCount = 0;
var p1RunCount = 0;
var p1WeaiketCount = 0;
var p1CRunCount = 0;

var p2BollCount = 0;
var p2RunCount = 0;
var p2WeaiketCount = 0;
var p2CRunCount = 0;


HardPlayer2.style.pointerEvents = "none";
HardPlayer1.addEventListener("click", () => {
    PlHardplay();
    if(p1WeaiketCount == 10){
        HardPlayer1.style.pointerEvents = "none";
        HardPlayer2.style.pointerEvents = "all";
    }
});

HardPlayer2.addEventListener("click", () => {
    PlHard2play();
    if(p2WeaiketCount == 10 || p2RunCount > p1RunCount){
        HardPlayer2.style.pointerEvents = "none";
        resultColl();
    }
});


NormalPlayer2.style.pointerEvents = "none";
NormalPlayer1.addEventListener("click", () => {
    PlNormalplay();
    if(p1WeaiketCount == 10){
        NormalPlayer1.style.pointerEvents = "none";
        NormalPlayer2.style.pointerEvents = "all";
    }
});

NormalPlayer2.addEventListener("click", () => {
    PlNormal2play();
    if(p2WeaiketCount == 10 || p2RunCount > p1RunCount){
        NormalPlayer2.style.pointerEvents = "none";
        resultColl();
    }
});

EasyPlayer2.style.pointerEvents = "none";
EasyPlayer1.addEventListener("click", () => {
    EasyplayerBtn();
    if(p1WeaiketCount == 10){
        EasyPlayer1.style.pointerEvents = "none";
        EasyPlayer2.style.pointerEvents = "all";
    }
});

EasyPlayer2.addEventListener("click", () => {
    Easyplayer2Btn();
    if(p2WeaiketCount == 10 || p2RunCount > p1RunCount){
        EasyPlayer2.style.pointerEvents = "none";
        resultColl();
    }
});

var hardset;
PcHardB.addEventListener("click", () => {
    PcHardplay();
    if(p1WeaiketCount == 10){
        PcHardB.style.pointerEvents = "none";
        hardset = setInterval(() => {
            PcHard2play();
            if (p2WeaiketCount == 10 || p2RunCount > p1RunCount) {
                clearInterval(hardset);
                resultColl();
            }
        }, 500);
    }
});

var normalset;
PcNormalB.addEventListener("click", () => {
    PcNormalplay();
    if(p1WeaiketCount == 10){
        PcNormalB.style.pointerEvents = "none";
        normalset = setInterval(() => {
            PcNormal2play();
            if (p2WeaiketCount == 10 || p2RunCount > p1RunCount) {
                clearInterval(normalset);
                resultColl();
            }
        }, 500);
    }
});

var pcinterV;
PcEasyBtn1.addEventListener("click", () => {
    p1playerBtn();
    if(p1WeaiketCount == 10){
        PcEasyBtn1.style.pointerEvents = "none";
        pcinterV = setInterval(() => {
            p2playerBtn();
            if (p2WeaiketCount == 10 || p2RunCount > p1RunCount) {
                clearInterval(pcinterV);
                resultColl();
            }
        }, 500);
    }
});

function resultColl(){
    resultBody.classList.add("active");
    PlayHeaderBox.classList.remove("active");
    p1resultRun.innerText = p1RunCount;
    p2resultRun.innerText = p2RunCount;
    if (p1RunCount > p2RunCount) {
        WinnerCall.innerText = "Player one";
    } else if(p1RunCount == p2RunCount && p1BollCount < p2BollCount){
        WinnerCall.innerText = "Player one";
    } else if(p1RunCount == p2RunCount && p1BollCount > p2BollCount){
        WinnerCall.innerText = campColl.innerText;
    } else if(p1RunCount < p2RunCount){
        WinnerCall.innerText = campColl.innerText;
    }
}

function PlHardplay(){
    p1BollCount +=1;
    p1Boll.innerText = p1BollCount;
    var a= Math.ceil(Math.random()*8);
    PlayerHardImg.style.transform = `rotate(${(a*45)}deg)`;
    PcHardcondition(a);
}

function PlHard2play(){
    p2BollCount +=1;
    p2Boll.innerText = p2BollCount;
    var a= Math.ceil(Math.random()*8);
    PlayerHardImg.style.transform = `rotate(${(a*45)}deg)`;
    PcHard2condition(a);
}

function PlNormalplay(){
    p1BollCount +=1;
    p1Boll.innerText = p1BollCount;
    var a= Math.ceil(Math.random()*8);
    PlayerNormalImg.style.transform = `rotate(${(a*45)}deg)`;
    PcNormalcondition(a);
}

function PlNormal2play(){
    p2BollCount +=1;
    p2Boll.innerText = p2BollCount;
    var a= Math.ceil(Math.random()*8);
    PlayerNormalImg.style.transform = `rotate(${(a*45)}deg)`;
    PcNormal2condition(a);
}

function PcHardplay(){
    p1BollCount +=1;
    p1Boll.innerText = p1BollCount;
    var a= Math.ceil(Math.random()*8);
    PcHardImg.style.transform = `rotate(${(a*45)}deg)`;
    PcHardcondition(a);
}

function PcHard2play(){
    p2BollCount +=1;
    p2Boll.innerText = p2BollCount;
    var a= Math.ceil(Math.random()*8);
    PcHardImg.style.transform = `rotate(${(a*45)}deg)`;
    PcHard2condition(a);
}

function PcNormalplay(){
    p1BollCount +=1;
    p1Boll.innerText = p1BollCount;
    var a= Math.ceil(Math.random()*8);
    PcNormalImg.style.transform = `rotate(${(a*45)}deg)`;
    PcNormalcondition(a);
}

function PcNormal2play(){
    p2BollCount +=1;
    p2Boll.innerText = p2BollCount;
    var a= Math.ceil(Math.random()*8);
    PcNormalImg.style.transform = `rotate(${(a*45)}deg)`;
    PcNormal2condition(a);
}

function EasyplayerBtn(){
    p1BollCount +=1;
    p1Boll.innerText = p1BollCount;
    var a= Math.ceil(Math.random()*8);
    PlayerEasyImg.style.transform = `rotate(${(a*45)}deg)`;
    condition(a);
}

function Easyplayer2Btn(){
    p2BollCount +=1;
    p2Boll.innerText = p2BollCount;
    var a= Math.ceil(Math.random()*8);
    PlayerEasyImg.style.transform = `rotate(${(a*45)}deg)`;
    player2Count(a);
}

function p1playerBtn(){
    p1BollCount +=1;
    p1Boll.innerText = p1BollCount;
    var a= Math.ceil(Math.random()*8);
    PcEasyImg.style.transform = `rotate(${(a*45)}deg)`;
    condition(a);
}

function p2playerBtn(){
    p2BollCount +=1;
    p2Boll.innerText = p2BollCount;
    var a= Math.ceil(Math.random()*8);
    PcEasyImg.style.transform = `rotate(${(a*45)}deg)`;
    player2Count(a);
}

function PcHard2condition(a){
    if (a == 2|| a== 4 || a == 6 || a == 8) {
        p2CRunCount = 0;
        p2CRun.innerText =p2CRunCount;
        p2WeaiketCount += 1;
        p2Weaiket.innerText = p2WeaiketCount;
    } else if( a == 5){
        p2CRunCount = 1;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 1;
        p2Run.innerText = p2RunCount;
    }else if( a == 1){
        p2CRunCount = 2;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 2;
        p2Run.innerText = p2RunCount;
    }else if( a == 3){
        p2CRunCount = 6;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 6;
        p2Run.innerText = p2RunCount;
    }else if( a == 7){
        p2CRunCount = 4;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 4;
        p2Run.innerText = p2RunCount;
    }
}

function PcHardcondition(a){
    if (a == 2|| a== 4 || a == 6 || a == 8) {
        p1CRunCount = 0;
        p1CRun.innerText =p1CRunCount;
        p1WeaiketCount += 1;
        p1Weaiket.innerText = p1WeaiketCount;
    } else if( a == 5){
        p1CRunCount = 1;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 1;
        p1Run.innerText = p1RunCount;
    }else if( a == 1){
        p1CRunCount = 2;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 2;
        p1Run.innerText = p1RunCount;
    }else if( a == 3){
        p1CRunCount = 6;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 6;
        p1Run.innerText = p1RunCount;
    }else if( a == 7){
        p1CRunCount = 4;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 4;
        p1Run.innerText = p1RunCount;
    }
}

function PcNormal2condition(a){
    if (a == 1|| a== 4 || a == 7) {
        p2CRunCount = 0;
        p2CRun.innerText =p2CRunCount;
        p2WeaiketCount += 1;
        p2Weaiket.innerText = p2WeaiketCount;
    } else if( a == 6){
        p2CRunCount = 1;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 1;
        p2Run.innerText = p2RunCount;
    }else if( a == 5){
        p2CRunCount = 2;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 2;
        p2Run.innerText = p2RunCount;
    }else if( a == 8){
        p2CRunCount = 6;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 6;
        p2Run.innerText = p2RunCount;
    }else if( a == 3){
        p2CRunCount = 4;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 4;
        p2Run.innerText = p2RunCount;
    }else if( a == 2){
        p2CRunCount = 0;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 0;
        p2Run.innerText = p2RunCount;
    }
}

function PcNormalcondition(a){
    if (a == 1|| a== 4 || a == 7) {
        p1CRunCount = 0;
        p1CRun.innerText =p1CRunCount;
        p1WeaiketCount += 1;
        p1Weaiket.innerText = p1WeaiketCount;
    } else if( a == 6){
        p1CRunCount = 1;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 1;
        p1Run.innerText = p1RunCount;
    }else if( a == 5){
        p1CRunCount = 2;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 2;
        p1Run.innerText = p1RunCount;
    }else if( a == 8){
        p1CRunCount = 6;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 6;
        p1Run.innerText = p1RunCount;
    }else if( a == 3){
        p1CRunCount = 4;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 4;
        p1Run.innerText = p1RunCount;
    }else if( a == 2){
        p1CRunCount = 0;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 0;
        p1Run.innerText = p1RunCount;
    }
}

function condition(a){
    if (a == 8|| a== 4) {
        p1CRunCount = 0;
        p1CRun.innerText =p1CRunCount;
        p1WeaiketCount += 1;
        p1Weaiket.innerText = p1WeaiketCount;
    } else if( a == 3 || a == 7){
        p1CRunCount = 1;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 1;
        p1Run.innerText = p1RunCount;
    }else if( a == 1 || a == 5){
        p1CRunCount = 2;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 2;
        p1Run.innerText = p1RunCount;
    }else if( a == 6){
        p1CRunCount = 6;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 6;
        p1Run.innerText = p1RunCount;
    }else if( a == 2){
        p1CRunCount = 4;
        p1CRun.innerText =p1CRunCount;
        p1RunCount += 4;
        p1Run.innerText = p1RunCount;
    }
}

function player2Count(a){
    if (a == 8|| a== 4) {
        p2CRunCount = 0;
        p2CRun.innerText =p2CRunCount;
        p2WeaiketCount += 1;
        p2Weaiket.innerText = p2WeaiketCount;
    } else if( a == 3 || a == 7){
        p2CRunCount = 1;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 1;
        p2Run.innerText = p2RunCount;
    }else if( a == 1 || a == 5){
        p2CRunCount = 2;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 2;
        p2Run.innerText = p2RunCount;
    }else if( a == 6){
        p2CRunCount = 6;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 6;
        p2Run.innerText = p2RunCount;
    }else if( a == 2){
        p2CRunCount = 4;
        p2CRun.innerText =p2CRunCount;
        p2RunCount += 4;
        p2Run.innerText = p2RunCount;
    }
}
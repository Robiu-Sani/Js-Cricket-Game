const BannerBody = document.querySelector(".BannerBody"),
RollBox = document.querySelector(".RollBox"),
alertBox = document.querySelector(".alertBox"),
PlayHeaderBox = document.querySelector(".playYard"),
ComputerColl = document.querySelector(".ComputerColl"),
PlyerColl = document.querySelector(".PlyerColl"),
EasyforPc = document.querySelector(".EasyforPc"), 
EasyforPlayer = document.querySelector(".EasyforPlayer"), 
NormalforPc = document.querySelector(".NormalforPc"),
NormalforPlayer = document.querySelector(".NormalforPlayer"),   
HardforPlayer = document.querySelector(".HardforPlayer"), 
HardforPc = document.querySelector(".HardforPc"), 
computer = document.querySelector(".computer"),
campColl = document.querySelector(".campColl"),
toss = document.querySelector(".toss"),
TossBody = document.querySelector(".TossBody"),
cross1 = document.querySelector(".cross1"),
tossBtn = document.querySelector(".tossBtn"),
TossAns = document.querySelector(".TossAns"),
TBTN = document.querySelectorAll(".TBTN"),


//button doc item 
Exit = document.querySelector(".Exit"),
StartPlay = document.querySelector(".startPlay"),
back = document.querySelector(".back"),
PlayWithComputer = document.querySelector(".PlayWithComputer"),
PlayWithPlayer = document.querySelector(".PlayWithPlayer"),
cross = document.querySelectorAll(".cross"),
compEasy = document.querySelector(".compEasy"),
playEasy = document.querySelector(".playEasy"),
compNormal = document.querySelector(".compNormal"),
playNormal = document.querySelector(".playNormal"),
compHard = document.querySelector(".compHard"),
back1 = document.querySelector(".back1"),
resultBtnExit = document.querySelector(".resultBtnExit"),
resultBtnPlay = document.querySelector(".resultBtnPlay"),
playHard = document.querySelector(".playHard");

BannerBody.classList.add("active");

Exit.addEventListener("click", () => {
    window.close();
});

StartPlay.addEventListener("click", () =>{
    BannerBody.classList.add("inactive");
    BannerBody.classList.remove("active");
    RollBox.classList.add("active");
});

back.addEventListener("click", () =>{
    BannerBody.classList.remove("inactive");
    BannerBody.classList.add("active");
    RollBox.classList.remove("active");
});

PlayWithComputer.addEventListener("click", () =>{
    alertBox.classList.add("active");
    ComputerColl.classList.add("active");
    computer.innerText = "Computer";
    campColl.innerText = "Computer";
});

PlayWithPlayer.addEventListener("click", () =>{
    alertBox.classList.add("active");
    PlyerColl.classList.add("active");
});

back1.addEventListener("click", () => {
    window.location.reload();
});

for (let x = 0; x < cross.length; x++) {
    cross[x].addEventListener("click", () => {
        alertBox.classList.remove("active");
        PlyerColl.classList.remove("active");
    });
}

compEasy.addEventListener("click", () => {
    alertBox.classList.remove("active");
    RollBox.classList.remove("active");
    PlayHeaderBox.classList.add("active");
    EasyforPc.style.display = "block";
});
compNormal.addEventListener("click", () => {
    alertBox.classList.remove("active");
    RollBox.classList.remove("active");
    PlayHeaderBox.classList.add("active");
    NormalforPc.style.display = "block";
});
compHard.addEventListener("click", () => {
    alertBox.classList.remove("active");
    RollBox.classList.remove("active");
    PlayHeaderBox.classList.add("active");
    HardforPc.style.display = "block";
});
playEasy.addEventListener("click", () => {
    alertBox.classList.remove("active");
    RollBox.classList.remove("active");
    PlayHeaderBox.classList.add("active");
    EasyforPlayer.style.display = "block";
});
playNormal.addEventListener("click", () => {
    alertBox.classList.remove("active");
    RollBox.classList.remove("active");
    PlayHeaderBox.classList.add("active");
    NormalforPlayer.style.display = "block";
});
playHard.addEventListener("click", () => {
    alertBox.classList.remove("active");
    RollBox.classList.remove("active");
    PlayHeaderBox.classList.add("active");
    HardforPlayer.style.display = "block";
});

resultBtnExit.addEventListener("click", () =>{
    window.close();
});

resultBtnPlay.addEventListener("click", () =>{
    window.location.reload();
});

toss.addEventListener("click", () => {
    TossBody.classList.add("active");
});

cross1.addEventListener("click", () => {
    TossBody.classList.remove("active");
});

for (let b = 0; b < TBTN.length; b++) {
    TBTN[b].addEventListener("click", () => {
        TossAns.style.display = "Block";
        tossBtn.style.display = "none";
        tossAnsColl();
        setTimeout(() => {
            cross1.click();
        }, 5000);
    });
}


function tossAnsColl(){
        const c = Math.ceil(Math.random()*10)
        if (c%2 == 0) {
            TossAns.innerText = "TALL"
        } else {
            TossAns.innerText = "HADE"
        }
        console.log(c)
}
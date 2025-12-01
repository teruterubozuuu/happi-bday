let userChoice = ""

function updateOutput(){
    document.querySelector(".output").textContent = userChoice
}

function rock(){
    userChoice = " Rock"
    updateOutput();
}

function paper(){
    userChoice = " Paper"
    updateOutput();
}

function scissors(){
    userChoice = " Scissors"
    updateOutput();
}

function goToHBD() {
    window.location.href = "hbd.html"; // relative path
}

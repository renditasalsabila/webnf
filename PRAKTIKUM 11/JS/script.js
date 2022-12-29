document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi ComputerChoice()
    a.addEventListener("click", (element)=>{
       ComputerChoice(element);
    })
})
function ComputerChoice(element){
    // pilihan user
    let PilihanUser = element.target.innerText;
    
    // mengambil element pilihan komputer
    let pilihankomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk kompter
    pilihankomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihankomputer = pilihankomputer.innerHTML;

    // jika pilhan komputer == pilihab user (Draw)
    if(PilihanUser == pilihankomputer){
        alert("DRAW")

    }

    // jika pilihan komputer menang
    if(pilihankomputer == "Rock" && PilihanUser == "Scissors"){
        alert("Computer WIN");
    }else if(pilihankomputer == "Paper" && PilihanUser == "Rock"){
        alert("Computer WINN");
    }else if(pilihankomputer == "Scissors" && PilihanUser == "Paper"){
        alert("Computer WINNN");
    }

    // jika pilihan user menang
    if(PilihanUser == "Rock" && pilihankomputer == "Scissors"){
        alert("User WIN");
    }else if(PilihanUser == "Paper" && pilihankomputer == "Rock"){
        alert("User WINN");
    }else if(PilihanUser == "Scissors" && pilihankomputer == "Paper"){
        alert("User WINNN");
    }
}
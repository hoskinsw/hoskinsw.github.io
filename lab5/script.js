let bankBalance = 100;
const withdrawAmount = 25;
const depositAmount = 25;

function withdraw() {
    bankBalance = bankBalance - withdrawAmount;

    const balanceText = document.getElementById("balance-display")

    balanceText.innerText = bankBalance
}

function deposit() {
    bankBalance = bankBalance + depositAmount;

    const balanceText = document.getElementById("balance-display")

    balanceText.innerText = bankBalance
}

// function takeDamage() {
//     playerHealth = playerHealth - damageAmount;

//     const healthText = document.getElementById("health-display");
//     const statusText = document.getElementById("status-message");

//     if(playerHealth > 0)
//     {
//         healthText.innerText = playerHealth;
//         statusText.innerText = "You've been hit!";
//     }
//     else
//     {
//         healthText.innerText = 0;
//         statusText.innerText = "Game Over!";
//         statusText.style.color = "#f9331d";
//         statusText.style.fontWeight = "bold";

//         document.body.style.backgroundColor = "#5a1a1a";

//         document.querySelector("button").disabled = true;
//         document.querySelector("button").innerText = "Dead";
//     }
// }
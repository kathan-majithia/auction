const teams = [
    { name: "Skill Issue", remainingCoins: 100, question1Bid: 0, question2Bid: 0 },
    { name: "Tech Titans", remainingCoins: 100, question1Bid: 0, question2Bid: 0 },
    { name: "Marvels", remainingCoins: 100, question1Bid: 0, question2Bid: 0 },
    { name: "Code Ninjas", remainingCoins: 100, question1Bid: 0, question2Bid: 0 },
    { name: "Strugglers", remainingCoins: 100, question1Bid: 0, question2Bid: 0 },
    { name: "Null pointers", remainingCoins: 100, question1Bid: 0, question2Bid: 0 },
];

const problemStatements = [
    "Best Time to buy and sell stock",
    "Merge K sorted Lists",
    "Swap Nodes in pairs",
    "Pascal's Triangle",
    "Happy Number",
    "Symmetric Tree",
    "Path Sum",
    "Odd Even Linked List",
    "Valid Parenthesis String",
    "Minimum moves to reach target score",
    "Merge Nodes in Between Zeros",
    "Insert Greatest Common divisors in linked list",
    "Convert 1D to 2D array with conditions"
];

let taken = [0,0,0,0,0,0,0,0,0,0,0,0,0]

let currentBid = 0;
let currentQuestionIndex = -1;
let hb = -1

if(currentQuestionIndex == -1){
    document.getElementById("problemStatement").value = `Press Next to get question`;
}


function populateTeamTable() {
    const tableBody = document.getElementById("teamTableBody");
    tableBody.innerHTML = "";
    teams.forEach((team, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team.name}</td>
            <td><button onclick="placeBid(${index})">Bid</button></td>
            <td>${team.question1Bid}</td>
            <td>${team.question2Bid}</td>
            <td>${team.remainingCoins}</td>
        `;
        tableBody.appendChild(row);
    });
}

function nextQuestion() {
    // if (problemStatements.length === 0) {
    //     alert("No more questions available.");
    //     return;
    // }
    currentBid = 0
    if(currentQuestionIndex == problemStatements.length || currentQuestionIndex == -1)
        currentQuestionIndex = 0
    while(taken[currentQuestionIndex] == 1 || currentQuestionIndex == -1)
        currentQuestionIndex += 1;
    document.getElementById("problemStatement").value = `${problemStatements[currentQuestionIndex]}`;
    document.getElementById("curb").value = `Current Bid: ${currentBid}`;
}

function placeBid(teamIndex) {
    if (teams[teamIndex].remainingCoins >= currentBid) {
        // teams[teamIndex].remainingCoins -= currentBid;
        currentBid += 10;
        document.getElementById("curb").value = `Current Bid: ${currentBid} | Highest Bidder : ${teams[teamIndex].name}`;
        hb = teamIndex
        // populateTeamTable();
    } else {
        alert("Not enough coins to place this bid.");
    }
}


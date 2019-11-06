console.log("Ein sehr einfaches Steuermodell\n")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("\nWieviel Euro hast Du verdient?\n", (income) => {

    income = parseInt(income); // income wird als ganze Zahl interpretiert.

    switch (true) {
        case income >= 120000:
            console.log("\nFür " + income + " zahlst Du 40% Steuern, also: " + income * 0.4 + " €.\n")
            break;
        case income >= 60000:
            console.log("\nFür " + income + " zahlst Du 20 % Steuern, also: " + income * 0.2 + " €.\n")
            break;
        case income >= 30000:
            console.log("\nFür " + income + " zahlst Du 10 % Steuern, also: " + income * 0.1 + " €.\n")
            break;
        default:
            console.log("\nFür " + income + " zahlst Du keine Steuern.")
    }

    readline.close();
    process.exit();

});


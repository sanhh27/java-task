
const items = [
    { name: "Lays", price: 20 },
    { name: "Chocolate cake", price: 30 },
    { name: "vanilla milkshake", price: 40 },
    { name: "choco chips", price: 25 },
    { name: "Coke", price: 40 }
];

function displayMenu() {
    console.log("<<<< MODERN VENDING MACHINE >>>>");

    for (let i = 0; i < items.length; i++) {
        console.log(
            (i + 1) + ". " + items[i].name +
            " - Rs. " + items[i].price
        );
    }
}


function calculateChange(money, price) {
    return money - price;
}


function printPattern(itemNumber) {
    console.log("Number Pattern:");

    for (let i = 1; i <= itemNumber; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }

        console.log(row);
    }
}


function vendingMachine() {
    while (true) {
        displayMenu();

        let choice = prompt(
            "Enter the item number (1-5):"
        );

        if (choice === null) {
            alert("Thank you for visiting!");
            break;
        }

        let itemNumber = Number(choice);

        
        if (
            choice.trim() === "" ||
            !Number.isInteger(itemNumber) ||
            itemNumber < 1 ||
            itemNumber > items.length
        ) {
            alert("Invalid item number. Please select 1 to 5.");
        } else {
            let moneyInput = prompt(
                "Enter the amount of money you have (Rs.):"
            );

            if (moneyInput === null) {
                alert("Purchase cancelled.");
            } else {
                let money = Number(moneyInput);

                if (
                    moneyInput.trim() === "" ||
                    !Number.isFinite(money) ||
                    money < 0
                ) {
                    alert("Invalid amount. Enter a valid, non-negative amount.");
                } else {
                    let selectedItem = items[itemNumber - 1];

                    if (money < selectedItem.price) {
                        alert("Insufficient balance!");
                    } else {
                        let change = calculateChange(
                            money,
                            selectedItem.price
                        );

                        if (change === 0) {
                            alert(
                                "You purchased " +
                                selectedItem.name +
                                " with correct payment!"
                            );
                        } else {
                            alert(
                                "You purchased " +
                                selectedItem.name +
                                ". Change returned: Rs. " +
                                change
                            );
                        }

                        
                        for (let i = 3; i >= 1; i--) {
                            alert(i);
                        }

                        alert(
                            selectedItem.name +
                            " is Ready. Take it!"
                        );

                    
                        printPattern(itemNumber);
                    }
                }
            }
        }


        let again = confirm(
            "Would you like to make another purchase?"
        );

        if (!again) {
            alert("Thank you for using the Modern Vending Machine!");
            break;
        }
    }
}

vendingMachine();

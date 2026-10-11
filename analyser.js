
function multiplicationTable(num) {
    console.log("Multiplication Table of " + num);

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

let again = true;

while (again) {
    let input = prompt("Enter a number:");
    let num = Number(input);

    if (input === null) {
        break;
    }

    if (input.trim() === "" || !Number.isInteger(num) || num < 1) {
        alert("Please enter a positive integer.");
    } else {
        let result;

        if (num % 2 === 0) {
            result = "Even";
        } else {
            result = "Odd";
        }

        multiplicationTable(num);


        let sum = 0;

        for (let i = 1; i <= num; i++) {
            sum = sum + i;
        }

        console.log("Star Pattern:");

        if (num % 2 === 0) {
            // Even number: square pattern
            for (let i = 1; i <= num; i++) {
                let row = "";

                for (let j = 1; j <= num; j++) {
                    row = row + "* ";
                }

                console.log(row);
            }
        } else {
            for (let i = 1; i <= num; i++) {
                let row = "";

                for (let j = 1; j <= i; j++) {
                    row = row + "* ";
                }

                console.log(row);
            }
        }

        alert(
            "Number: " + num +
            "\nType: " + result +
            "\nSum of natural numbers: " + sum +
            "\nCheck the console for the multiplication table and star pattern."
        );
    }

    // Ask whether to run again
    again = confirm("Do you want to run the program again?");
}

alert("Program ended. Thank you!");


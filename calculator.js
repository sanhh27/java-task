
function calculateTotal(mark1, mark2, mark3) {
    return mark1 + mark2 + mark3;
}

function calculateAverage(total) {
    return total / 3;
}

function calculateGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 75) {
        return "B";
    } else if (average >= 50) {
        return "C";
    } else {
        return "F";
    }
}

let again = true;

while (again) {
    let name = prompt("Enter student's name:");

    if (name === null || name.trim() === "") {
        alert("Please enter a valid student name.");
        again = confirm("Try another student?");
        continue;
    }

    let mark1 = Number(prompt("Enter mark for Subject 1:"));
    let mark2 = Number(prompt("Enter mark for Subject 2:"));
    let mark3 = Number(prompt("Enter mark for Subject 3:"));

    if (
        !Number.isFinite(mark1) ||
        !Number.isFinite(mark2) ||
        !Number.isFinite(mark3) ||
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100
    ) {
        alert("Invalid marks! Each mark must be between 0 and 100.");
    } else {
        let total = calculateTotal(mark1, mark2, mark3);
        let average = calculateAverage(total);
        let grade = calculateGrade(average);

        alert(
            "STUDENT RESULT\n\n" +
            "Name: " + name +
            "\nTotal Marks: " + total + " / 300" +
            "\nAverage: " + average.toFixed(2) +
            "\nGrade: " + grade
        );
    }

    again = confirm("Do you want to calculate another student's result?");
}

alert("Student Result Calculator closed.");

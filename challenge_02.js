/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */
 
let namen, age, Getränk;

namen = prompt("Bitte Namen angeben");
age = prompt("Bitte Alter angeben");

Getränk = "Milch";
Getränk = "Saft";
Getränk = "Cola";
Getränk = "Wein";

switch (true) 
{
    case age < 6:
        console.log(namen + " trinkt Milch!");
        break;
    case age < 13:
        console.log(namen + " trinkt Saft!");
        break;
    case age < 18:
        console.log(namen + " trinkt Cola!");
        break;
    case age < 19:
        console.log(namen + " trinkt Wein!");
        break;
    default:
        console.log("Falsche Angaben");
        break;
}

/*
 * Det hÃ¤r Ã¤r ett JavaScript-kladdblock.
 *
 * Skriv in lite JavaScript, hÃ¶gerklicka eller vÃ¤lj frÃ¥n KÃ¶r-menyn:
 * 1. KÃ¶r fÃ¶r att evaluera den markerade texten,
 * 2. Inspektera fÃ¶r att Ã¶ppna en objektinspektÃ¶r pÃ¥ resultatet, eller
 * 3. Visa fÃ¶r att infoga resultatet i en kommentar efter markeringen.
 */

//var name = prompt("Vad heter du?");
//alert("Ditt namn Ã¤r " + name.length + " tecken lÃ¥ngt"); 

//Uppgift b - rÃ¤kna ut nÃ¥gons Ã¥lder
//var year = prompt("Viket Ã¥r Ã¤r du fÃ¶dd (4 siffror)?");
//var age = (new Date()).getFullYear() - year;
//alert("Du fyller (eller fyllde) " + age + " Ã¥r i Ã¥r");


//alert(3+5);


//alert("3"+5);

//var name = prompt("Vad heter du?");
//alert("FÃ¶rsta bokstaven i ditt namn Ã¤r " + name[0]);
//alert("Sista bokstaven Ã¤r " + name[name.length - 1]);

//CTRL R

//uppgift d - intoduktion av konsollen.
// konsollen är mindre störande än alert
//var the_king = "Karl XVI Gustav";
//console.log("Kungen är " + the_king);

// CTRL + SHIFT + K samt CTRL R

//console.log("Lilla kungen är " + the_king.toLowerCase());
//console.log("Stora kungen är " + the_king.toUpperCase());

// Uppgift e - if - elsé;
var name = "Linus";
if ( name.length > 5 ) {
    console.log("Ditt namn har mer än 5 tecken");    
} else if ( name.length ===5 ) {
    console.log("Ditt namn har precis 5 tecken");
} else {
    console.log("Ditt namn innehåller färre än 6 tecken");
}

// Uppgift f - en enkel loop
var eman = "", i = 1, len = name.length;
while ( i <= len ) {
    eman += name[len - i];
    i += 1;
}
console.log("Namnet baklänges blir '" + eman + "'");
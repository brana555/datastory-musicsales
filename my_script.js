console.log("Hello world!"); //This makes the script output to the console
//Anything that comes after two slashes (like this!) is a "comment", and is ignored by the program
console.log("1" + "2" + "3");
console.log(1 + 2 + 3);

var my_age = 22; //You can change this to your real age, if you like

console.log("I am "+ my_age + " years old.")

var next_year = my_age + 1;

console.log("Next year I will be "+ next_year + " years old.")

if (my_age == 18){
    console.log("I am exactly old enough to vote in the UK.");
}
else if (my_age>18){
    console.log("I am old enough to vote in the UK.");
}
else{
    console.log("I am not quite old enough to vote yet.");
}

var myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

for(var i = 0; i < myArray.length; i++){
    console.log("i: " + i);
    console.log("myArray["+i+"]: " + myArray[i]);
}

myArray.forEach(function(d){
    console.log(d);
});

var countdown = 10;
console.log("Initiate countdown!");
while(countdown >= 0){
    console.log(countdown + "..!");
    countdown = countdown -= 1; //Don't forget this line, or the loop will never stop!
}
console.log("Blastoff!");

//We're going to create three functions...
function RunThisSecond(){
    console.log("Second!");
}

function RunThisFirst(){
    console.log("Ready to go:");
    console.log("First!");
}

function RunThisThird(){
    console.log("Third!");
}

//...and now we'll call them.
RunThisFirst();
RunThisSecond();
RunThisThird();

function AddTwoNumbers(number1, number2){
    console.log("Adding "+number1+" and "+number2+".");
    return number1 + number2;
}

console.log(AddTwoNumbers(1, 2));

var my_number = AddTwoNumbers(239765, 2124444);
console.log(my_number);

console.log(AddTwoNumbers(my_number, 1));

function AddFifty(number){
    return AddTwoNumbers(number, 50);
}

AddFifty(1);
AddFifty(2);
AddFifty(239765);

cat = {
    name: "Tiddles",
    age:2
};

console.log(cat);
console.log(cat.name);
console.log(cat.age);
cat.age = cat.age + 1; //It's Tiddles's birthday!
console.log(cat.age);

//Let's add a new property
cat.colour = "Tabby";
console.log(cat.colour);
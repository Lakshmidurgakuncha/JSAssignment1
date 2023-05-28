console.clear();
// Question 1:
let str1 = "Today is";
let str2 = "      a beautiful day     "
let str3 = " In Hawaii.     "

let str4 = str2.trim();
let str5 = str3.trim();

let string = str1 + str4 + str5;

console.log(str1 + ' ' + str4 + ' ' + str5.toLowerCase());

console.log("Q1 END ========================================")

// Question 2:

var ch = 'd';
if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z'))
    {
        //check for VOWEL or CONSONANT
        switch(ch)
        {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log("Entered charcters is VOWEL");
                break;
            default:
                console.log("Entered charcters is CONSONANT");            
        }
    }
    else
    {
        console.log("Entered value is not an alphabet.");
    }

    console.log("Q2 END =====================")

    // Question 3:

    let a = parseInt(prompt('Enter the first number '));
let b = parseInt(prompt('Enter the second number '));
let c = prompt('Enter operator');
switch (c) {
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a+b);
        break;
    case '/':
        console.log(a+b);
        break;
    default:
        console.log("not provided the valid input");
}

console.log("Q3 END =====================")

// Question 4:

let a = parseInt(prompt('1st side of triangle'));
let b = parseInt(prompt('2nd side of triangle'));
let c = parseInt(prompt('3rd side of triangle'));
if(a == b == c){
    console.log("Equilateral Triangle");    
}
else if(a == b || a == c || b == c)
{
    console.log("Isosceles Triangle");    
}
else{
    console.log("Scalene Triangle");    
}

console.log("Q3 END =====================")

// Question 5:
// Question 5:

units = 300
bill = 0
if(units<=50){
  bill  = units*0.5
}
else if(units <=150){
  bill = 50*0.5 + (units-50)*0.75
}
else if(units <=250){
  bill = 50*0.5 + 100*0.75 + (units-150)*1.2
}
else if(units>250){
  bill = (50*0.5) + (100*0.75) + (100*1.2) + ((units-250) *1.5)
}
bill = bill + bill*0.2

console.log(bill);

console.log("Q5 END =====================")








 




/******************************************************************************************************** */
//Print odd numbers in an array
/******************************************************************************************************** */
console.log("1.Print odd numbers in an array")
const arr = [45, 60, 47, 81, 56, 97, 72, 55, 77, 99];
console.log("input array:", arr)

// Anonymous function
console.log("Output using Anonymous function: ")
const oddArray=[];
let odd = function (ele) {
    if ((ele % 2) != 0) { return true }
}
for (let i = 0; i < arr.length; i++) {
    if (odd(arr[i])) { oddArray.push(arr[i]); }
}
odd(arr);
console.log(oddArray);
//IIFE
console.log("Output using IIFE: ")
const oddArray2=[];
(function () {
    arr.forEach(el => { if (el % 2 != 0) oddArray2.push(el) })
})();
console.log(oddArray2);


/******************************************************************************************************** */
// //Convert all the strings to title caps in a string array
/******************************************************************************************************** */
console.log("2.Convert all the strings to title caps in a string array")
let st = ["chennai", "bangalore", "hyderbad", "delhi"];
console.log("Input string array", st);

// //Anonymous function
console.log("Output using Anonymous function: ");
const upper1=[];
let upper = function (sst) {
    for (let s of sst) {
        upper1.push(s.toUpperCase());
    }
}

upper(st);
console.log(upper1)
// //IIFE
console.log("Output using IIFE: ")
const upper2=[];
(function () {
    for (let s of st) {
        upper2.push(s.toUpperCase());
    }
})();
console.log(upper2);
/********************************************************************************************************** */
//Sum of all numbers in an array
/******************************************************************************************************** */
console.log("3.Sum of all numbers in an array");
const arrForSum = [45, 60, 47, 81, 56, 97, 72, 55, 77, 99];
//Anonymous function
console.log("Output using Anonymous function: ");
let sum_of_arr = function (arr) {
   let sum = 0;
    for (let key of arr) { sum += Number(key) }
   return sum;
}
console.log(sum_of_arr(arrForSum));

 //IIFE
console.log("Output using IIFE: ");
 (function () {
    let sum2 = 0;
    for (let key of arrForSum) { sum2 += Number(key) };
   console.log(sum2);
})();



/*********************************************************************************************************** */
// // Return all the prime numbers in an array
/******************************************************************************************************** */
console.log("4.Return all the prime numbers in an array")
 const allNum = [3, 5, 12, 18, 13, 11, 17, 29, 14, 34];
console.log("Input array:", allNum);
// //Anonymous function
console.log("Output using Anonymous function: ");
var isPrm = function (numb) {
    for (i = 2; i < numb; i++)
     { if ((numb % i) == 0) { return false } }
     return true;
}

newPrime = [];

allNum.forEach(num => { if (isPrm(num)) { newPrime.push(num) } })
console.log(newPrime);

// //IIFE
console.log("Output using IIFE: ")
var newPrime2 = [];

(function()
{
    for (let key in allNum) {
        flag=1;
        for(i=2;i<key;i++)
        {
             if ((key % i) == 0) { 
               //  console.log("the number is not a prime:", key);
                 flag=0; } 
        }
        if( flag==1) {newPrime2.push(key)};
    }


})();

console.log(newPrime2);


/****************************************************************************************************** */
// Return all the palindromes in an array
console.log("5. Return all the palindromes in an array")
const str = ["mama", "malayalam", "mom", 1234, 121];
console.log("Input array:", str);
const arrPal1=[];
//Anonymous function
console.log("Output using Anonymous function: ");
const palindrom = function (str) {
    str.forEach(element => {
        s = element.toString();
        rev = s.split("").reverse().join("");
      //  console.log(s, rev);
        if (JSON.stringify(s) == JSON.stringify(rev)){ arrPal1.push(JSON.stringify(rev)) }   
    });
}
palindrom(str);
console.log(arrPal1);

//IIFE
const arrPal2=[];
console.log("Output using IIFE: ");
(function()
{
    str.forEach(element => {
        s = element.toString();
        rev = s.split("").reverse().join("");
        //console.log(s, rev);
        if (JSON.stringify(s) == JSON.stringify(rev)) { arrPal2.push(JSON.stringify(rev)) }
    });

})();

console.log(arrPal2);
/************************************************************************************* */
//Return median of two sorted arrays of the same size
console.log("6.Return median of two sorted arrays of the same size")
//Anonymous function
console.log("Output using Anonymous function: ");
var getMedian= function (ar1, ar2, n1)
{
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n1; count++)
    {
        if (i == n1)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }

        else if (j == n1)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        /* equals sign because if two
            arrays have some common elements */
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
    }

    return (m1 + m2)/2;
}

/* Driver program to test above function */
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");

//IIFE
console.log("Output using IIFE: ")
const n3=n1;
(function(){
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n3; count++)
    {
        if (i == n3)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }

        else if (j == n3)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        /* equals sign because if two
            arrays have some common elements */
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
    }
    console.log("Median is "+ (m1 + m2)/2);
})();




// Remove duplicates from an array
console.log("7.Remove duplicates from an array")
const arr8 = [3, 5, 12, 14, 18, 13, 13, 11, 11, 17, 29, 14, 34];
console.log("Input arry:", arr8);
const unique1 = [];
//Anonymous function
console.log("Output using Anonymous function: ");
const findunique=function()
{arr8.forEach(num => {
    if (!unique1.includes(num)) 
        unique1.push(num);
    }
)
console.log(unique1);}
findunique();
//IIFE
console.log("Output using IIFE: ")
const unique2 = [];
(function(){
    {arr8.forEach(num => {
        if (!unique2.includes(num)) 
            unique2.push(num);
        }
    )
    console.log("the array is with unique is:" +unique2);}
})();
/********************************************************************* */
// Rotate an array by k times
console.log("8. Rotate an array by k times");
const arr9 = [3, 5, 12, 14, 18, 13, 13, 11, 11, 17, 29, 14, 34];
var k = 2;
console.log("Input array:", arr9);
//Anonymous function
console.log("Output using Anonymous function: shift k=2");
let y;
const an= function() {
    for (let i = 1; i <= k; i++) {
    y = arr9.shift();
    arr9.push(y);
}
console.log("Array after shift", arr9);
}
an(arr9,k);
//IIFE
console.log("Output using IIFE: ");
(function(){
    for (let i = 1; i <= k; i++) {
        y = arr9.shift();
        arr9.push(y);
    }
    console.log("Array shifted by k", arr9);
})();
/************************************************************************ */
/************************************************************************ */
/************************************************************************ */
// Do the below programs in arrow functions
// Print odd numbers in an array


const arr10 = [45, 60, 47, 81, 56, 97, 72, 55, 77, 99];
arr11 = [];
arr10.forEach(num => {
    if (num % 2 != 0) {
        arr11.push(num);
    }
})
console.log("odd number list is")
console.log(arr11)

// Convert all the strings to title caps in a string array

const str3 = ["welcom", " to", "zen", "class"];
var str4 = [];
str3.map(el => { str4.push(el.toUpperCase()); }
);
console.log("Uppercase list is")
console.log(str4);
// Sum of all numbers in an array
const arr12 = [45, 60, 47, 81, 56, 97, 72, 55, 77, 99];
let sum = 0;
arr12.reduce(num => sum += num)
console.log(" Sum of the number in arry is :" + sum);


// Return all the prime numbers in an array
let isprime = function (numb) {
    for (i = 2; i < numb; i++) { if ((numb % i) == 0) { return false } }
    return true;
}
const prime = arr12.filter(num => isprime(num))
console.log(prime);


// Return all the palindromes in an array
var ispal = function (str) {

    s = str.toString();
    rev = s.split("").reverse().join("");
    if (JSON.stringify(s) == JSON.stringify(rev)) { return true } else {return false }

}

const str5 = ["mama", "malayalam", "mom", 1234, 121];
const pal = str5.filter(st => ispal(st));
console.log(pal);


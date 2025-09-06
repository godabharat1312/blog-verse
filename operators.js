//arthemetic

let x=9;
let y=3;

console.log(x/y)
console.log(x**y)

let z=3
z*=2;
console.log(z)

let a=10,b="10";

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)



let age=20;
console.log(a>=20 && age<=40)
console.log(a<=20 || age>=40)
console.log(!(age<18))



let firstName="Bharat"
let lastName="Kumar"
let fullName=firstName+" "+lastName;
console.log(fullName)
let corretName=`Hello ${firstName} ${lastName},welcome to jntu`
console.log(corretName)


//ternary
let myAge=15;
if(myAge>=18){
    console.log("vote")
}

else
    console.log("not vote")
let result=myAge>=18 ? "vote":"you cant"
console.log(result)



let count=5;
console.log(count++)
console.log(count)
console.log(++count)

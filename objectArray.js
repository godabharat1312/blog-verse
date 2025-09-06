let person={
    name:"bharat",
    age:19
}
console.log(person.name)
console.log(person["age"])

const {name,age}=person;
console.log(name)
console.log(age)


let fruits=["apple","banana","mango"]
console.log(fruits[0])

let num=[1,2,3,4,5]

let square=num.map((n)=>n*n);
console.log(square)

let even=num.filter((n)=>n%2==0);
console.log(even)

let sum=num.reduce((present,n)=>present+n,0)
console.log(sum)

let arr=[
    {name:"bharat",marks:20},
    {name:"pavan",marks:19},
    {name:"madhu",marks:22}

]
console.log(arr[1].name)
let max=0;
for(let i=0;i<3;i++){
    console.log(i)
    if(arr[i].marks>max){
        max=arr[i].marks;
    }
    console.log(max)

}
let tpr="";
for(let person of arr){
    if(person.marks>max){
        max=person.marks;
        tpr=person.name;
    }
}
console.log(max,tpr)
console.log(arr.size)
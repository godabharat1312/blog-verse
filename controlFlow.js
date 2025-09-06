let marks=85;
if(marks>=90){
console.log("A+ grade")

}
else if(marks>=80){

    console.log("A grade")
}
else
    console.log("fail")




let day=5
switch(day){
    case 1:console.log("monday")
    break;
    case 2:console.log("tueday")
    break;
    case 3:console.log("wensday")
    break;
    case 4:console.log("thrusday")
    break;
    case 5:console.log("friday")
    break;
    default:
        console.log("invalid")
}
for(let i=0;i<5;i++)
    console.log(i);
let i=1
while(i<10){
    console.log(i)
    i++;
}
do{
    console.log(i)
}while(i<5)



let colors=["red","blue","green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
let person={
    name:"Bharat",
    age:18
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}

for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }else if(i===2){
        break;}
        console.log(i)

}
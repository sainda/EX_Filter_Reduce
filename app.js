let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let arr_string=["hello","coding","HTML","JavaScript","development","css"];
let arr_person=[
    person1={
        name: "Ali",
        club: false,
        age: 19,
        vote: true,
    },
    person2={
        name: "bob",
        club: true,
        age: 12,
        vote: true,
    },
    person3={
        name: "amelie",
        club:false,
        age: 25,
        vote: false,
    },
    person4={
        name: "sami",
        club: true,
        age: 20,
        vote: true,
    }
];

let Array1= arr.filter(callback1);
let Array2= arr.filter(callback2);
let Array3= arr_string.filter(callback3);
let Array4= arr_person.filter(callback4);
let Array5= arr_person.filter(callback5);


function callback1(value,index,array){
    if(value>=5){
        return true;
    }
    return false;
}

function callback2(value,index,array){
    if(value % 2== 0){
        return true;
    }
    return false;
}

function callback3(value,index,array){
    if(value.length <= 5){
        return true;
    }
    return false;
}

function callback4(value,index,array){
    if(value.club==true){
        return true;
    }
    return false;
}

function callback5(value,index,array){
    if(value.age> 18){
        return true;
    }
    return false;
}

console.log("FILTER");
console.log("C'est le tableau initial: ["+ arr+"]");
console.log("Les nombres qui sont sup à 5: ["+Array1 +"]");
console.log("les nombres pairs: ["+Array2 +"]");
console.log("-------------------------");
console.log("C'est le tableau initial: ["+ arr_string+"]");
console.log("Les chaines qui ont 5char ou moins: ["+Array3+"]");
console.log("-------------------------");
console.log("Le tableau des personnes initial:");
console.log(arr_person);
console.log("les personnes qui appartiennent le club:")
console.log(Array4);
console.log("Les personnes qui sont agées plus de 18 ans: ")
console.log(Array5);
console.log("-------------------------------------");


let listeDesArticles = [
    article1={ nom: "Livre", prix: 20 },
    article2={ nom: "Ordinateur", prix: 1000 },
    article3={ nom: "Casque", prix: 50 },
];

let tableau=[[1,2,3],["HTML","JavaScript","css"]];


let Somme= arr.reduce((acc,value,index)=> acc+value,0);
let concatenatedString = arr.reduce((acc, value) => acc.toString() + value.toString(), '');
let nb_vote = arr_person.reduce(callback6,0);
let coutTotal = listeDesArticles.reduce((acc,value)=> acc+value.prix,0);
let finalTab= tableau.reduce((acc,value,index)=> acc.concat(value),[]);


function callback6(acc,value,index){
    if(value.vote==true){
        acc=acc+1;
    }
    return acc;
}






console.log("REDUCE");
console.log("La somme= "+Somme);
console.log("concat: "+concatenatedString);
console.log("les nombres des personnes qui ont voté: "+nb_vote);
console.log("Coût total= "+coutTotal);
console.log("Le grand tableau:"+finalTab);








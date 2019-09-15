const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function helperKata(headerString, value) {
    let header = document.createElement("h2");
    header.textContent = headerString;
    document.body.appendChild(header);

    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(value);
    document.body.appendChild(newElement);
}

function kata1() {
    let value = gotCitiesCSV.split(",");
    helperKata("Kata 1", value);
    return value;
}

kata1();

function kata2() {
    let value = bestThing.split(" ");
    helperKata("Kata 2", value);
    return value;
}
kata2();

function kata3() {
    let value = gotCitiesCSV.split(",").join(";");
    helperKata("Kata 3", value);
    return value;
}
kata3();

function kata4() {
    let value = lotrCitiesArray.join(",");
    helperKata("Kata 4", value);
    return value;
}
kata4();

function kata5() {
    let value = lotrCitiesArray.slice(0, 5);
    helperKata("Kata 5", value);
    return value;
}
kata5();

function kata6() {
    let value = lotrCitiesArray.slice(-5);
    helperKata("Kata 6", value);
    return value;
}
kata6();

function kata7() {
    let value = lotrCitiesArray.slice(2, 5);
    helperKata("Kata 7", value);
    return value;
}
kata7();

function kata8() {
    lotrCitiesArray.splice(2, 1);
    helperKata("Kata 8", lotrCitiesArray);
    return lotrCitiesArray;
}
kata8();

function kata9() {
    lotrCitiesArray.splice(5, 2);
    helperKata("Kata 9", lotrCitiesArray);
    return lotrCitiesArray;
}
kata9();

function kata10() {
    lotrCitiesArray.splice(2, 0, "Rohan");
    helperKata("Kata 10", lotrCitiesArray);
    return lotrCitiesArray;
}
kata10();

function kata11() {
    lotrCitiesArray.splice(5, 1, "Deadest Marshes");
    helperKata("Kata 11", lotrCitiesArray);
    return lotrCitiesArray;
}
kata11();

function kata12() {
    let value = bestThing.slice(0, 14);
    helperKata("Kata 12", value);
    return value;
}
kata12();

function kata13() {
    let value = bestThing.slice(bestThing.length - 12);
    helperKata("Kata 13", value);
    return value;
}
kata13();

function kata14() {
    let value = bestThing.slice(23, 38);
    helperKata("Kata 14", value);
    return value;
}
kata14();

function kata15() {
    let value = bestThing.substring(bestThing.length - 12);
    helperKata("Kata 15", value);
    return value;
}
kata15();

function kata16() {
    let value = bestThing.substring(23, 38);
    helperKata("Kata 16", value);
    return value;
}
kata16();

function kata17() {
    let value = bestThing.split(" ");
    let value1 = value.indexOf("only");
    //let value1= bestThing.indexOf("only");
    helperKata("Kata 17", value1);
    return value1;
}
kata17();

function kata18() {
    let value = bestThing.split(" ");

    let a = value[value.length - 1];
    let i = value.indexOf(a);

    //helperKata("Kata 18",value.length-1);
    helperKata("Kata 18", i);
    return i;
}
kata18();

function kata19() {
    let vowels = ["aa", "ee", "ii", "oo", "uu"];
    let value = gotCitiesCSV.split(",");
    let result = [];
    value.forEach((item) => {
        let b = vowels.filter((vo) => { return item.indexOf(vo) !== -1 });
        if (b.length > 0) {
            result.push(item);
        }
    })

    helperKata("Kata 19", result);

    return result;
}
kata19();

function kata20() {
    let result = [];
    lotrCitiesArray.forEach((item) => {
        let a = item.substring(item.length - 2);
        if (a === "or") {
            result.push(item);
        }
    })

    helperKata("Kata 20", result);

    return result;
}
kata20();

function kata21() {
    let result = [];
    let value = bestThing.split(" ");

    value.forEach((item) => {
        if (item.indexOf("b") === 0) {
            result.push(item);
        }
        // let a=item.substring(0,1);
        // if(a==="b"){
        //     result.push(item);
        // }
    })

    helperKata("Kata 21", result);

    return result;
}
kata21();

function kata22() {
    let result = "";
    if (lotrCitiesArray.includes("Mirkwood")) {
        result = "Yes";
    }
    else {
        result = "No";
    }
    helperKata("kata22", result);
    return result;
}
kata22();

function kata23() {
    let result = "";
    if (lotrCitiesArray.includes("Hollywood")) {
        result = "Yes";
    }
    else {
        result = "No";
    }
    helperKata("kata23", result);
    return result;
}
kata23();

function kata24() {
    let result = lotrCitiesArray.indexOf("Mirkwood");
    helperKata("kata24", result);
    return result;
}
kata24();

function kata25() {
    let result = lotrCitiesArray.find((item) =>{
        return item.split(" ").length > 1});

    helperKata("kata25", result);
    return result;
}
kata25();

function kata26() {
    let result = lotrCitiesArray.reverse();

    helperKata("kata26", result);
    return result;
}
kata26();

function kata27() {
    let result = lotrCitiesArray.sort();

    helperKata("kata27", result);
    return result;
}
kata27();

function kata28() {
    let result = lotrCitiesArray.sort((a,b)=> a.length-b.length);

    helperKata("kata28", result);
    return result;
}
kata28();

let removedCity="";

function kata29(){
   removedCity = lotrCitiesArray.pop();
   helperKata("kata29", lotrCitiesArray);
   return lotrCitiesArray;
}

kata29();

function kata30(){
    lotrCitiesArray.push(removedCity);
    helperKata("kata30", lotrCitiesArray);
    return lotrCitiesArray;
 }
 
 kata30();

 let shiftCity="";
 function kata31(){
    shiftCity = lotrCitiesArray.shift();
     helperKata("kata31", lotrCitiesArray);
    return lotrCitiesArray;
 }
 kata31();

 function kata32(){
    lotrCitiesArray.unshift(shiftCity);
     helperKata("kata32", lotrCitiesArray);
    return lotrCitiesArray;
 }
 kata32();
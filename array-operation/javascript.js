const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function oneThroughTwenty() {
    let text = document.createTextNode("1 - 20 : ");
    document.getElementById("line1").appendChild(text);
    
    for(let i = 1; i < 21; i ++){
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("line1").appendChild(numbers);
    }
}
function evensToTwenty() {
    let text = document.createTextNode("1 - 20 Evens : ");
    document.getElementById("line2").appendChild(text);      
    for(let i = 2; i < 21; i += 2){
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("line2").appendChild(numbers);
    }
}
function oddsToTwenty() {
    let text = document.createTextNode("1 - 20 Odds : ");
    document.getElementById("line3").appendChild(text);     
    for(let i = 1; i < 21; i += 2){
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("line3").appendChild(numbers);
    }
}
function multiplesOfFive() {
    let text = document.createTextNode("5 - 100 Multiples of Five : ");
    document.getElementById("line4").appendChild(text);  
    for(let i = 5; i <= 100; i += 5){
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("line4").appendChild(numbers);
    }
}
function squareNumbers() {
    let text = document.createTextNode("1 - 100 Square Numbers : ");
    document.getElementById("line5").appendChild(text);  
    for(let i = 1; i <= 10; i ++){
        let numbers = document.createTextNode((i * i) + ", ");
        document.getElementById("line5").appendChild(numbers);
    }
}
function countingBackwards() {
    let text = document.createTextNode("20 - 1 : ");
    document.getElementById("line6").appendChild(text);  
    for(let i = 20; i > 0; i --){
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("line6").appendChild(numbers);
    }
}
function evenNumbersBackwards() {
    let text = document.createTextNode("20 - 1 Evens : ");
    document.getElementById("line7").appendChild(text);  
    for(let i = 20; i > 0 ; i -= 2){
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("line7").appendChild(numbers);
    }
}
function oddNumbersBackwards() {
    let text = document.createTextNode("20 - 1 Odds : ");
    document.getElementById("line8").appendChild(text);  
    for(let i = 19; i > 0 ; i -= 2){
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("line8").appendChild(numbers);;
    }
}
function multiplesOfFiveBackwards() {
    let text = document.createTextNode("100 - 5 Multiples Of Five : ");
    document.getElementById("line9").appendChild(text);  
    for(let i = 100; i > 0 ; i -= 5){
        let numbers = document.createTextNode(i + ", ");
        document.getElementById("line9").appendChild(numbers);
    }
}
function squareNumbersBackwards() {
    let text = document.createTextNode("100 - 1 Square Numbers : ");
    document.getElementById("line10").appendChild(text);  
    for(let i = 10; i > 0 ; i --){
        let numbers = document.createTextNode((i * i) + ", ");
        document.getElementById("line10").appendChild(numbers);
    }
}
function displaySampleArray(){
    let text = document.createTextNode("Sample Array : ");
    document.getElementById("line11").appendChild(text);  
    for(let i = 0; i < sampleArray.length; i ++){
        let numbers = document.createTextNode(sampleArray[i] + ", ");
        document.getElementById("line11").appendChild(numbers);
    }
}
function displayEvens(){
    let text = document.createTextNode("Sample Array Evens : ");
    document.getElementById("line12").appendChild(text);  
    for(let i = 0; i < sampleArray.length; i ++){
        if(sampleArray[i] % 2 != 0)
            continue;
        let numbers = document.createTextNode(sampleArray[i] + ", ");
        document.getElementById("line12").appendChild(numbers);
    }
}
function displayOdds(){
    let text = document.createTextNode("Sample Array Odds : ");
    document.getElementById("line13").appendChild(text);  
    for(let i = 0; i < sampleArray.length; i ++){
        if(sampleArray[i] % 2 != 1)
            continue;
        let numbers = document.createTextNode(sampleArray[i] + ", ");
        document.getElementById("line13").appendChild(numbers);
    }
}
function displaySampleSqaured(){
    let text = document.createTextNode("Sample Array Squared : ");
    document.getElementById("line14").appendChild(text);  
    for(let i = 0; i < sampleArray.length; i ++){
        let numbers = document.createTextNode((sampleArray[i] * sampleArray[i]) + ", ");
        document.getElementById("line14").appendChild(numbers);
    }
}
function displaySum20(){
    let text = document.createTextNode("Sum of 1 - 20 : ");
    document.getElementById("line15").appendChild(text);  
    let num = 0;
    for(let i = 0; i < 21; i ++){
        num += i;
    }
    let numbers = document.createTextNode(num);
    document.getElementById("line15").appendChild(numbers);
}
function displaySampleSum(){
    let text = document.createTextNode("Sum of Sample Array : ");
    document.getElementById("line16").appendChild(text);  
    let num = 0;
    for(let i = 0; i < sampleArray.length; i ++){
        num += sampleArray[i];
    }
    let numbers = document.createTextNode(num);
    document.getElementById("line16").appendChild(numbers);
}
function displaySmallest(){
    let text = document.createTextNode("Sample Array Smallest : ");
    document.getElementById("line17").appendChild(text);  
    let smallest = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i ++){
        if(sampleArray[i] < smallest)
            smallest = sampleArray[i];
    }
    let numbers = document.createTextNode(smallest);
    document.getElementById("line17").appendChild(numbers);
}
function displayLargest(){
    let text = document.createTextNode("Sample Array Largest : ");
    document.getElementById("line18").appendChild(text);  
    let largest = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i ++){
        if(sampleArray[i] > largest)
            largest = sampleArray[i];
    }
    let numbers = document.createTextNode(largest);
    document.getElementById("line18").appendChild(numbers);
}
function display20Rectangles(){
    let text = document.createTextNode("20 Even Rectangles");
    document.getElementById("line19").appendChild(text); 
    for(let i = 0; i < 20; i ++){
        let rect = document.createElement("DIV");
        rect.style = "width:100px;height:20px;border:1px solid #000;background-color:gray"
        document.getElementById("line19").appendChild(rect);
    }
}
function display20DiffRectangles(){
    let text = document.createTextNode("20 Evenly Expanding Rectangles");
    document.getElementById("line20").appendChild(text); 
    for(let i = 105; i < 201; i += 5){
        let rect = document.createElement("DIV");
        rect.style = "width:" + i + "px;height:20px;border:1px solid #000;background-color:gray"
        document.getElementById("line20").appendChild(rect);
    }
}
function displaySampleRectangles(){
    let text = document.createTextNode("Rectangles With Widths of Sample Array");
    document.getElementById("line21").appendChild(text); 
    for(let i = 0; i < sampleArray.length; i ++){
        let rect = document.createElement("DIV");
        rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:gray"
        document.getElementById("line21").appendChild(rect);
    }
}
function displayEveryOtherRed(){
    let text = document.createTextNode("Every Other Rectangle is Red");
    document.getElementById("line22").appendChild(text); 
    for(let i = 0; i < sampleArray.length; i ++){
        let rect = document.createElement("DIV");
        if(i % 2 == 0)
            rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:gray"
        else if(i % 2 == 1)
            rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:red"
        document.getElementById("line22").appendChild(rect);
    }
}
function displayRedWidths(){
    let text = document.createTextNode("Even Widths are Red");
    document.getElementById("line23").appendChild(text); 
    for(let i = 0; i < sampleArray.length; i ++){
        let rect = document.createElement("DIV");
        rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:gray"
        if(sampleArray[i] % 2 == 0)
            rect.style = "width:" + sampleArray[i] + "px;height:20px;border:1px solid #000;background-color:red"
        document.getElementById("line23").appendChild(rect);
    }
}
var pardiv = document.createElement("div");
pardiv.style.textAlign = "center"
pardiv.style.paddingTop = "30px"

//this is the input for the date
var inputdate = document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","dob");
inputdate.style.width = "40%"
inputdate.style.margin = "10px"

//this is for the button
var button = document.createElement("button");
button.innerHTML = "Display date"
button.className = "btn btn-primary"
button.addEventListener("click",displaydata);

//Append it to parent div
pardiv.append(inputdate,button)
var displaydiv = document.createElement("div");
displaydiv.id = "displaydata"
document.body.append(pardiv)

function displaydata(){
    var input = document.getElementById("dob").value;

    var inpdate = new  Date(input);
    var inpdate1 = document.createElement("p");
    inpdate1.innerHTML = inpdate;
 
    var currdate = new Date();
    var currdate1 = document.createElement("p");
    currdate1.innerHTML = currdate;

    var millisecdiff = currdate.getTime() - inpdate.getTime();
    let millisecdiff1 = document.createElement("p");
    millisecdiff1.innerHTML = "Milli Seconds  " + millisecdiff;

    var seconddiff = mathfloor(millisecdiff,1000);
    let seconddiff1 = document.createElement("p");
    seconddiff1.innerHTML = "Seconds :  " + seconddiff;

    var minutesdiff = mathfloor(seconddiff, 60);
    let minutesdiff1 = document.createElement("p");
    minutesdiff1.innerHTML = "Minutes :  " + minutesdiff;

    var hourdiff = mathfloor(minutesdiff, 60);
    let hourdiff1 = document.createElement("p");
    hourdiff1.innerHTML = "Hour :  " + hourdiff;

    var daydiff = mathfloor(hourdiff, 24);
    let daydiff1 = document.createElement("p");
    daydiff1.innerHTML = "Day :  " + daydiff;

    var monthdiff = getmonthdiff(inpdate, currdate);
    let monthdiff1 = document.createElement("p");
    monthdiff1.innerHTML = "Month :  "+ monthdiff;

    let yeardiff = getYear(inpdate, currdate);
    let yeardiff1 = document.createElement("p");
    yeardiff1.innerHTML = "Year :  " + yeardiff;

    pardiv.append(inpdate1, currdate1, yeardiff1, monthdiff1, daydiff1, hourdiff1, minutesdiff1, seconddiff1, millisecdiff1)

}
function mathfloor(value1, value2){
    return Math.floor(value1/value2)
}

function getYear(value1,value2){
    var d1= new Date(value1);
    var d2 = new Date(value2);
    return d2.getFullYear() - d1.getFullYear()
}


function getmonthdiff(value1,value2){
var year = getYear(value1,value2)
var month = (year*12)+(value2.getMonth()-value1.getMonth())
return month

}




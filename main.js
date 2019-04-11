// Get user input
var filter= document.querySelector("#filter")
console.log(filter);

// add event listener to listen user input
filter.addEventListener("keyup", filterNames)

// filter out list depends on the user 
    // Get value of user input
    var value = filter.value;

    // Get all names on list
    var names = document.querySelectorAll("li a")

// Loop over names
for(var i=0;i<names.length;i++)
 // compare names
if(names[i].innerText.toUpperCase().includes(value.toUpperCase().includes(value))) {    
names [i].style.display ="block"
}else{
Names[i].style.display="none"
}








// 1) grab the save button and add a event listener to it

const saveButton = document.getElementById("save-btn")
let myLeads = []
const userInput= document.getElementById("input-el")
let leads = document.getElementById("leads")

saveButton.addEventListener("click", function saveLead(){
    myLeads.push(userInput.value)
    leads.textContent += myLeads
})

// 2) Create two variables:
//      myLeads -> should be assigned to an empty array
//      inputEl -> should be assigned to the text input field



// 3) Push the value "www.awesomelead.com" to myArray when the input button is clicked

// 4) Push the value "www.awesomelead.com" to myArray when the input button is clicked
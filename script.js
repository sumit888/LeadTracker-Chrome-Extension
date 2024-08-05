// 1) grab the save button and add a event listener to it

// 2) Create two variables:
//      myLeads -> should be assigned to an empty array
//      inputEl -> should be assigned to the text input field

// 3) Push the value "www.awesomelead.com" to myArray when the input button is clicked

// 4) Push the value "www.awesomelead.com" to myArray when the input button is clicked

// 5) Log out the items in the myLeads array using a for loop [loop is used on array for rendering all the items]

// 6) Grab the unordered list and store it in a const variable called ulEl

// 7) Render the leads in the unordered list using leadList.textContent

// 8) Replace .textContent with .innerHTML and use <li> tags

//------Refactor the app to use a template string-----------

const userInput= document.getElementById("input-el")
const saveButton = document.getElementById("save-btn")
const deleteButton = document.getElementById("delete-btn")
let leads = document.getElementById("leads")
let myLeads = []
let oldLeads = []
const leadList = document.getElementById("lead-list")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteButton.addEventListener("click", function deleteLead(){
    // 3. When clicked, clear localStorage, myLeads, and the DOM

    localStorage.clear(myLeads)
    myLeads = []
    render(myLeads)

    console.log("Deleting...")
})


saveButton.addEventListener("click", function saveLead(){
    myLeads.push(userInput.value)
    // Clear out the input field after pushing the value

     // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    // PS: remember JSON.stringify()    

    userInput.value = " "

    // 2. Call the renderLeads() function
    render(myLeads)

    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})




//10) Improving the performance of our app
//     - Create a variable, listItems, to hold all the HTML for the list items
//     - Assign it to an empty string to begin with
//     - Add the item to the listItems variable instead of the ulEl.innerHTML


// 11. Wrap the code below in a renderLeads() function



function render(lead){
let listItems = ""

    for(let i=0; i<lead.length; i++){
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?

        

        // listItems += "<li><a target='_blank' href='" + (myLeads[i].startsWith('https://') ? myLeads[i] : 'https://' + myLeads[i])  + "'>" + myLeads[i] + "</a></li>"// using innerHTML instead of .textContent to create html elements i.e. <li></li>

        //USING template strings or strin interpolarization

        listItems += `
            <li>
                <a href='${lead[i].startsWith('https') ? lead[i] : 'https://' + lead[i]}' target='_blank'>

                ${lead[i]}</a>
            </li>
        `
        
        // Trying different method instead of .innerHTML
        // create element
        // set text content
        // append to ul
    //     const li = document.createElement("li")
    //     li.textContent = myLeads[i]
    //     leadList.append(li)
    // 
    }
    // * Render the listItems inside the unordered list using ulEl.innerHTML outside the for loop to minimize dom manipulation
    leadList.innerHTML = listItems
}

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings


// console.log(localStorage.getItem("Name"))
// // localStorage.clear("Name")

// //Since localStorage only accepts Strings. So we've to turn array into String first

// let myLeads2 = `["www.awesomelead.com"]`

// // 1. Turn the myLeads string into an array
// myLeads2 = JSON.parse(myLeads2)
// // 2. Push a new value to the array
// myLeads2.push("www.lead2.com")
// // 3. Turn the array into a string again
// myLeads2 = JSON.stringify(myLeads)
// // 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads2)

// // Get the leads from the localStorage - PS: JSON.parse()
// // Store it in a variable, leadsFromLocalStorage
// // Log out the variable

// let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// console.log(leadsFromLocalStorage)







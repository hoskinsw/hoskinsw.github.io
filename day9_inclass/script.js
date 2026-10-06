// Default game day checklist items
const checklistItems = [
    "Pack game tickets",
    "Bring team jersey",
    "Pack water bottle",
    "Check game time",
    "Bring phone charger"
];

// Get the HTML elements we need
const checklist = document.getElementById("checklist");
const form = document.getElementById("checklist-form");
const input = document.getElementById("item-input");

// Display all items in the array
function displayItems() {
    // Clear the current list
    checklist.innerHTML = "";

    // Add each item to the list
    checklistItems.forEach(function(item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        checklist.appendChild(listItem);
    });
}

// Handle adding a new checklist item
form.addEventListener("submit", function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    const newItem = input.value.trim();

    // Don't add an empty item
    if (newItem === "") {
        return;
    }

    // Add the new item to the array
    checklistItems.push(newItem);

    // Update the displayed list
    displayItems();

    // Clear the input box
    input.value = "";

    // Put the cursor back in the input box
    input.focus();


});

// Display the default items when the page loads
displayItems();
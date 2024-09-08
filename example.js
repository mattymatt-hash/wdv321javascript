<script>
// Initial data arrays
const teamNames = ["Chiefs", "Raiders", "Cubs"];
const cookies = ["Chocolate Chip Cookie", "Sugar Cookie", "Peanut Butter Cookie"];
const candies = ["M&Ms", "Baby Ruth", "Snickers"];

// Populate the teamNames select element using document.write()
function populateTeamNamesUsingWrite() {
    let options = '<option value="">Select a team</option>';
    for (let name of teamNames) {
        options += `<option value="${name}">${name}</option>`;
    }
    document.write('<script>document.getElementById("teamNames").innerHTML = `' + options + '`;<\/script>');
}

// Populate the productDisplay select element using createElement()
function populateProductsUsingCreateElement() {
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = '<option value="none">Select a Product</option>';

    for (let cookie of cookies) {
        let option = document.createElement('option');
        option.value = cookie;
        option.textContent = cookie;
        productDisplay.appendChild(option);
    }
}

// Update the products based on the selected radio button
function updateProducts() {
    const productDisplay = document.getElementById('productDisplay');
    const selectedProductType = document.querySelector('input[name="chooseProduct"]:checked');

    let productArray = [];
    if (selectedProductType && selectedProductType.id === 'displayCookies') {
        productArray = cookies;
    } else if (selectedProductType && selectedProductType.id === 'displayCandy') {
        productArray = candies;
    }

    productDisplay.innerHTML = '<option value="none">Select a Product</option>';
    for (let product of productArray) {
        let option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        productDisplay.appendChild(option);
    }
}

// Handle team name selection
function handleTeamNameSelection() {
    const teamNamesSelect = document.getElementById('teamNames');
    const outputName = document.getElementById('outputName');

    teamNamesSelect.addEventListener('change', function () {
        outputName.textContent = teamNamesSelect.value;
    });
}

// Handle adding new team name
function handleAddTeamName() {
    const addTeamButton = document.querySelector('input[type="submit"]');
    const newTeamNameInput = document.getElementById('newTeamName');
    const teamNamesSelect = document.getElementById('teamNames');

    addTeamButton.addEventListener('click', function (event) {
        event.preventDefault();
        const newTeamName = newTeamNameInput.value.trim();
        if (newTeamName && !teamNames.includes(newTeamName)) {
            teamNames.push(newTeamName);
            let option = document.createElement('option');
            option.value = newTeamName;
            option.textContent = newTeamName;
            teamNamesSelect.appendChild(option);
            newTeamNameInput.value = ''; // Clear input
        }
    });
}

// Handle product selection
function handleProductSelection() {
    const productDisplay = document.getElementById('productDisplay');
    const outputProduct = document.getElementById('outputProduct');

    productDisplay.addEventListener('change', function () {
        outputProduct.textContent = productDisplay.value;
    });
}

// Reset the form fields
function handleReset() {
    const resetButton = document.querySelector('input[type="reset"]');
    resetButton.addEventListener('click', function () {
        document.getElementById('teamNames').value = '';
        document.getElementById('outputName').textContent = '';
        document.getElementById('productDisplay').value = 'none';
        document.getElementById('outputProduct').textContent = '';
        document.getElementById('displayCookies').checked = false;
        document.getElementById('displayCandy').checked = false;
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function () {
    populateTeamNamesUsingWrite();
    populateProductsUsingCreateElement();
    handleTeamNameSelection();
    handleAddTeamName();
    handleProductSelection();
    handleReset();
    document.querySelectorAll('input[name="chooseProduct"]').forEach(radio => {
        radio.addEventListener('change', updateProducts);
    });
});
</script>

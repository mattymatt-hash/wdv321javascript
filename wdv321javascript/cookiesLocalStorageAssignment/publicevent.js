<script>
     window.onload = function(){ 
        displayTodaysDate(); // Display today's date
        updateHitCounter(); // Update hit counter
        displayCurrentYear(); // Display the current year in the footer
    };

// Function to get a cookie by name
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to increment the page visit count
function incrementPageCount() {
    let visits = getCookie("page_count");
    if (visits) {
        visits = parseInt(visits) + 1;
    } else {
        visits = 1;
    }
    setCookie("page_count", visits, 7); // Cookie expires in 7 days
    return visits;
}

// Display the visit count
document.addEventListener("DOMContentLoaded", () => {
    let visitCount = incrementPageCount();
    document.getElementById("visitCount").innerText = "You have visited this page " + visitCount + " times.";
});



    function displayTodaysDate() {
        let today = new Date();
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        let dayOfWeek = daysOfWeek[today.getDay()];
        let month = monthsOfYear[today.getMonth()];
        let dayOfMonth = today.getDate();
        let year = today.getFullYear();
        
        let formattedDate = dayOfWeek + " " + month + " " + dayOfMonth + ", " + year;
        
        document.getElementById('todaysDate').innerHTML = formattedDate;
    }

    function displayCurrentYear() {
        const year = new Date().getFullYear();
        document.getElementById('currentYear').innerText = year;
    }

    const eventRegistration = {
        registrations: [],

        addRegistration(name, email, phone) {
            const registrationDate = new Date(); // Current date
            const registration = {
                name: name,
                email: email,
                phone: phone,
                registrationDate: registrationDate.toISOString() // Store date in ISO format
            };
            this.registrations.push(registration);
        },

        getRegistrations() {
            return this.registrations;
        }
    };

    // Example usage (you might want to remove or comment this out in production):
    eventRegistration.addRegistration('John Doe', 'john.doe@example.com', '123-456-7890');
    eventRegistration.addRegistration('Jane Smith', 'jane.smith@example.com', '098-765-4321');
    console.log(eventRegistration.getRegistrations());

    function updateHitCounter() {
        // Get the current hit count from cookies
        let hitCount = getCookie('hitCount') || 0;
        hitCount = parseInt(hitCount) + 1; // Increment the count
        setCookie('hitCount', hitCount, 365); // Store it back in a cookie for 1 year

        // Update the display in the footer
        document.querySelector('footer p:nth-of-type(2)').innerText = `Current Activity: ${hitCount}`;
    }

    document.getElementById('eventForm').onsubmit = function (event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('inName').value;
        const email = document.getElementById('inEmail').value;
        const phone = document.getElementById('inPhone').value;
        const date = document.getElementById('inDate').value;

        // Basic email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Add registration to the eventRegistration object
        eventRegistration.addRegistration(name, email, phone);

        // Store the eventRegistration object in local storage
        localStorage.setItem('eventRegistration', JSON.stringify(eventRegistration.getRegistrations()));

        alert("Registration successful!");
        // Reset the form after submission
        event.target.reset();
    };

    function resetFormFields() {
        document.getElementById("eventForm").reset();
    }
</script>

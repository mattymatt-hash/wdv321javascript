<script>
    window.onload = function() { 
        displayTodaysDate(); // Display today's date
        updateHitCounter(); // Update hit counter
        displayCurrentYear(); // Display the current year in the footer
    };
let membersInfo = {
            memberUserNames: [
                "A1D2C4",
                "B2D4C6",
                "B3C2D1"
            ]
        };
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

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
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

        alert('Registration successful!');
        // Reset the form after submission
        event.target.reset();
    };

    function resetFormFields() {
        document.getElementById('eventForm').reset();
    }
</script>

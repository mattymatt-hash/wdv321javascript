 <script>
        // Function to get the value of a cookie by name
        function getCookie(name) {
            let cookieArr = document.cookie.split(";");
            for (let i = 0; i < cookieArr.length; i++) {
                let cookiePair = cookieArr[i].trim();
                if (cookiePair.startsWith(name + "=")) {
                    return cookiePair.split("=")[1];
                }
            }
            return null;
        }

        // Function to set a cookie
        function setCookie(name, value, days) {
            const d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
        }

        function pageSetup() {
            let pageCount = parseInt(getCookie("pageCounter")) || 0;
            pageCount++;
            document.querySelector("#displayCount").innerHTML = pageCount;
            setCookie("pageCounter", pageCount, 3650);
        }

        function displayCurrentYear() {
            const year = new Date().getFullYear();
            document.getElementById("currentYear").textContent = year;
        }

        function resetFormFields() {
            document.getElementById("eventForm").reset(); // Resets all fields in the form
        }

        window.onload = function() {
            pageSetup();
            displayCurrentYear();

            // Toggle the visibility of the sign-in form
            document.getElementById('signInButton').onclick = function() {
                const form = document.getElementById('signInForm');
                form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
            };

            // Handle form submission
            document.getElementById('submitButton').onclick = function(event) {
                event.preventDefault(); // Prevent form submission
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                // Here you can handle the sign-in logic, such as validation or sending to a server
                alert(`Username: ${username}\nPassword: ${password}`); // For demonstration only
            };
        };
        // Show the sign-in form when the button is clicked
    document.getElementById("signInButton").addEventListener("click", function() {
        document.getElementById("signInForm").style.display = "block";
    });

    // Validate the form when submitting
    document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        document.getElementById("usernameError").textContent = "";
        document.getElementById("passwordError").textContent = "";

        let isValid = true;

        // Validate username
        const username = document.getElementById("username").value.trim();
        if (username === "") {
            document.getElementById("usernameError").textContent = "Username is required.";
            isValid = false;
        }

        // Validate password
        const password = document.getElementById("password").value.trim();
        if (password === "") {
            document.getElementById("passwordError").textContent = "Password is required.";
            isValid = false;
        }

        // If valid, display success message (or submit form)
        if (isValid) {
            alert("Sign in successful!");
            // You can proceed with form submission or further logic here
            // e.g., document.getElementById("signInForm").submit(); // Uncomment to submit
        }
    });
        </script>
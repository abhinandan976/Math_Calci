(function() {
    let resultScreen = document.querySelector(".result-screen"); // Reference to the result screen
    let buttons = document.querySelectorAll(".btn"); // Get all calculator buttons
    let equal = document.querySelector(".btn-equal"); // Reference to the equal button
    let clear = document.querySelector(".btn-clear"); // Reference to the clear button
    const toggleButton = document.getElementById("toggle-mode"); // Reference to the toggle mode button
    const body = document.body; // Reference to the body element

    // Ensure the result screen starts empty
    resultScreen.value = '';

    // Handle button clicks
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num; // Get the button's data-num value

            // Check if the value is undefined, don't append if it is
            if (value !== undefined) {
                resultScreen.value += value; // Append valid value to the result screen
            }
        });
    });

    // Handle equal button click (perform calculation)
    equal.addEventListener('click', function() {
        if (resultScreen.value === "") {
            resultScreen.value = "Please enter a number"; // Show message if no input

            // Clear the message after 2 seconds
            setTimeout(() => {
                resultScreen.value = "";
            }, 2000);
        } else {
            try {
                // Replace ^ with ** for exponentiation
                let expression = resultScreen.value.replace(/\^/g, '**');
                let answer = eval(expression); // Calculate result using eval
                resultScreen.value = answer !== undefined ? answer : ""; // Prevent displaying undefined
            } catch (error) {
                resultScreen.value = "Error"; // Display error message
                setTimeout(() => {
                    resultScreen.value = ""; // Clear the error message after 2 seconds
                }, 2000);
            }
        }
    });

    // Handle clear button click (clear screen)
    clear.addEventListener('click', function() {
        resultScreen.value = ""; // Clear the result screen
    });

    // Toggle between dark and light mode
    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            toggleButton.textContent = "Dark Mode"; // Update button text
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            toggleButton.textContent = "Light Mode"; // Update button text
        }
    });
})();

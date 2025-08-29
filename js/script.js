greet();

/// Greet the user
function greet() {
    /// Get the username from the prompt
    let username = prompt("Please enter your name:");

    /// Display the username on the webpage
    document.getElementById('username').innerText = username;
}
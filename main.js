let users = { "admin": "adminpass123" }

let login_form = document.querySelector(".login-form");

function clear_inputs(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    return;
}

login_form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputs = login_form.querySelectorAll("input");
    let username = inputs[0].value;
    let password = inputs[1].value;

    if (!(username in users)) {
        console.log("User does not exist.");
        clear_inputs(inputs)
        return;
    }

    if (password != users[username]) {
        console.log("Invalid password.");
        clear_inputs(inputs)
        return;
    }
    console.log("Logged in!");
    console.log("Hi " + username + "! Your password: " + password);
    clear_inputs(inputs)
});
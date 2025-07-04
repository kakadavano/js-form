const form = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === "" || email.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all feilds";

        setTimeout (() => msg.remove(), 3000);
    } else {
        msg.classList.add("success");
        msg.innerHTML = "Success";

        setTimeout (() => msg.remove(), 3000);

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value}: ${email.value}`));
        ul.appendChild(li);
    }
}
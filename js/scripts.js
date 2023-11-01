window.onload = function () {

    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        let vote = document.getElementById("vote");
        vote.setAttribute("class", "hidden");
        let under21 = document.getElementById("under-21");
        under21.setAttribute("class", "hidden");

        const age = parseInt(document.querySelector("input#age").value);

        if (age > 21) {
            vote.removeAttribute("class");
        } else if (age === 21) {
            window.alert("Have some fun, you are just 21!");
            vote.removeAttribute("class");
        } else {
            under21.removeAttribute("class");
        }

        let submit = document.querySelector("form>button");
        submit.onclick = function () {
            document.body.style.backgroundColor = "green";
        }
    };
};
function showDeveloperInfo(lastName, firstName, position = "Студент") {
    const footer = document.getElementById("dev-footer");
    if (!footer) return;

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.style.letterSpacing = "0.5px";
    });

    const infoText = document.createElement("p");
    const textNode = document.createTextNode(`Розробник: ${lastName} ${firstName} — ${position}`);
    infoText.append(textNode);

    const githubLink = document.createElement("a");
    githubLink.href = "#";
    githubLink.textContent = "GitHub";
    githubLink.onclick = function(event) {
        event.preventDefault();
        window.location.href = "https://github.com/ivan-hrytsenko";
    };

    const tempSpan = document.createElement("span");
    footer.append(tempSpan);

    const separator = document.createElement("span");
    separator.textContent = " | ";

    tempSpan.replaceWith(githubLink);
    githubLink.before(separator);
    footer.prepend(infoText);

    console.log(footer.outerHTML);
}

export { showDeveloperInfo };
function showDeveloperInfo(lastName, firstName, position = "Студент") {
    const footer = document.getElementById("dev-footer");
    if (!footer) return;

    const infoText = document.createElement("p");
    infoText.textContent = `Розробник: ${lastName} ${firstName} — ${position}`;

    const githubLink = document.createElement("a");
    githubLink.textContent = "GitHub";

    githubLink.onclick = function(event) {
        event.preventDefault();
        window.location.href = "https://github.com/ivan-hrytsenko";
    };

    footer.append(infoText, githubLink);
};

export { showDeveloperInfo };
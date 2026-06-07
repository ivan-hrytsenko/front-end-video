function initListHighlight() {
    const lists = document.querySelectorAll("ol, ul");

    lists.forEach(list => {
        list.onclick = function(event) {
            if (event.target.tagName === "LI") {
                event.target.classList.toggle("highlighted");
            }
        };
    });
}

export { initListHighlight };
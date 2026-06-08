function handleHeadingMouseOver(event) {
    event.target.classList.add('heading-highlight');

    console.log(`[mouseover] Курсор увійшов на елемент.`);
    console.log(`-> event.target (де ми зараз):`, event.target);
    console.log(`-> event.relatedTarget (звідки прийшов курсор):`, event.relatedTarget);
    console.log('---');
};

function handleHeadingMouseOut(event) {
    event.target.classList.remove('heading-highlight');

    console.log(`[mouseout] Курсор покинув елемент.`);
    console.log(`-> event.target (що покинули):`, event.target);
    console.log(`-> event.relatedTarget (куди пішов курсор):`, event.relatedTarget);
    console.log('---');
};

function initHeadingHover() {
    const headings = document.querySelectorAll('h1, h2');

    headings.forEach(heading => {
        heading.addEventListener('mouseover', handleHeadingMouseOver);
        heading.addEventListener('mouseout', handleHeadingMouseOut);
    });
}

export { initHeadingHover };
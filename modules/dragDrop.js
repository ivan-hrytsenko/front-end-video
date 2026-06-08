let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let img = null;
let zone = null;

function handleMouseDown(event) {
    isDragging = true;
    img = event.currentTarget;
    zone = img.parentElement;

    const rect = img.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    console.log('[mousedown] План майданчика захоплено');
}

function handleMouseMove(event) {
    if (!isDragging || !img || !zone) return;

    const zoneRect = zone.getBoundingClientRect();
    let newX = event.clientX - zoneRect.left - offsetX;
    let newY = event.clientY - zoneRect.top - offsetY;

    const maxX = zone.clientWidth - img.clientWidth;
    const maxY = zone.clientHeight - img.clientHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    img.style.left = `${newX}px`;
    img.style.top = `${newY}px`;
}

function handleMouseUp() {
    if (isDragging) {
        console.log('[mouseup] План майданчика зафіксовано на новій позиції');
        isDragging = false;
        img = null;
        zone = null;
    }
}

function initDragAndDrop() {
    const mapImg = document.querySelector('.draggable-map');
    if (!mapImg) return;

    mapImg.addEventListener('mousedown', handleMouseDown);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    mapImg.ondragstart = () => false;
}

export { initDragAndDrop };
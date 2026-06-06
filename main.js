import { showDeveloperInfo } from './modules/developer.js';
import { initDialogue } from './modules/dialogue.js';
import { compareStrings } from './modules/compare.js';

showDeveloperInfo("Гриценко", "Іван");
initDialogue();
window.compareStrings = compareStrings;

document.body.style.backgroundColor = "#fff0db";
setTimeout(() => {
    document.body.style.backgroundColor = "#ffffff";
}, 30000);
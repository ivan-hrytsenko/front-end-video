import { showDeveloperInfo } from './modules/developer.js';
import { initDialogue } from './modules/dialogue.js';

showDeveloperInfo("Гриценко", "Іван");
initDialogue();

document.body.style.backgroundColor = "#fff0db";
setTimeout(() => {
    document.body.style.backgroundColor = "#ffffff";
}, 30000);
import { showDeveloperInfo } from './modules/developer.js';

showDeveloperInfo("Гриценко", "Іван");

document.body.style.backgroundColor = "#fff0db";
setTimeout(() => {
    document.body.style.backgroundColor = "#ffffff";
}, 30000);
import { showDeveloperInfo } from './modules/developer.js';
import { initDialogue } from './modules/dialogue.js';
import { compareStrings } from './modules/compare.js';
import { initListHighlight } from './modules/listInteraction.js';

showDeveloperInfo("Гриценко", "Іван");
initDialogue();
initListHighlight();

window.compareStrings = compareStrings;

document.body.style.backgroundColor = "#fff0db";
setTimeout(() => {
    document.body.style.backgroundColor = "#ffffff";
}, 30000);

document.addEventListener('click', function(event) {
    const hasLogBehavior = event.target.closest('[data-behavior="log"]');
    
    if (hasLogBehavior) {
        console.log(`[Поведінка: Глобальний Log] Клікнуто на: <${event.target.tagName.toLowerCase()}> | Текст: "${event.target.textContent.trim()}"`);
    }
});
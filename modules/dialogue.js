const questions = [
    {
        q: "Яку операційну систему ти використовуєш?",
        a: [
            { t: "Windows", p: { premiere: 3, davinci: 2, capcut: 1 } },
            { t: "macOS", p: { fcpx: 4, davinci: 3, premiere: 2 } },
            { t: "Linux", p: { davinci: 4, kdenlive: 5 } }
        ]
    },
    {
        q: "Який тип контенту плануєш монтувати?",
        a: [
            { t: "Короткі відео (TikTok/Reels)", p: { capcut: 5, premiere: 1 } },
            { t: "Складні проєкти / Кіно", p: { davinci: 5, premiere: 4, fcpx: 2 } },
            { t: "Блоги та огляди для YouTube", p: { premiere: 4, fcpx: 4, davinci: 3, capcut: 2 } }
        ]
    },
    {
        q: "Що для тебе найважливіше у роботі?",
        a: [
            { t: "Швидкість та простота ефектів", p: { capcut: 5, fcpx: 3 } },
            { t: "Професійний колір (Color Grading)", p: { davinci: 5 } },
            { t: "Потужна екосистема (з After Effects)", p: { premiere: 5 } }
        ]
    }
];

let step = -1; 
let scores = { premiere: 0, davinci: 0, capcut: 0, fcpx: 0, kdenlive: 0 };
let box;

const results = {
    premiere: ["Adobe Premiere Pro", "Індустріальний стандарт. Має найкращу екосистему та лінк з After Effects."],
    davinci: ["DaVinci Resolve", "Король кіноіндустрії та кольору. Безкоштовна версія має шалений функціонал."],
    capcut: ["CapCut Desktop", "Ідеально для швидких TikTok/Reels та трендових ефектів в один клік."],
    fcpx: ["Final Cut Pro X", "Оскільки ти на macOS — це ультимативна швидкість роботи та рендеру."],
    kdenlive: ["Kdenlive", "Потужний безкоштовний софт із відкритим кодом. Найкращий вибір для Linux."]
};

//////////////////////////////////////////////////

function render() {
    if (step === -1) {
        box.innerHTML = `
            <p>Привіт! Хочеш підібрати ідеальний софт для відеомонтажу?</p>
            <button id="start">Так!</button>
            <button id="close">Ні, дякую</button>
        `;
        return;
    };
    if (step < questions.length) {
        const current = questions[step];
        let html = `<p>${current.q}</p>`;
        for (let i = 0; i < current.a.length; i++) {
            html += `<button class="ans" data-idx="${i}">${current.a[i].t}</button>`;
        }
        box.innerHTML = html;
        return;
    };

    let max = -1, winner = '';
    for (const key in scores) {
        if (scores[key] > max) {
            max = scores[key];
            winner = key;
        }
    }
    box.innerHTML = `
        <h3>Твій вердикт: ${results[winner][0]}</h3>
        <p>${results[winner][1]}</p>
        <button id="reset">Пройти знову</button>
        <button id="close">Закрити</button>
    `;
};

function handleMouseClick(event) {
    if (event.target.classList.contains('ans')) {
            const idx = event.target.dataset.idx;
            const points = questions[step].a[idx].p;
            for (const key in points) {
                scores[key] += points[key];
            }
            step++;
            render();
            return;
    };
    switch (event.target.id) {
        case 'start':
            step = 0;
            render();
            break;
        case 'close':
            box.style.display = 'none';
            break;
        case 'reset':
            step = 0;
            for (const key in scores) scores[key] = 0;
            render();
            break;
    }
};

function initDialogue() {
    box = document.getElementById('dialogue-box');
    if (!box) return;

    box.addEventListener('click', handleMouseClick) 
    render();
};

export { initDialogue };
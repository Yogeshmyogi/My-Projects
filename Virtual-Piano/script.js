const sounds = {
    C: new Audio("https://www.soundjay.com/button/sounds/button-1.mp3"),
    D: new Audio("https://www.soundjay.com/button/sounds/button-2.mp3"),
    E: new Audio("https://www.soundjay.com/button/sounds/button-3.mp3"),
    F: new Audio("https://www.soundjay.com/button/sounds/button-4.mp3"),
    G: new Audio("https://www.soundjay.com/button/sounds/button-5.mp3")
};

document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", () => {
        let note = key.dataset.note;
        sounds[note].play();
    });
});

document.addEventListener("keydown", (e) => {
    const map = {
        a: "C",
        s: "D",
        d: "E",
        f: "F",
        g: "G"
    };

    let note = map[e.key];

    if (note) {
        sounds[note].play();
    }
});

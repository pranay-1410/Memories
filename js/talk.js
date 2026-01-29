new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1500,
        speed: 100
    })
    .type("FROM YAYA TO GOLU")
    .pause(2000)
    .delete(null, {
        delay: 300
    })
    .type("HAPPY 20TH BIRTHDAY")
    .pause(3000)
    .delete(null, {
        delay: 300
    })
    .type("SCROLL DOWN")
    .pause(3000)
    .go();


new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 300,
    waitUntilVisible: true,
    speed: 50
}).go();
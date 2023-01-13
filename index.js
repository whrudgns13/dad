"use strict";
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("dragstart", () => {
        card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
    });
    card.addEventListener("dragover", (e) => {
        e.preventDefault();
        const drag = document.querySelector(".dragging");
        //들고있는 인덱스
        const dragIndex = findChildIndex(drag);
        const dragOver = e.target;
        if (!dragOver)
            return;
        //놓는요소 인덱스
        const overIndex = findChildIndex(dragOver);
        if (overIndex === -1)
            return;
        overIndex > dragIndex ? dragOver.after(drag) : drag.after(dragOver);
    });
    // card.addEventListener("drop", (e) => {
    //     e.preventDefault();
    // })
});
const findChildIndex = (element) => {
    const cards = document.querySelectorAll(".card");
    return Array.from(cards).findIndex(card => card === element);
};

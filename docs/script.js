const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Te amo, mi Cielo <3";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {

    const randomX = Math.floor(getRandomNumber(0, 75));
    const randomY = Math.floor(getRandomNumber(-900, 300));

    noBtn.style.left = randomX + "%";
    noBtn.style.top = randomY + "%";
});


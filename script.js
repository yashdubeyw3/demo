const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const chaticon = document.querySelector(".chat-icon");
const chatbot = document.querySelector(".chat-bot");
const chatbotmark = document.querySelector(".chatbot-mark");
const chatwindow = document.querySelector(".chat-window");
const input = document.querySelector(".chat-message");
const navbar = document.querySelector("nav");
const sendbutton = document.querySelector(".sendbutton");

function solve() {
    let newdiv = document.createElement("div");
    newdiv.textContent = `${input.value}`;
    newdiv.classList.add("message");
    let html = `<i class="fa-solid fa-user user-icon"></i>`;
    newdiv.insertAdjacentHTML("afterbegin" , html);
    chatwindow.appendChild(newdiv);
    chatwindow.scrollTop = chatwindow.scrollHeight; 

    setTimeout(() => {
        let answer = document.createElement("div");
        answer.textContent = "Hello how can i help you";
        answer.classList.add("answer");
        let html = `<i class="fa-solid fa-headset bot-icon"></i>`;
        answer.insertAdjacentHTML("afterbegin" , html);
        chatwindow.appendChild(answer);
        chatwindow.scrollTop = chatwindow.scrollHeight;
    } , 1000);
}

hamburger.addEventListener("click" , (e) => {
    navlinks.classList.toggle('active');
});

chaticon.addEventListener("click" , (e) => {
    navbar.style.backgroundColor = "rgb(255, 255, 255 , 0)"
    navbar.style.zIndex = -10;
    chatbot.classList.toggle('isactive');
});

chatbotmark.addEventListener("click" , (e) => {
    navbar.style.backgroundColor = "rgb(255, 255, 255)"
    navbar.style.zIndex = 0;
    chatbot.classList.toggle('isactive')
});

let answer = document.createElement("div");
answer.textContent = "Hello how can i help you";
answer.classList.add("answer");
let html = `<i class="fa-solid fa-headset bot-icon"></i>`;
answer.insertAdjacentHTML("afterbegin" , html);
chatwindow.appendChild(answer);

window.addEventListener("keypress" , (e) => {
    if(e.key === 'Enter') {
        solve();
    }
});

sendbutton.addEventListener("click" , (e) => {
    solve();
});
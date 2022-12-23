const popup = document.querySelector(".chat-popup");
const chatBtn = document.querySelector(".chat-btn");
const submitBtn = document.querySelector(".submit");
const chatArea = document.querySelector(".chat-area");
const inputElm = document.querySelector("#chat-input");
const emojiBtn = document.querySelector("#emoji-btn");
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener("DOMContentLoaded", () => {//在 ES6 版本之前的 JavaScript 是沒有箭頭函式可以用的，僅有最基本的一般函式。=>箭頭函式（Arrow Function）使用起來更為簡潔

    picker.on("emoji", emoji => {
      inputElm.value += emoji;
    });
  
    emojiBtn.addEventListener("click", () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener("click", ()=>{
    popup.classList.toggle("show");
})

// send msg 
submitBtn.addEventListener("click", ()=>{
    let userInput = inputElm.value;
    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="images/chat-me.png" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = "";

})
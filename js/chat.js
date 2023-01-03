// 這邊在做選擇器的指定
const popup = document.querySelector(".chat-popup");
const chatBtn = document.querySelector(".chat-btn");
const submitBtn = document.querySelector(".submit");
const chatArea = document.querySelector(".chat-area");
const inputElm = document.querySelector("#chat-input");
const emojiBtn = document.querySelector("#emoji-btn");
// 這個外部元件 表情按鈕的填入
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener("DOMContentLoaded", () => {//在 ES6 版本之前的 JavaScript 是沒有箭頭函式可以用的，僅有最基本的一般函式。=>箭頭函式（Arrow Function）使用起來更為簡潔

  // 這邊是如果他按了表情，就把表情放到input的輸入框裡面
  picker.on("emoji", emoji => {
    inputElm.value += emoji;
  });

  // 這個是click的事件 要看 picker的原碼才知道togglePicker在做什麼 這個-> <script src="https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@3.1.1/dist/index.min.js"></script>
  // 但因為他是min的檔案 要解析要花很多時間 所以直接上網找文檔比較快
  emojiBtn.addEventListener("click", () => {
    picker.togglePicker(emojiBtn);
  });
});

//   chat button toggler 
// 這邊在做的事情是 點一下右下角的那個聊天圖示 會顯示聊天框
chatBtn.addEventListener("click", () => {
  popup.classList.toggle("show");
})

// send msg 
// 這邊就是送出訊息的按鈕
submitBtn.addEventListener("click", () => {

  // 把你輸入的東西記錄起來
  let userInput = inputElm.value;

  // 文字的外圍 文字被包覆起來的那個圈圈 (Hi, How can I help you?) 那個底色的那個

  // 45行 userInput就是你剛剛紀錄的文字
  // 46行 這是你右邊的那個頭像
  let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>   
    <img src="images/chat-me.png" class="avatar">
    </div>`;
  // 然後把剛剛寫好的HTML 正式渲染到瀏覽器
  chatArea.insertAdjacentHTML("beforeend", temp);
  // 再把文字框清除
  inputElm.value = "";

})
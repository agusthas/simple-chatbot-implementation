const chatBoxMessages = document.querySelector(".chatbot-messages");
const userSend = sendMessage(chatBoxMessages, "user");
const botSend = sendMessage(chatBoxMessages, "chatbot");

botSend("Hi 👋. I am here to help you");
/**
 *
 * @param {String} inputValue
 */
const output = (inputValue) => {
  let result;

  // Sanitize inputs
  let str = inputValue
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/[\d]/gi, "")
    .trim();
  str = str
    .replace(/ a /g, " ")
    .replace(/i feel/g, " ")
    .replace(/whats/g, "what is")
    .replace(/wheres/g, "where is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (str.match(/thank/gi)) {
    result = "You're welcome!";
  } else {
    result = getReply(str);
  }

  return result;
};

const chatbotForm = document.querySelector(".chatbot-form");

chatbotForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputTag = chatbotForm.querySelector(".chatbot-input");
  const inputValue = inputTag.value;

  userSend(inputValue);
  botSend("Thinking...");
  setTimeout(() => {
    chatBoxMessages.removeChild(chatBoxMessages.lastElementChild);
    botSend(output(inputValue));
  }, 1000);
  inputTag.value = "";
});

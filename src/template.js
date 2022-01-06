/**
 * Create a message HTML template
 * @param {('user'|'chatbot')} type - From whom the message is
 * @returns string
 */
const createMessageTemplate = (type) => {
  const align = type == "chatbot" ? "start" : "end";
  const img = type == "chatbot" ? "assets/bot-mini.png" : "assets/user.png";
  const sender = type == "chatbot" ? "Chatbot" : "Me";
  return (content) => {
    const time = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return `
  <div class="message self-${align}">
    <div class="message-header">
      <div class="message-user">
        <img class="message-icon" src="${img}" alt="" />
        <span class="message-sender">${sender}</span>
      </div>
    </div>
    <div class="message-wrapper">
      <div class="message-content ${type === "user" && "user"}">${content}</div>
      <div class="message-time">${time}</div>
    </div>
  </div>
  `;
  };
};

/**
 * Append message to parent element
 * @param {HTMLDivElement} parentElement
 * @param {('user'|'chatbot')} type - From whom the message is
 * @returns { (content:string) => void }
 */
const sendMessage = (parentElement, type) => {
  return (content) => {
    parentElement.insertAdjacentHTML(
      "beforeend",
      createMessageTemplate(type)(content)
    );
  };
};

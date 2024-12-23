// References to chat box and input field
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');

function sendMessage() {
  // Get the message from the input field
  const message = chatInput.value.trim();

  // If the input is empty, don't proceed
  if (!message) return;

  // Append user's message to the chat box
  const userMessage = document.createElement('div');
  userMessage.className = 'message user';
  userMessage.textContent = message;
  chatBox.appendChild(userMessage);

  // Scroll chat box to the bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear the input field
  chatInput.value = '';

  // Simulate a bot response after 1 second
  setTimeout(() => {
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = 'Thank you for reaching out, Raghava will get back to you soon!';
    chatBox.appendChild(botMessage);

    // Scroll chat box to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

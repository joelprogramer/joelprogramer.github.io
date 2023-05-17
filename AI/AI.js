document.addEventListener("DOMContentLoaded", function() {
    var chatLog = document.getElementById("chat-log");
    var userMessage = document.getElementById("user-message");
    var sendButton = document.getElementById("send-btn");

    // Event listener for send button
    sendButton.addEventListener("click", function() {
        var userInput = userMessage.value.trim();
        if (userInput !== "") {
            appendMessage("User", userInput);
            userMessage.value = "";
            handleUserInput(userInput);
        }
    });

    // Event listener for enter key press
    userMessage.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            sendButton.click();
        }
    });

    // Function to append a new message to the chat log
    function appendMessage(sender, message) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add(sender.toLowerCase());
        messageElement.textContent = sender + ": " + message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    // Function to handle user input and AI response
    function handleUserInput(userInput) {
        var Max_the_AIResponse = getMax_the_AIResponse(userInput);
        appendMessage("Max_the_AI", Max_the_AIResponse);
    }

    // Function to get AI response (dummy implementation)
    function getMax_the_AIResponse(userInput) {
        // You would typically send a request to your AI backend here to get the response
        // For this example, we will use a dummy response
        return "hello I am an dummy AI: " + userInput;
    }
});

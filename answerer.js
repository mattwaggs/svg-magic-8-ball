// State variables 
var questionTimer = null;

function setupAnswerListener() {
    var form = document.getElementById("answer-form");
    var answer = document.getElementById("answer");
    var question = document.getElementById("question");

    var socket = initSocket("answerer");
    
    answer.focus();

    form.onsubmit = function(e) {
        e.preventDefault(); // don't go anywhere
        if (!answer.value.trim()) return;

        var fullAnswer = answer.value.trim();
        answer.value = '';
        question.className = 'answered';

        console.log("answer: ", fullAnswer);
        socket.answerQuestion(fullAnswer);
        clearTimeout(questionTimer);
    }
}

// Required by our websocket framework
function onQuestion(question) {
    clearTimeout(questionTimer);

    var questionEl = document.getElementById("question");

    // Danger: People can use XSS to get by our restrictions, so we'll try and sanitize the question
    question = escapeHtml(question);
    
    questionEl.innerHTML = question;
    questionEl.className = '';
    console.log("question: ", question);

    questionTimer = setTimeout(function() {
        questionEl.className = 'timeout';
    }, 15000); // We just kinda assume you have 15 seconds
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

$(function() {
    // On load, set everything up
    setupAnswerListener();
});
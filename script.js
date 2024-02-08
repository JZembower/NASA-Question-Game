document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What type of galaxies are the Antennae Galaxies?",
            options: ["Spiral", "Elliptical", "Interacting", "Irregular"],
            correct_answer: "Interacting"
        },
        // Add more questions here
    ];

    let currentQuestionIndex = 0;

    function displayQuestion() {
        // Display the current question and options
        const question = questions[currentQuestionIndex];
        document.getElementById('question').textContent = question.question;
        // Update options
        question.options.forEach((option, index) => {
            document.getElementById(`option${index + 1}`).value = option;
            document.querySelector(`label[for=option${index + 1}]`).textContent = option;
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        // Move to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            alert('Quiz finished!');
            // Show results or reset quiz here
        }
    });

    // Initialize the first question
    displayQuestion();
});

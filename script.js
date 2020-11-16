const quizData = [
    {
        question: 'Quem descobriu o Brasil?',
        a: 'Pedro Alvarez Cabral', 
        b: 'Bolsonaro',
        c: 'Estevito',
        d: 'Nenhuma das alternativas',
        correct: 'a'
    }, 
    {
        question: 'Quem é o atual presidente do Brasil?',
        a: 'Pedro Alvarez Cabral', 
        b: 'Bolsonaro',
        c: 'Estevito',
        d: 'Nenhuma das alternativas',
        correct: 'b'
    }, 
    {
        question: 'Quem veio primeiro, o ovo ou a galinha',
        a: 'O ovo', 
        b: 'A galinha',
        c: 'Nenhum dos dois',
        d: 'Tenho dúvida',
        correct: 'd'
    }, 
    {
        question: 'Quem é o presidente dos Estados Unidos?',
        a: 'Pato Donald', 
        b: 'Bolsonaro',
        c: 'Donald Trump',
        d: 'Nenhuma das alternativas',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answerEl  = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEl.forEach((answerEl) => {
    answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //checagem da resposta
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO: mostre resultados
        alert("Parabéns! Você concluiu o Quiz! Tome uma limonada e tente novamente.");
        quiz.innerHTML = `<h2>Você acertou corretamente ${score} de ${quizData.length} questões!</h2>`;
    }
});


const quizData = [
    {
        question: "Teleminora uzunligi?",
        a: "320",
        b: "348",
        c: "350",
        d: "375",
        correct: "d",
    },
    {
        question: "JavaScript qaysi yili yaralgan?",
        a: "1994",
        b: "1995",
        c: "1996",
        d: "1997",
        correct: "b",
    },
    {
        question: "HTML to'liq nomi?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "O'zbekiston Poytaxti qayer?",
        a: "Samarqand",
        b: "Toshkent",
        c: "Buxoro",
        d: "Andijon",
        correct: "b",
    },
    {
        question: "CSS to'liq nomi?",
        a: "Cascading Style Sheets",
        b: "Codes Style Sheets",
        c: "Cascading System Sheets",
        d: "Cascading Script Sheets",
        correct: "a",
    },
    {
        question: "Telegram asoschisi kim?",
        a: "Zuckerberg",
        b: "Steve Jobs",
        c: "Pavel Durov",
        d: "Elon Musk",
        correct: "c",
    },
    {
        question: "Internet nima?",
        a: "Havo",
        b: "Sim",
        c: "Suniy yo'ldosh",
        d: "Sputnik",
        correct: "b",
    },
    {
        question: "Ronaldo qaysi jamoa hujumchisi?",
        a: "Juventus",
        b: "Real Madrid",
        c: "Barcelona",
        d: "Manchester United",
        correct: "d",
    },
    {
        question: "Messi qayerda tug'ilgan?",
        a: "Ispaniya",
        b: "Portugaliya",
        c: "Angliya",
        d: "Argentina",
        correct: "d",
    }


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
    
console.log(answer)
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your answered ${score}/${quizData.length} questions correctly</h2>
           <h1> <center>${(score / quizData.length * 100).toFixed(0)} %</center></h1>
           <button class="btn"><a href="index.html">Restart</a></button>
           `
       }
    }
})
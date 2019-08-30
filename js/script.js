const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreContainer = document.getElementById('score-container')

let shuffledQuestions, currentQuestionIndex
var scoreValue

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame(){
  scoreContainer.classList.add('hide')
  startButton.classList.add('hide')
  questions.forEach(question => {
    question.answers.forEach(answer => {
      var ans
      if (!answer.correct){
        do {
          ans = answers[Math.floor(Math.random()*answers.length)]
        }
        while(isDuplicated(question, ans))
        answer.text = ans
      }
    })
    console.log(shuffleArray(question.answers))
  })
  shuffledQuestions = shuffleArray(questions)
  // console.log(shuffledQuestions)
  currentQuestionIndex = 0
  scoreValue = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function isDuplicated(question, ans)  {
  var exist = false
  question.answers.forEach(answer => {
    if (answer.text === ans){
      exist = true
    }
  })
  return exist
}

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  // console.log(score)
}

function showQuestion(question) {
  // questionElement.innerText = question.question
  questionElement.src = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct){
    scoreValue++
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  }else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    scoreContainer.classList.remove('hide')
    const paragraph = document.getElementById('score')
    paragraph.innerText = 'SCORE : ' + scoreValue
    // paragraph.appendChild(document.createTextNode('SCORE: ' + scoreValue))
  }
}

function setStatusClass (element, correct) {
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  }else{
    element.classList.add('wrong')
  }
}

function clearStatusClass (element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const answers =[
  'Australian GP',
  'Bahrain GP',
  'Chinese GP',
  'Azerbaijan GP',
  'Spanish GP',
  'Monaco GP',
  'Canadian GP',
  'French GP',
  'Austrian GP',
  'British GP',
  'German GP',
  'Hungarian GP',
  'Belgian GP',
  'Italian GP',
  'Singapore GP',
  'Russian GP',
  'Japanese GP',
  'Mexican GP',
  'United States GP',
  'Brazilian GP',
  'Abu Dhabi GP'
]

const questions = [
  {
    question: 'gp/2014_Interlagos_circuit_map.svg',
    answers: [
      { text: 'Brazilian GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Albert_Lake_Park_Street_Circuit_in_Melbourne,_Australia.svg',
    answers: [
      { text: 'Australian GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Austin_circuit.svg',
    answers: [
      { text: 'United States GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Autódromo_Hermanos_Rodríguez_2015.svg',
    answers: [
      { text: 'Mexican GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Bahrain_International_Circuit--Grand_Prix_Layout.svg',
    answers: [
      { text: 'Bahrain GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Circuit_Gilles_Villeneuve.svg',
    answers: [
      { text: 'Canadian GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Circuit_Red_Bull_Ring.svg',
    answers: [
      { text: 'Austrian GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Circuit_Silverstone_2011.svg',
    answers: [
      { text: 'British GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Circuit_Sochi.svg',
    answers: [
      { text: 'Russian GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Circuit_Yas-Island.svg',
    answers: [
      { text: 'Abu Dhabi GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Circut_Paul_Ricard_2018_layout_map.svg',
    answers: [
      { text: 'French GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Formula1_Circuit_Baku.svg',
    answers: [
      { text: 'Azerbaijan GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Formula1_Circuit_Catalunya.svg',
    answers: [
      { text: 'Spanish GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Hockenheim2012.svg',
    answers: [
      { text: 'German GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Hungaroring.svg',
    answers: [
      { text: 'Hungarian GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Monte_Carlo_Formula_1_track_map.svg',
    answers: [
      { text: 'Monaco GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Monza_track_map.svg',
    answers: [
      { text: 'Italian GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Shanghai_International_Racing_Circuit_track_map.svg',
    answers: [
      { text: 'Chinese GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Singapore_Street_Circuit_2015.svg',
    answers: [
      { text: 'Singapore GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Spa-Francorchamps_of_Belgium.svg',
    answers: [
      { text: 'Belgian GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'gp/Suzuka_circuit_map--2005.svg',
    answers: [
      { text: 'Japanese GP', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
]

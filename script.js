 const startButton = document.getElementById('start-btn')
 const startButton = document.getElementById('next-btn')
const questionContainerElement= document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffledQuestions, currentQuestionIndex


 startButton.addEventListener('click, startGame')
 nextButton.addEventListener('click',startGame)
    currentQuestionsIndex++
    setNextQuestion()
})

 function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions= questions,sort(()) => Math.random()-.5)
    currentQuestionIndex = 0
    questionContainerElement.classList,remove('hide')
    setNextQuestion()



    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
 }

 function setNextQuestion() {
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(questions)  {
   questionContainerElement.innerText= question.question
   question.answers.for each(answer=> {
      constbutton=document.createElement('button')
      Button.innerText=answer.text
      button.classlist.add('btn')
      if (answer.corect) {
        button.dataset.correct=answer.correct
      }
      button.addEventListener('click,'selectAnswer)
      answerButtonElement.appendChild(button)
    })
 }

 function resetState(){
   nextButton.classList.add('hide')
   while (answerButtonsElement.firstChild) {
     answerButtonElement.removeChild
     (answerButtonElement.firstChild)
   }
 }

 function selectAnswer(e) {
   const selectedButton = e.target
   const correct = selectButton.dataset.correct
   setStatusClass(documentbody, correct)
   Array.from(answerButtonsElement.children).forEach(button => {
     setStatusClass(button,button.dataset.correct)
     Array.from(answerButtonsElement.children) .forEeach(button => {
       setStatusClass(button,button.dataset.correct)
     })
    if (shuffledQuestions.lenghth > currentQuestionIndex  + 1)
   nextButton.classList.remove('hide')
    } else{
      startButton.innerText= 'Restart'
      startButton.classList.remove('hide')
    }
 }



 function setStatusClass(element, correct)
   clearStatusClass(element)
   if (correct)  {
     element.classList.add('correct')
   } else {
    element.classlist.add('wrong')
   }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

 const questions = [
   {

   
 }

 }

 function selectAnswer() {

 }

 const questions = [
    {
      question: 'What is 2+2',
      answers: [
        { text: '4',correct: true},
        { text:'22', correct: false}
      ]
    }
 ]

 








      

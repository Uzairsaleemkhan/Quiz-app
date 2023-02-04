import Question from "./Question.js";
import Quiz from "./Quiz.js";
// let q1=new Question("what is 3+1?",[2,4,1,3],1)
// let q2=new Question("what is 3+2?",[2,4,5,3],2)
// let q3=new Question("what is 3+5?",[2,4,8,3],2)
// let q4=new Question("what is 3+4?",[2,4,7,3],2)
// let q5=new Question("what is 3+6?",[2,9,1,3],1)
// let q6=new Question("what is 3+7?",[2,10,1,3],1)
// let q7=new Question("what is 13+3?",[2,10,16,3],2)

// let qArr=[q1,q2,q3,q4,q5,q6,q7]

// let myQuiz=new Quiz(qArr)
// console.log(myQuiz.currentQuestion())

const App=(function(){
const quizEl=document.querySelector(".jabquiz")
const quizQuestionEl=document.querySelector(".jabquiz__question");
const trackerEl=document.querySelector(".jabquiz__tracker");
const taglineEl=document.querySelector(".jabquiz__tagline");
const choicesEl=document.querySelector(".jabquiz__choices");
const progressInnerEl=document.querySelector(".progress__inner");
const nextButtonEl=document.querySelector(".next");
const restartButtonEl=document.querySelector(".restart");
console.log(quizEl)


const q1= new Question("Who was the first president of US?",
["Osama","Barrack","George","Joe Biden"],2)

const q2= new Question("When was Javascript created?",
["June 1995","May 1995","July 1884","April 1999"],
1)


const q3= new Question("What does CSS stand for?",
["County Sheriff Service","Cascading Style Sheet","Cattle Style Sauce","Cat Snack Sheet"],
1)

const q4= new Question("The full form of HTML is ",
["Hyper Text Markup Language","Hold the mic","Error","error of Error"],0)

const q5 = new Question("console.log(typeof []) would return what?",["Array","Object","null","array"],1)
const quiz= new Quiz([q1,q2,q3,q4,q5])

const setValue=(elem,value)=>{
    elem.innerHTML=value
}
const renderQuestion=_=>{
const question=quiz.currentQuestion().question
setValue(quizQuestionEl,question)
}


const renderChoicesEl=_=>{
const choices=quiz.currentQuestion().choices
console.log(choices)
let markup=""
choices.forEach((item,index)=>{
markup+=`
<li class="jabquiz__choice">
<input type="radio" name="choice" id="choice${index}" class="jabquiz__input">
<label for="choice${index}" class="jabquiz__label">
    <i class="fa-sharp fa-solid fa-check jabquiz__label__i"></i>
    ${item}
</label>
</li>
`

})
setValue(choicesEl,markup)

}

const renderTracker=_=>{
const currentIndex= quiz.currentIndex   
const all=quiz.questions.length
setValue(trackerEl,`${currentIndex+1} of ${all}`)
}
const renderProgress=_=>{
    
}

const renderAll=_=>{
    if (quiz.hasEnded()){
        // render the endscreen
    }
    else{
        // render the question
        renderQuestion() 
        // render the choices
        renderChoicesEl()
        // render tracker
        renderTracker()
    }
}
return{renderAll: renderAll}

})()


App.renderAll()


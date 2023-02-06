import Question from "./Question.js";
import Quiz from "./Quiz.js";






const App=(function(){

const quizEl=document.querySelector(".jabquiz")

const quizQuestionEl=document.querySelector(".jabquiz__question");
const trackerEl=document.querySelector(".jabquiz__tracker");
const taglineEl=document.querySelector(".jabquiz__tagline");
const choicesEl=document.querySelector(".jabquiz__choices");
const progressInnerEl=document.querySelector(".progress__inner");
const nextButtonEl=document.querySelector(".next");
const restartButtonEl=document.querySelector(".restart");


const listener=function(){
    nextButtonEl.addEventListener("click",()=>{

const checked = document.querySelector('input[name="choice"]:checked')

if(checked){
    const key=Number(checked.getAttribute("data"))
    quiz.userKey(key)
    renderAll()
}
}
)
restartButtonEl.addEventListener("click",()=>
{    
    
    quiz.currentIndex=0;
    quiz.score=0;
    nextButtonEl.style.opacity=1
    renderAll()
    setValue(taglineEl,"Pick an option below.")
}   )
}


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

const q5 = new Question("console.log(typeof []) would return what?",
["Array","Object","null","array"],1)


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
<input type="radio" name="choice" data=${index} id="choice${index}" class="jabquiz__input">
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



const getPercentage=function(num1,num2){
return Math.round((num1/num2)*100);
}
const launch=(width,maxPercent)=>{
    let loadingBar=setInterval(()=>{
                      if(width>maxPercent){
                        clearInterval(loadingBar)
                      }      else{
                        width++
                        progressInnerEl.style.width=width+"%"
                      }
    },3)
}
const renderProgress=_=>{
const currentWidth = getPercentage(quiz.currentIndex,quiz.questions.length)
console.log(currentWidth)
launch(0,currentWidth)
// progressInnerEl.style.width=currentWidth+"%"
}
const endScreen=_=>{
    setValue(quizQuestionEl,"Great Job!")
    setValue(taglineEl,"Complete!")
    setValue(trackerEl,`Your score:${getPercentage(quiz.score,quiz.questions.length)} %`)
   nextButtonEl.style.opacity=0;
   renderProgress()
} 
const renderAll=_=>{
    if (quiz.hasEnded()){
        // render the endscreen
        endScreen()
    }
    else{
        // render the question
        renderQuestion() 
        // render the choices
        renderChoicesEl()
        // render tracker
        renderTracker()
        // render progress
        renderProgress()
    }
}
return{
    renderAll: renderAll,
    listener:listener
    }

})()


App.renderAll()
App.listener()


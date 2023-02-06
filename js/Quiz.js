export default function Quiz (questions){
this.questions=questions;
this.currentIndex=0;
this.score=0;
}


Quiz.prototype.changeIndex=function(){
    this.currentIndex++
}

Quiz.prototype.currentQuestion=function(){
return this.questions[this.currentIndex]
}

Quiz.prototype.userKey=function(userKey){
  if(this.questions[this.currentIndex].isCorrect(userKey)){
    this.score++
    
  }

  this.changeIndex()
}
Quiz.prototype.hasEnded=function(){
    return this.currentIndex===this.questions.length
}

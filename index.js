function renderQuiz(bool=false){
    //if false, startscreen
    //if true, updateQuiz
}

function startScreen(){
    //set all integer variables to zero (question,incorrect,rand)
    //display everything below banner to none, only display start message
    // and button to start which will call "renderQuiz(true)"
}

function updateQuiz(){
    //update integer variables
    //update screen messages (question,score,'.question-block','span')
}

function submit(){
    //when submit is clicked this will execute and 
    //if question is less than 10, it will call renderQuiz
    //if not, it will call quizEnd()
}

function displayResult(bool=false){
//if false (incorrect) then display answer and next button
//if true (correct) then display congrats and next button
}

function quizEnd(){
    //quiz is over display short message portraying 
    //how good or bad they did AND button to restart aka renderQuiz(false)
}

//call renderquiz to start, without passing any value to it, it will default 
//to false and display start screen.
//$( renderQuiz() )
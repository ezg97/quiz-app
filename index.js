// Elijah Guerrero, quiz app: Unkown facts.
// DATA
const QA = [
    {
        question: "A civil law suit brought fourth by the family of Martin Luthor King Jr. found ___ to be a involved in his assisnation?",
        answers: ['A hate group in America',
        'James Earl Ray',
        'The United States federal government',
        'A Russian spy'],
        correct_answer: 2,
        img:'http://www.scholastic.com/content/images/articles/sn_ts/sn_ts_011210_hdr.jpg',
    },
    {
        question: "Which of the following is true about Adolf Hitler?",
        answers: ['He died before world war 2 ended',
        'He committed suicide once he realized he had lost the war',
        'He escaped to Antartica',
        'He escaped to Argentina'],
        correct_answer: 3,
        img:'https://ichef.bbci.co.uk/news/976/cpsprodpb/C892/production/_107264315_d-daylandings.jpg',
    },
    {
        question: "How many buildings fell in new york on September 9, 2001 (9/11)?",
        answers: ['1',
        '2',
        '3',
        '4'],
        correct_answer: 2,
        img:'https://amp.businessinsider.com/images/55f3279fbd86ef13008b9cbd-640-480.jpg',
    },
    {
        question: "The United States of America's Congress passed a constitutional ammendment that made what legal?",
        answers: ['Abortion',
        'Slavery',
        'Treason',
        'Genocide'],
        correct_answer: 1,
        img:'https://www.lawliberty.org/wp-content/uploads/2018/06/We-the-People-768x384.jpg',
    },
    {
        question: "Prescott Bush, the father of former president George H.W. Bush and grandfather of former president George W. Bush, was:",
        answers: ['The first man to fly an airplan',
        'Implicated in a coup to overthrow a sitting president of the United States of America (FDR) and supported Hitler and Mussolini',
        'The strategist that planed the attack on D Day',
        'Was formerly a resident of Kazakhstan, ran for president there and lost, then imigratted to America'],
        correct_answer: 1,
        img:'https://upload.wikimedia.org/wikipedia/commons/0/09/George_H._W._Bush_inauguration.jpg',
    },
    {
        question: "What American president flew on a private jet, called the \"lolita express\", 26 times which was owned by child sex trafficer Jeff Epstein",
        answers: ['Bill Clinton',
        'George W. Bush',
        'Barack Hussein Obama',
        'Donald J. Trump'],
        correct_answer: 0,
        img:'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/iol/2018/12/05/18397690/218-12-5T16635Z_874113619_RC15CF4CD3_RTRMADP_3_PEOPLE-BUSH.JPG',
    },
    {
        question: "In the United States, how long has blue denoted the left and red denoted the right?",
        answers: ['From the time that parties were given colors',
        'Begining at the civil war',
        'After World War 1',
        'Since the year 2000'],
        correct_answer: 3,
        img:'http://historynet.com/wp-content/uploads/image/2012/ACWP/2012%2007/Lead%20for%20Honor.jpg',
    },
    {
        question: "What former American president distinctly ignored Supreme Court ruling?",
        answers: ['George Washington',
        'Andrew Jackson',
        'Abraham Lincoln',
        'John F. Kenedy'],
        correct_answer: 2,
        img:'https://www.gannett-cdn.com/presto/2019/06/27/PDTF/a64a9823-e560-47ca-82e3-e7efea43e42b-GTY_AFP_1HW8V6.jpg?width=540&height=&fit=bounds&auto=webp',
    },
    {
        question: "The man who who shot and attempted to assisanate President Ronald Regan was?",
        answers: ['An FBI agent',
        'A Russian spy',
        'An escaped convict',
        'A family friend of Ronald Regan\'s vice president, George H.W. Bush'],
        correct_answer: 3,
        img:'https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2015/06/ronald-reagan-example-2.jpg?fit=788%2C460&ssl=1',
    },
    {
        question: "In the first half of the 1900s, the US government",
        answers: ['Poisoned alchohol in hopes to decrease the desire of its consumption, but ultimately failed and ended up killing thousands of Americans',
        'Bandded all foreign music',
        'Passed a law making all selling of cigerates under a bridge punishable by death',
        'Made Tomatoes illegal because they believed it was poisonous'],
        correct_answer: 0,
        img:'https://kosublog.com/wp-content/uploads/2016/07/blog3-768x512.jpg',
    }
];

let questionNum = 0;
let incorrect=0;
let rand=[];

//---------------- BUTTONS -----------------//

$('.quiz').on('submit',function(event){
    event.preventDefault();
    console.log('in quiz next');
    let selected = $("input[type=radio]:checked").val();
   
    if(QA[questionNum-1].correct_answer == selected){
        resultQuiz(true);
    }
    else{
        incorrect++;
        resultQuiz(false);
    }
    console.log('ended click');
});

function startQuizButton(){
    //when the "start quiz" button is clicked this function will be called
    //it will hide the start menu and start the quiz 
    console.log('start button clicked');
    hide('.start-screen');
    renderQuiz(true);
}

function continueQuizButton(){
    console.log('continue was clicked');
    //$( "input" ).prop( "disabled", false );
    //$( "button .quiz" ).prop( "disabled", false );

    hide('.result');
    show('.quiz')
    if(questionNum >= 10){
        endQuiz();
    }
    else{
        console.log('before chaos');
        renderQuiz(true);
    }
}

function restartQuizButton(){
    //when button is clicked this will execute and 
    //quiz will restart ( renderQuiz(false) )
    console.log('restart was clicked');
    hide('.end-screen');
    renderQuiz(false);
}

//--------------------- to hide display and to show display --------------------//

function hide(element){
    if( !$(element).hasClass('hide') ){
        $(element).addClass('hide');
        console.log(`hiding class: ${element}`);
    }
}

function show(element){
    if( $(element).hasClass('hide') ){
        $(element).removeClass('hide');
        console.log(`showing class: ${element}`);
    }
}
//------------------------ Main functions --------------------------------------//

function renderQuiz(bool=false){
    console.log('renderQuiz is running');
    //if false, startscreen
    //if true, updateQuiz
    if(bool===false){
        startScreen();
    }
    else{
        updateQuiz();
    }
}

function startScreen(){
    //set all integer variables to zero (question,incorrect,rand)
    //display everything below banner to none, only display start message
    // and button to start which will call "renderQuiz(true)"
    console.log('startScreen is running');
    questionNum=0;
    incorrect = 0;
    rand = 0;
    $('.question').replaceWith(`<span class="question">${questionNum}</span>`);
    $('.score').replaceWith(`<span class="score">${((questionNum-incorrect)/10)*100}</span>`);

    hide('.quiz');
    show('.start-screen');    
}

function updateQuiz(){
    //update integer variables
    //update screen messages (question,score,'.question-block','span')
    questionNum++;
    // BACKGROUND //
    $('body').css(`background-image`,`url(${QA[questionNum-1].img})`)

    //

    hide('.start-screen');
    show('.quiz');
    console.log(`question NUM: ${questionNum}`);
    
    $('.question').replaceWith(`<span class="question">${questionNum}</span>`);
    

    $('.quiz fieldset').replaceWith(
    `<fieldset>
    <legend class="question-block">${QA[questionNum-1].question}</legend>
    <label>
    <input name="answers" type="radio" value=0 required>
    <span>${QA[questionNum-1].answers[0]}</span>
    </label>
    <label>
    <input name="answers" type="radio" value=1 required>
    <span>${QA[questionNum-1].answers[1]}</span>
    </label>
    <label>
    <input name="answers" type="radio" value=2 required>
    <span>${QA[questionNum-1].answers[2]}</span>
    </label>
    <label>
    <input name="answers" type="radio" value=3 required>
    <span>${QA[questionNum-1].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    `
    );
}

function resultQuiz(bool=false){
    console.log('resultQuiz is running');
    //if false (incorrect) then display answer and next button
    //if true (correct) then display congrats and next button
    $('.score').replaceWith(`<span class="score">${((questionNum-incorrect)/10)*100}</span>`);

    hide('.quiz')
    show('.result');

    if(bool==true){
        $('.result').replaceWith(
            `<div class='result'>
                <h2>Correct!</h2>
                <button onclick="continueQuizButton()" type="button" class="nextButton">Continue</button>
            </div>`);
    }
    else{
        $('.result').replaceWith(
            `<div class='result'>
                <h2>Incorrect!</h2>
                <p>The Correct answer was:
                <span>"${QA[questionNum-1].answers[ QA[questionNum-1].correct_answer ]}"</span>
                </p>
                <button onclick="continueQuizButton()" type="button" class="nextButton">Continue</button>
            </div>`);
    }
    
    //100px (header) + 30px (margin for label 1 was 20px and half margin for label 2 was 10px) = 130px
  //  let h = 130+ $('header').height() + $('.question-block').height() + $('label:eq(0)').height();
    //$('.result').offset({top: h})

    //$( "input" ).prop( "disabled", true );
    //$( ".quiz :button" ).prop( "disabled", true );
    console.log('disabled');
}

function endQuiz(){
    console.log('endQuiz is running');
    //quiz is over display short message portraying 
    //how good or bad they did AND button to restart aka renderQuiz(false)
    hide('.quiz');
    show('.end-screen');
    $('.end-screen').replaceWith(
        `<div class="end-screen">
        <h2>Quiz is complete!</h2>
        <h2><span>You got ${QA.length-incorrect} out of ${QA.length} correct!</span>
        </h2>
        <button onclick="restartQuizButton()" type="button" class="restartButton">Restart Quiz</button>
        </div>`
    );
}

//call renderquiz to start, without passing any value to it, it will default 
//to false and display start screen.
$(renderQuiz());
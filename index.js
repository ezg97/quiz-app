// Elijah Guerrero, quiz app: Unkown facts.
// DATA
const QA = [
    {
        question: "A civil lawsuit brought forth by the family of Martin Luthor King Jr. found ___ to be involved in his assisnation?",
        answers: ['A hate group in America',
        'James Earl Ray',
        'The United States federal government',
        'A Russian spy'],
        correct_answer: 2,
        img:'http://www.scholastic.com/content/images/articles/sn_ts/sn_ts_011210_hdr.jpg',
        src: "https://www.globalresearch.ca/court-decision-u-s-government-agencies-found-guilty-in-martin-luther-kings-assassination-2/5320024",
    },
    {
        question: "Which of the following is true about Adolf Hitler?",
        answers: ['He died before world war 2 ended',
        'He committed suicide once he realized he had lost the war',
        'He escaped to Antarctica',
        'He escaped to Argentina'],
        correct_answer: 3,
        img:'https://ichef.bbci.co.uk/news/976/cpsprodpb/C892/production/_107264315_d-daylandings.jpg',
        src: "https://vault.fbi.gov/adolf-hitler/adolf-hitler-part-01-of-04/view",
    },
    {
        question: "How many buildings fell in New York on September 9, 2001 (9/11)?",
        answers: ['1',
        '2',
        '3',
        '4'],
        correct_answer: 2,
        img:'https://amp.businessinsider.com/images/55f3279fbd86ef13008b9cbd-640-480.jpg',
        src: "https://www.nist.gov/pba/questions-and-answers-about-nist-wtc-7-investigation",
    },
    {
        question: "The United States of America's Congress passed a constitutional amendment that, if had been ratified by three-fourths of the States, would have made what legal?",
        answers: ['Abortion',
        'Slavery',
        'Treason',
        'Genocide'],
        correct_answer: 1,
        img:'https://www.lawliberty.org/wp-content/uploads/2018/06/We-the-People-768x384.jpg',
        src: "https://www.thoughtco.com/corwin-amendment-slavery-and-lincoln-4160928",
    },
    {
        question: "Prescott Bush, the father of former President George H.W. Bush and grandfather of former president George W. Bush, was:",
        answers: ['The first man to fly an airplane',
        'Implicated in a coup to overthrow a sitting president of the United States of America (FDR) and supported Hitler and Mussolini',
        'The strategist that planned the attack on D Day',
        'Was formerly a resident of Kazakhstan, ran for president there and lost, then immigrated to America'],
        correct_answer: 1,
        img:'https://upload.wikimedia.org/wikipedia/commons/0/09/George_H._W._Bush_inauguration.jpg',
        src: "https://timeline.com/business-plot-overthrow-fdr-9a59a012c32a",
    },
    {
        question: "What American president flew on a private jet, called the \"lolita express\", 26 times which was owned by child sex trafficker Jeff Epstein",
        answers: ['Bill Clinton',
        'George W. Bush',
        'Barack Hussein Obama',
        'Donald J. Trump'],
        correct_answer: 0,
        img:'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/iol/2018/12/05/18397690/218-12-5T16635Z_874113619_RC15CF4CD3_RTRMADP_3_PEOPLE-BUSH.JPG',
        src: "https://www.washingtontimes.com/news/2016/may/14/bill-clinton-ditched-secret-service-on-multiple-lo",
    },
    {
        question: "In the United States, how long has blue denoted the left and red denoted the right?",
        answers: ['From the time that parties were given colors',
        'Beginning  at the civil war',
        'After World War 1',
        'Since the year 2000'],
        correct_answer: 3,
        img:'http://historynet.com/wp-content/uploads/image/2012/ACWP/2012%2007/Lead%20for%20Honor.jpg',
        src: "https://slate.com/culture/2018/04/why-democrats-are-blue-and-republicans-are-red.html",
    },
    {
        question: "What former American president distinctly ignored Supreme Court ruling?",
        answers: ['George Washington',
        'Andrew Jackson',
        'Abraham Lincoln',
        'John F. Kenedy'],
        correct_answer: 2,
        img:'https://www.gannett-cdn.com/presto/2019/06/27/PDTF/a64a9823-e560-47ca-82e3-e7efea43e42b-GTY_AFP_1HW8V6.jpg?width=540&height=&fit=bounds&auto=webp',
        src: "https://www.history.com/this-day-in-history/president-lincoln-suspends-the-writ-of-habeas-corpus-during-the-civil-war",
    },
    {
        question: "The man who shot and attempted to assassinate President Ronald Regan was?",
        answers: ['An FBI agent',
        'A Russian spy',
        'An escaped convict',
        'A family friend of Ronald Regan\'s vice president, George H.W. Bush'],
        correct_answer: 3,
        img:'https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2015/06/ronald-reagan-example-2.jpg?fit=788%2C460&ssl=1',
        src: "https://whowhatwhy.org/2016/08/16/bush-angle-reagan-shooting-still-unresolved-hinckley-walks",
    },
    {
        question: "In the first half of the 1900s, the US government",
        answers: ['Poisoned alcohol in hopes to decrease the desire of its consumption, but ultimately failed and ended up killing thousands of Americans',
        'Banned all foreign music',
        'Passed a law making all selling of cigarettes under a bridge punishable by death',
        'Made Tomatoes illegal because they believed it was poisonous'],
        correct_answer: 0,
        img:'https://kosublog.com/wp-content/uploads/2016/07/blog3-768x512.jpg',
        src: "https://www.snopes.com/fact-check/government-poison-10000-americans",
    }
];

let questionNum = 0;
let incorrect=0;

//---------------- BUTTONS -----------------//

$('.quiz').on('submit',function(event){
    //submit the answer
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
    //when continue is clicked the next question will
    //be prompted or the quiz will end
    console.log('continue was clicked');

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
    //this function will hide a class
    if( !$(element).hasClass('hide') ){
        $(element).addClass('hide');
        console.log(`hiding class: ${element}`);
    }
}

function show(element){
    //this function will reverse the "hide" function
    if( $(element).hasClass('hide') ){
        $(element).removeClass('hide');
        console.log(`showing class: ${element}`);
    }
}
//--------------------- GET RANDOM FUNCTION --------------------//

function getRandom(max) {
    //generate a random number based off the number passed
    return Math.floor(Math.random() * Math.floor(max));
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

    $('body').css(`background-image`,`url(${QA[getRandom(QA.length)].img})`)
    
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
    // because the image is being uploaded through css, it's not possible to use 
    // the alt attribute without the image being defined in html. So, in the CSS
    // there is a default grey background cover in case the image doesn't load.
    $('body').css(`background-image`,`url(${QA[questionNum-1].img})`)

    hide('.start-screen');
    show('.quiz');
    
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
    `);
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
                <p>The Correct answer is below. Click to read more about it.
                <a href=${QA[questionNum-1].src} target="_blank">
                "${QA[questionNum-1].answers[ QA[questionNum-1].correct_answer ]}"</a>
                </p>
                <button onclick="continueQuizButton()" type="button" class="nextButton">Continue</button>
            </div>`);
    }    
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
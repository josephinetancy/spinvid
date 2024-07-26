

const exp = (function() {


    var p = {};

   /*
    *
    *   CONDITION ASSIGNMENT    
    *
    */


    let settings = {
        dv: 'flow',
    };

    if (settings.dv == 'happiness') {
        settings.dvText = '<strong>happy</strong> you currently feel';
    } else {
        settings.dvText = '<strong>immersed and engaged</strong> you felt while spinning the previous wheel';
    };

    jsPsych.data.addProperties({
        dv: settings.dv,
    });

    console.log(settings.dv)

/*
    *
    *   PRELOADING VIDEOS : put it in utils?
    *
    */

/*
    var video = ["video/karen.mp4", "video/karen2.mp4", "video/karen3.mp4"]

   p.preload = {
        type: jsPsychPreload,
        video: video
    };

*/
   /*
    *
    *   INSTRUCTIONS
    *
    */

    const html = {
        intro_preChk: [
            `<div class='parent'>
                <p><strong>Welcome to Spin the Wheel!</strong></p>
                <p>In Spin the Wheel, you'll spin a series of wheels.</p>
                <p>Each time you land on a wheel, you'll see a video.
            </div>`,

            `<div class='parent'>
                <p>To spin a prize wheel, just grab it with your cursor and give it a spin!
                <br>Watch the animation below to see how it's done.</p>
                <img src="./img/spinGif.gif" style="width:60%; height:60%">
            </div>`,

            `<div class='parent'>
                <p>There are 2 prize wheels in total.<br>You will spin each wheel 20 times before continuing to the next wheel.</p>
                <p>After spinning a wheel 20 times, you'll answer a question about your feelings.</br>
                Specifically, you'll report how ${settings.dvText}.</p>
            </div>`],

        intro_postChk: [
            `<div class='parent'>
                <p>You're ready to start playing Spin the Wheel!</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        postTask: [
            `<div class='parent'>
                <p>Spin the Wheel is now complete!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],
    };

    function MakeIntro(settings) {

        const intro_preChk = {
            type: jsPsychInstructions,
            pages: html.intro_preChk,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        const intro_postChk = {
            type: jsPsychInstructions,
            pages: html.intro_postChk,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        let correctAnswers = [`5`];



        if (settings.dv == 'flow') {
            correctAnswers.push(`My level of immersion and engagement.`);
        } else if (settings.dv == 'happiness') {
            correctAnswers.push(`My level of happiness.`);
        };
        


        const errorMessage = {
            type: jsPsychInstructions,
            pages: [`<div class='parent'><p>You provided the wrong answer.<br>To make sure you understand Spin the Wheel, please continue to re-read the instructions.</p></div>`],
            show_clickable_nav: true,
            allow_keys: false,
        };


        
        const attnChk = {
            type: jsPsychSurveyMultiChoice,
            preamble: `<div class='parent'>
                <p>Please answer the following questions.</p>
                </div>`,
            questions: [
                {
                    prompt: "How many times will you spin each wheel before continuing to the next wheel?", 
                    name: `attnChk1`, 
                    options: [`1`, `2`, `5`, `10`, `20`],
                },
                {
                    prompt: "What will you be answering questions about?", 
                    name: `attnChk2`, 
                    options: [`My level of happiness.`, `My level of immersion and engagement.`],
                },
            ],
            scale_width: 500,
            on_finish: (data) => {
                  const totalErrors = getTotalErrors(data, correctAnswers);
                  data.totalErrors = totalErrors;
            },
        };


        const conditionalNode = {
          timeline: [errorMessage],
          conditional_function: () => {
            const fail = jsPsych.data.get().last(1).select('totalErrors').sum() > 0 ? true : false;
            return fail;
          },
        };

        const instLoop = {
          timeline: [intro_preChk, attnChk, conditionalNode],
          loop_function: () => {
            const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
            return fail;
          },
        };

        const introTimeline = {
            timeline: [instLoop, intro_postChk],
        }

        this.timeline = [introTimeline];
    }

    p.consent = {
        type: jsPsychExternalHtml,
        url: "./html/consent.html",
        cont_btn: "advance",
    };

    p.intro = new MakeIntro(settings);

    
   /*
    *
    *   TASK
    *
    */


    // define each wedge
    const wedges = {
        one: {color:"#000080", label:"crazy memes crazy fights", emotion: "outrage1"},
        two: {color:"#0000FF", label:"karenfootage", emotion: "outrage2"},
        three: {color:"#B22222", label:"yoda4ever", emotion: "affection1"},
        four: {color:"#CD5C5C", label:"buitengebieden", emotion: "affection2"},
        five: {color:"#FFFACD", label:"wowterrifying", emotion: "fear1"},
        six: {color:"#FFFF00", label:"scaryclip", emotion: "fear2"},
        seven: {color:"#7FFF00", label:"theworldoffunny", emotion: "amusement1"},
        eight: {color:"#7CFC00", label:"viralmemeguy", emotion: "amusement2"}
    };

console.log(wedges.one)

    // define each wheel
    const wheels = [

        //1-16
            {sectors: [ wedges.one, wedges.three, wedges.five, wedges.seven ], arrangement: "O1, Af1, F1, Am1", wheel: "1"},
            {sectors: [ wedges.one, wedges.three, wedges.five, wedges.eight ], arrangement: "O1, Af1, F1, Am2", wheel: "2"},
            {sectors: [ wedges.one, wedges.three, wedges.six, wedges.seven ], arrangement: "O1, Af1, F2, Am1", wheel: "3"},
            {sectors: [ wedges.one, wedges.three, wedges.six, wedges.eight], arrangement: "O1, Af1, F2, Am2", wheel: "4"},
            {sectors: [ wedges.one, wedges.four, wedges.five, wedges.seven ], arrangement: "O1, Af2, F1, Am1", wheel: "5"},
            {sectors: [ wedges.one, wedges.four, wedges.five, wedges.eight ], arrangement: "O1, Af2, F1, Am2", wheel: "6"},
            {sectors: [ wedges.one, wedges.four, wedges.six, wedges.seven ], arrangement: "O1, Af2, F2, Am1", wheel: "7"},
            {sectors: [ wedges.one, wedges.four, wedges.six, wedges.eight ], arrangement: "O1, Af2, F2, Am2", wheel: "8"},
            {sectors: [ wedges.two, wedges.three, wedges.five, wedges.seven ], arrangement: "O2, Af1, F1, Am1", wheel: "9"},
            {sectors: [ wedges.two, wedges.three, wedges.five, wedges.eight ], arrangement: "O2, Af1, F1, Am2", wheel: "10"},
            {sectors: [ wedges.two, wedges.three, wedges.six, wedges.seven ], arrangement: "O2, Af1, F2, Am1", wheel: "11"},
            {sectors: [ wedges.two, wedges.three, wedges.six, wedges.eight ], arrangement: "O2, Af1, F2, Am2", wheel: "12"},
            {sectors: [ wedges.two, wedges.four, wedges.five, wedges.seven ], arrangement: "O2, Af2, F1, Am1", wheel: "13"},
            {sectors: [ wedges.two, wedges.four, wedges.five, wedges.eight ], arrangement: "O2, Af2, F1, Am2", wheel: "14"},
            {sectors: [ wedges.two, wedges.four, wedges.six, wedges.seven ], arrangement: "O2, Af2, F2, Am1", wheel: "15"},
            {sectors: [ wedges.two, wedges.four, wedges.six, wedges.eight ], arrangement: "O2, Af2, F2, Am2", wheel: "16"},

        // F, F, Am, Am

            {sectors: [ wedges.five, wedges.six, wedges.seven, wedges.eight ], arrangement: "F1, F2, Am1, Am2", wheel: "17"},

            // F, F, Aff, Aff
            {sectors: [ wedges.five, wedges.six, wedges.three, wedges.four ], arrangement: "F1, F2, Am1, Am2", wheel: "18"},

            //O, O, Am, Am
            {sectors: [ wedges.one, wedges.two, wedges.seven, wedges.eight ], arrangement: "O2, Af2, F2, Am2", wheel: "19"},

            //O, O, Aff, Aff

            {sectors: [ wedges.one, wedges.two, wedges.three, wedges.four ], arrangement: "O2, Af2, F2, Am2", wheel: "20"}

        ];


    let scoreTracker = 0; // track current score

    let round = 1;  // track current round


    // trial: spinner
    const spin = {
        type: jsPsychCanvasButtonResponse,
        stimulus: function(c, spinnerData) {
            createSpinner(c, spinnerData, scoreTracker, jsPsych.timelineVariable('sectors'));
        },
        canvas_size: [500, 500],
        score: function() {
            return scoreTracker
        },
        post_trial_gap: 1000,
        data: {arrangement: jsPsych.timelineVariable('arrangement'), wheel: jsPsych.timelineVariable('wheel')},
        on_finish: function(data) {
          //  data.round = round;
            data.round = round
        //    scoreTracker = data.score
        }
    };


    const video_load = {
        type: jsPsychVideoKeyboardResponse,
        stimulus: [
            'video/karen.mp4'],
    //    timeline: [
    //        { stimulus: "video/karen.mp4", prompt: 'this shows karen'},
    //        { stimulus: "video/karen2.mp4", prompt: 'this shows karen2'},
     //       { stimulus: "video/karen3.mp4", prompt: 'this shows karen3'}
     //       ], 
         choices: "a",
         sample: {
            type: 'with-replacement', 
            size: 10
         },
         trial_ends_after_video: true,
         randomize_order: true,
         on_finish: function(data) {
            data.round = round;
            saveSurveyData(data);
            round++;
            console.log(round)
        }
    };

//       
    // trial: flow DV
    const flowMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `During the last round of Spin the Wheel,<br>to what extent did you feel immersed and engaged in what you were doing?`,
            name: `dv_value`,
            labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
        ],
        randomize_question_order: false,
        scale_width: 600,data: {arrangement: jsPsych.timelineVariable('arrangement'), wheel: jsPsych.timelineVariable('wheel')},
        on_finish: function(data) {
            data.round = round;
 //           let scoreArray = jsPsych.data.get().select('score').values;
 //           let outcomesArray = jsPsych.data.get().select('outcomes').values;
 //           data.score = scoreArray[scoreArray.length - 1];
//          data.outcomes = outcomesArray[outcomesArray.length - 1];
            saveSurveyData(data);
        }
    };


    
    // trial: happiness DV
    const happinessMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `How happy are you right now?`,
            name: `dv_value`,
            labels: ['0<br>Very unhappy', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Very happy']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('var'), arrangement: jsPsych.timelineVariable('arrangement')},
        on_finish: function(data) {
            data.round = round;
 //           let scoreArray = jsPsych.data.get().select('score').values;
 //           let outcomesArray = jsPsych.data.get().select('outcomes').values;
 //           data.score = scoreArray[scoreArray.length - 2];
  //          data.outcomes = outcomesArray[outcomesArray.length - 2];
            saveSurveyData(data);
            round++;
        }
    };


    // flow proneness


    // timeline: main task


    let dv;
    if (settings.dv == "happiness") {
        dv = happinessMeasure;
    } else {
        dv = flowMeasure;
    };


//this is what I did before but i think i need to separate them?
    p.task = {
        timeline: [spin, video_load],
       // timeline: [spin, dv],
        repetitions: 20, //this should be the number of repetitions for each spin + video combo..
        timeline_variables: wheels,
        sample: {
            type: 'alternate_groups',
            groups: [[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [16,17,18,19]],
            randomize_group_order: true
        }
    }; 

   /*
    *
    *   Demographics
    *
    */

    p.demographics = (function() {


        const taskComplete = {
            type: jsPsychInstructions,
            pages: html.postTask,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        const genFlowScale = ['-2<br>Totally<br>Disagree', '-1<br>Disagree', '0<br>Neither agree<br>nor disagree', '1<br>Agree', '2<br>Totally<br>Agree'];

        const flowGenQuestions = {
            type: jsPsychSurveyLikert,
            preamble:
                `<div style='padding-top: 50px; width: 900px; font-size:16px'>
                    <p>Please express the extent to which you disagree or agree with each statement.</p>
                </div>`,
            questions: [
                {
                    prompt: `I enjoy challenging tasks/activities that require a lot of focus.`,
                    name: `genFlow_1`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `When I am focused on a task/activity, I quickly tend to forget my surroundings (other people, time, and place).`,
                    name: `genFlow_2`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I usually experience a good flow when I do something (things that are neither too easy nor too difficult for me).`,
                    name: `genFlow_3`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I have several different areas of interest.`,
                    name: `genFlow_4`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `It is difficult for me to walk away from or quit a project I am currently working on.`,
                    name: `genFlow_5`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I become stressed in the face of difficult/challenging tasks.`,
                    name: `genFlow_6r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `It is difficult for me to maintain concentration over time.`,
                    name: `genFlow_7r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I quickly become tired of the things I do.`,
                    name: `genFlow_8r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I am usually satisfied with the results of my efforts across various tasks (I experience feelings of mastery).`,
                    name: `genFlow_9`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `When I focus on something, I often forget to take a break.`,
                    name: `genFlow_10`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I get bored easily.`,
                    name: `genFlow_11r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `My daily tasks are exhausting rather than stimulating.`,
                    name: `genFlow_12r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I develop an interest for most of the things I do in life.`,
                    name: `genFlow_13`,
                    labels: genFlowScale,
                    required: true,
                },
            ],
            randomize_question_order: false,
            scale_width: 500,
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        };

        const gender = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your gender?</p>',
            choices: ['Male', 'Female', 'Other'],
            on_finish: (data) => {
                data.gender = data.response;
            }
        };

        const age = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Age:", name: "age"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const ethnicity = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your race?</p>',
            choices: ['White / Caucasian', 'Black / African American','Asian / Pacific Islander', 'Hispanic', 'Native American', 'Other'],
            on_finish: (data) => {
                data.ethnicity = data.response;
            }
        };

        const english = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Is English your native language?:</p>',
            choices: ['Yes', 'No'],
            on_finish: (data) => {
                data.english = data.response;
            }
        };  

        const finalWord = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const pid = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Please enter your Prolific ID in the space below to receive payment.", rows: 1, columns: 50, name: "pid"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const demos = {
            timeline: [taskComplete, flowGenQuestions, gender, age, ethnicity, english, finalWord, pid]
        };

        return demos;

    }());


   /*
    *
    *   SAVE DATA
    *
    */


/*/    p.save_data = {
        type: jsPsychPipe,
        action: "save",
        experiment_id: "3ea7j3v4FYxI",
        filename: filename,
        data_string: ()=>jsPsych.data.get().csv()
    }; */

    return p;

}());

//const timeline = [exp.consent, exp.intro, exp.task, exp.demographics, exp.save_data];

const timeline = [exp.consent, exp.intro, exp.task, exp.demographics];

jsPsych.run(timeline);

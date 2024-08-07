

const exp = (function() {


    var p = {};


   /*
    *
    *   WHEEL SET UP
    *
    */


    // define each wedge
    const wedges = {
        one: {color:"#000080", label:"@crazy memes\ncrazy fights", shortName: "O1", description: "<li>The user <strong>'@crazy memes crazy fights'</strong> shows videos that make people mad.</li>"},
        two: {color:"#0000FF", label:"@karen clips", shortName: "O2", description: "<li>The user <strong>'@karen clips'</strong>  shows videos that make people mad.</li>"},
        three: {color:"#B22222", label:"@yoda4ever", shortName: "Af1", description: "<li>The user <strong>'@yoda4ever'</strong>  shows videos that make people warm.</li>"},
        four: {color:"#CD5C5C", label:"@buitengebieden", shortName: "Af2", description: "<li>The user <strong>'@buitengebieden'</strong>  shows videos that make people warm.</li>"},
        five: {color:"#FFFACD", label:"@wow terrifying", shortName: "F1", description: "<li>The user <strong>'@wow terrifying'</strong>  shows videos that make people scared.</li>"},
        six: {color:"#FFFF00", label:"@scary clip", shortName: "F2", description: "<li>The user <strong>'@scary clip'</strong>  shows videos that make people scared.</li>"},
        seven: {color:"#7FFF00", label:"@the world\nof funny", shortName: "Am1", description: "<li>The user <strong>'@the world of funny'</strong>  shows videos that make people laugh.</li>"},
        eight: {color:"#7CFC00", label:"@viral meme\nguy 2", shortName: "Am2", description: "<li>The user <strong>'@viral meme guy 2'</strong>  shows videos that make people laugh.</li>"}
    };

    // define each wheel

    const wheels = [

        //1-16
            {sectors: [ wedges.one, wedges.three, wedges.five, wedges.seven ], arrangement: "O1, Af1, F1, Am1", wheel: "0", MI: "high"},
            {sectors: [ wedges.one, wedges.three, wedges.five, wedges.eight ], arrangement: "O1, Af1, F1, Am2", wheel: "1", MI: "high"},
            {sectors: [ wedges.one, wedges.three, wedges.six, wedges.seven ], arrangement: "O1, Af1, F2, Am1", wheel: "2", MI: "high"},
            {sectors: [ wedges.one, wedges.three, wedges.six, wedges.eight], arrangement: "O1, Af1, F2, Am2", wheel: "3", MI: "high"},
            {sectors: [ wedges.one, wedges.four, wedges.five, wedges.seven ], arrangement: "O1, Af2, F1, Am1", wheel: "4", MI: "high"},
            {sectors: [ wedges.one, wedges.four, wedges.five, wedges.eight ], arrangement: "O1, Af2, F1, Am2", wheel: "5", MI: "high"},
            {sectors: [ wedges.one, wedges.four, wedges.six, wedges.seven ], arrangement: "O1, Af2, F2, Am1", wheel: "6", MI: "high"},
            {sectors: [ wedges.one, wedges.four, wedges.six, wedges.eight ], arrangement: "O1, Af2, F2, Am2", wheel: "7", MI: "high"},
            {sectors: [ wedges.two, wedges.three, wedges.five, wedges.seven ], arrangement: "O2, Af1, F1, Am1", wheel: "8", MI: "high"},
            {sectors: [ wedges.two, wedges.three, wedges.five, wedges.eight ], arrangement: "O2, Af1, F1, Am2", wheel: "9", MI: "high"},
            {sectors: [ wedges.two, wedges.three, wedges.six, wedges.seven ], arrangement: "O2, Af1, F2, Am1", wheel: "10", MI: "high"},
            {sectors: [ wedges.two, wedges.three, wedges.six, wedges.eight ], arrangement: "O2, Af1, F2, Am2", wheel: "11", MI: "high"},
            {sectors: [ wedges.two, wedges.four, wedges.five, wedges.seven ], arrangement: "O2, Af2, F1, Am1", wheel: "12", MI: "high"},
            {sectors: [ wedges.two, wedges.four, wedges.five, wedges.eight ], arrangement: "O2, Af2, F1, Am2", wheel: "13", MI: "high"},
            {sectors: [ wedges.two, wedges.four, wedges.six, wedges.seven ], arrangement: "O2, Af2, F2, Am1", wheel: "14", MI: "high"},
            {sectors: [ wedges.two, wedges.four, wedges.six, wedges.eight ], arrangement: "O2, Af2, F2, Am2", wheel: "15", MI: "high"},

        // F, F, Am, Am

            {sectors: [ wedges.five, wedges.six, wedges.seven, wedges.eight ], arrangement: "F1, F2, Am1, Am2", wheel: "16", MI: "low"},

            // F, F, Aff, Aff
            {sectors: [ wedges.five, wedges.six, wedges.three, wedges.four ], arrangement: "F1, F2, Aff1, Aff2", wheel: "17", MI: "low"},

            //O, O, Am, Am
            {sectors: [ wedges.one, wedges.two, wedges.seven, wedges.eight ], arrangement: "O1, O2, Am1, Am2", wheel: "18", MI: "low"},

            //O, O, Aff, Aff

            {sectors: [ wedges.one, wedges.two, wedges.three, wedges.four ], arrangement: "O1, O2, Aff1, Aff2", wheel: "19", MI: "low"},

         //   {sectors: [ wedges.one, wedges.one, wedges.one, wedges.one ], arrangement: "O1, O2, Aff1, Aff2", wheel: "19", MI: "low"} testing

        ];



    const highMIwheel = [wheels[Math.floor(Math.random() * 14)]];// random integer from 0 - 15
    //const highMIwheel = [wheels[20]]; testing
    const lowMIwheel = [wheels[Math.floor(Math.random() * 4) + 16]]; // random integer from 16 - 19

//wheel preloading
    function getVideoPaths(wheel) {
    const videos = [];
    wheel.sectors.forEach(sector => {
        for (let i = 0; i < 15; i++) {
            videos.push(`video/${sector.shortName}/${i}.mp4`);
        }
    });
    return videos;
}

//getting descriptions for each wheel 
function getDescriptions(wheel) {
    const descriptions = wheel.sectors.map(sector => sector.description);
    return descriptions;
}

console.log(highMIwheel[0])
    const highMIVideoPaths = getVideoPaths(highMIwheel[0]);
    const lowMIVideoPaths = getVideoPaths(lowMIwheel[0]);

    const highMIDescription = getDescriptions(highMIwheel[0]);
    const lowMIDescription = getDescriptions(lowMIwheel[0]);
    console.log(highMIDescription)

    const descriptionListHigh = highMIDescription.join(" ");
    const descriptionListLow = lowMIDescription.join(" ");

    console.log(lowMIDescription)

    p.preloadHighMI = {
        type: jsPsychPreload,
        video: highMIVideoPaths,
        message: `<p>Loading the first wheel that will show the following accounts:</p>${descriptionListHigh} <br>`,
        on_success: function(file) {
            console.log('Loaded: ', file);
        },
        on_error: function(file) {
            console.error('Failed to load:', file);
        }
};

    p.preloadLowMI = {
        type: jsPsychPreload,
        video: lowMIVideoPaths,
        message: `<p>Loading the second wheel that will show the following accounts:</p>${descriptionListLow} <br>`,
        on_success: function(file) {
            console.log('Loaded: ', file);
    }
};

/* 

MORE WHEEL SET UP

*/

    let scoreTracker = 0; // track current score

    let round = 1;  // track current round

    let account = 'default'; //this is the account

    let usedVideos = new Set();

    let vidNumber = Math.floor(Math.random()*15);

    let spin_num = 4; //change this to the number of spins. This will change the number of spins AFTER the wheel decelerates. 

    let numOfWheels = 2 // change this to to the number of wheels present in the experiment.

    function generateUniqueVidNumber(max) {
        let newVidNumber;
        if (usedVideos.size === max) {
        usedVideos.clear();  // Reset if all videos have been used
        }
        do {
        newVidNumber = Math.floor(Math.random() * max);
        } while (usedVideos.has(newVidNumber));
        usedVideos.add(newVidNumber);
        return newVidNumber;
}

    function getShortName(longName) {
    // Iterate over each key in the wedges object
        for (let key in wedges) {
        // Check if the label matches the longName
            if (wedges[key].label === longName) {
            // Return the corresponding shortName
            return wedges[key].shortName;
        }
    }
    // Return null or an appropriate value if no match is found
    return null;
}

    // trial: spinner
    const spin = {
        type: jsPsychCanvasButtonResponse,
        stimulus: function(c, spinnerData) {
            createSpinner(c, spinnerData, scoreTracker, jsPsych.timelineVariable('sectors'), spin_num); 
        },
        canvas_size: [500, 500],
        score: function() {
            return scoreTracker
        },
        post_trial_gap: 1000,
        data: {
            arrangement: jsPsych.timelineVariable('arrangement'), 
            wheel: jsPsych.timelineVariable('wheel'), 
            MI: jsPsych.timelineVariable('MI')
        },
        on_finish: function(data) {
            data.round = round;
            longName = (data.outcomes[0] || '').trim(); 
            shortName = getShortName(longName);
            vidNumber = generateUniqueVidNumber(15);
            data.vidNumber = vidNumber;
            data.shortName = shortName;
            console.log(data);
            spin_num--;
        //    scoreTracker = data.score
        }
    };

    const video_load = {
        type: jsPsychVideoKeyboardResponse,
        stimulus: function() {
            const videoPath = `video/${shortName}/${vidNumber}.mp4`;
            console.log(videoPath);
            return [videoPath]; 
        },
            width: 640,
            height: 480,
            trial_ends_after_video: true,
            on_finish: function(data) {
            round++;
        }
    };

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
                <p>Each time you land on a wheel, you'll see a video based on what you land.
            </div>`,

            `<div class='parent'>
                <p>To spin the wheel, just grab it with your cursor and give it a spin!
                <br>Watch the animation below to see how it's done.</p>
                <img src="./img/spinGif.gif" style="width:60%; height:60%">
            </div>`,

            `<div class='parent'>
                <p>There are 2 wheels in total.
                <p>You will spin each wheel <strong> 20 </strong> times before continuing to the next wheel.  
                <br> On each wheel, there are 4 unique Twitter or 'X' account names. 
                <br> When you land on the account, you will watch a short video based on the account you land on.</p>
                <p>After spinning a wheel 20 times, you'll report how <strong>immersed and engaged </strong> you felt.</p>
            </div>`],

        intro_postChk: [
            `<div class='parent'>
                <p>You're ready to start playing Spin the Wheel!</p> <p> On the next page, you will read some descriptions of the accounts on the wheel.</p> 
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        postTask: [
            `<div class='parent'>
                <p>Spin the Wheel is now complete!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],

        intro_DescriptionsHigh: [
            `<div class='parent'>
                <p>You will now spin the first wheel that will show videos from the following accounts:</p>
                <ul> ${descriptionListHigh}
                </ul>
            </div>`
        ],

        intro_DescriptionsLow: [
            `<div class='parent'>
                <p>You will now spin the second wheel that will show videos from the following accounts:</p>
                <ul> ${descriptionListLow}
                </ul>
            </div>`
        ],

        intro_toSecond: [
            `<div class='parent'>
                <p>You will now spin the second wheel.</p>
                <p>Continue to the next screen to begin.</p
            </div>`
        ],
    };


    function MakeIntro() {

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

        const intro_DescriptionsHigh = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsHigh,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        const correctAnswers = {
            attnChk1 : `20`, 
            attnChk2 : `My level of immersion and engagement.`, 
        }


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
                  const totalErrors = getTotalErrors(data.response, correctAnswers);
                  data.totalErrors = totalErrors;
            },
        };

        function getTotalErrors(response, correctAnswers) {
            let errorCount = 0;

            // Compare each response with correct answers
            for (const key in correctAnswers) {
                if (response[key] !== correctAnswers[key]) {
                    errorCount++;
                }
            }
            return errorCount;
        }


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

    p.intro = new MakeIntro();


    p.intro_DescriptionsLow = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsLow,
            show_clickable_nav: true,
            post_trial_gap: 500,
        }; 


    p.intro_toSecond = {
            type: jsPsychInstructions,
            pages: html.intro_toSecond,
            show_clickable_nav: true,
            post_trial_gap: 500,
        }; 

       
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

    dv = flowMeasure;// just for right now


    // timeline: main task


    p.task_highMI = {
        timeline: [spin, video_load],
        repetitions: 4, //this should be the number of repetitions for each spin + video combo..
        timeline_variables: highMIwheel
    }; 


    p.task_lowMI = {
        timeline: [spin, video_load],
        repetitions: 4, //this should be the number of repetitions for each spin + video combo..
        timeline_variables: lowMIwheel
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



const timeline = [
  //  exp.consent,
    exp.intro, 
    exp.preloadHighMI, 
    exp.task_highMI, 
    dv, 
 //   exp.intro_DescriptionsLow,
    exp.intro_toSecond,
    exp.preloadLowMI, 
    exp.task_lowMI, 
    dv, 
    exp.demographics]; 


jsPsych.run(timeline);

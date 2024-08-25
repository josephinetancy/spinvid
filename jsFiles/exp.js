

const exp = (function() {


    var p = {};


   /*
    *
    *   WHEEL SET UP
    *
    */


    // define each wedge
    const wedges = {
    one: {color:"#806b00", label:`<img src="./img/crazymemescrazyfights.jpeg"> @crazy memes\ncrazy fights`, shortName: "O1", description: `<li><img src="./img/crazymemescrazyfights.jpeg" alt="@crazy memes crazy fights" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@crazy memes crazy fights</strong> shows videos that make people mad.</li>`, example: `./example/crazymemescrazyfights.mp4`, descripExample: `<img src="./img/crazymemescrazyfights.jpeg" alt="@crazy memes crazy fights" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@crazy memes crazy fights</strong> that shows videos that make people mad.`},
    two: {color:"#b100fe", label:`<img src="./img/karenclips.jpeg"> @karen clips`, shortName: "O2", description: `<li><img src="./img/karenclips.jpeg" alt="@karen clips" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@karen clips</strong> shows videos that make people mad.</li>`, example: `./example/karenclips.mp4`, descripExample: `<img src="./img/karenclips.jpeg" alt="@karen clips" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@karen clips</strong> that shows videos that make people mad.`},
    three: {color:"#ffd800", label: `<img src="./img/yoda4ever.jpeg"> @yoda4ever`, shortName: "Af1", description: `<li><img src="./img/yoda4ever.jpeg" alt="@yoda4ever" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@yoda4ever</strong> shows videos that make people warm.</li>`, example: `./example/yoda4ever.mp4`, descripExample: `<li><img src="./img/yoda4ever.jpeg" alt="@yoda4ever" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"><strong>@yoda4ever</strong> that shows videos that make people warm.`},
    four: {color:"#800001", label:`<img src="./img/buitengebieden.jpeg"> @buitengebieden`, shortName: "Af2", description: `<li><img src="./img/buitengebieden.jpeg" alt="@buitengebieden" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@buitengebieden</strong> shows videos that make people warm.</li>`, example: `./example/buitengebieden.mp4`, descripExample: `<img src="./img/buitengebieden.jpeg" alt="@buitengebieden" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@buitengebieden</strong> that shows videos that make people warm.`},
    five: {color:"#fe6a00", label:`<img src="./img/wowterrifying.jpeg"> @wow terrifying`, shortName: "F1", description: `<li><img src="./img/wowterrifying.jpeg" alt="@wow terrifying" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@wow terrifying</strong> shows videos that make people scared.</li>`, example: `./example/wowterrifying.mp4`, descripExample:`<img src="./img/wowterrifying.jpeg" alt="@wow terrifying" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@wow terrifying</strong> that shows videos that make people scared.`},
    six: {color:"#007f0e", label:`<img src="./img/scaryclip.jpeg"> @scary clip`, shortName: "F2", description: `<li><img src="./img/scaryclip.jpeg" alt="@scary clip" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@scary clip</strong> shows videos that make people scared.</li>`, example: `./example/scaryclip.mp4`, descripExample: `<img src="./img/scaryclip.jpeg" alt="@scary clip" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@scary clip</strong> that shows videos that make people scared.`},
    seven: {color:"#fe0000", label:`<img src="./img/theworldoffunny.jpeg"> @the world\nof funny`, shortName: "Am1", description: `<li><img src="./img/theworldoffunny.jpeg" alt="@the world of funny" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@the world of funny</strong> shows videos that make people laugh.</li>`, example: `./example/theworldoffunny.mp4`, descripExample: `<img src="./img/theworldoffunny.jpeg" alt="@the world of funny" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@the world of funny</strong> that shows videos that make people laugh.`},
    eight: {color:"#0094fe", label:`<img src="./img/viralmemeguy2.jpeg"> @viral meme\nguy 2`, shortName: "Am2", description: `<li><img src="./img/viralmemeguy2.jpeg" alt="@viral meme guy 2" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@viral meme guy 2</strong> shows videos that make people laugh.</li>`, example: `./example/viralmemeguy.mp4`, descripExample: `<img src="./img/viralmemeguy2.jpeg" alt="@viral meme guy 2" style="vertical-align:middle; width:40px; height:40px; border-radius: 50%;"> <strong>@viral meme guy 2</strong> shows videos that make people laugh.`}
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

//getting descriptions for each account/wheel 
function getDescriptions(wheel) {
    const descriptions = wheel.sectors.map(sector => sector.description);
    return descriptions; // Combine descriptions into an unordered list
}

//getting example videos
function getExamples(wheel) {
    const examples = wheel.sectors.map(sector => sector.example);
    return examples; 
}

//getting example videos
function getdescripExample(wheel) {
    const descripExamples = wheel.sectors.map(sector => sector.descripExample);
    return descripExamples; 
}


console.log(highMIwheel[0])

    const highMIVideoPaths = getVideoPaths(highMIwheel[0]);
    const lowMIVideoPaths = getVideoPaths(lowMIwheel[0]);

    const highMIDescription = getDescriptions(highMIwheel[0]);
    const highMIexamples = getExamples(highMIwheel[0]);
    console.log(highMIexamples)
    const lowMIexamples = getExamples(lowMIwheel[0]);


    document.body.innerHTML += `<ul>${highMIDescription.join('')}</ul>`;

    const lowMIDescription = getDescriptions(lowMIwheel[0]);
    document.body.innerHTML += `<ul>${lowMIDescription.join('')}</ul>`;

    const highMIDescripExamples = getdescripExample(highMIwheel[0]);
    const lowMIDescripExamples = getdescripExample(lowMIwheel[0]);

//    const descriptionListHigh = highMIDescription.join(" ");
//    const descriptionListLow = lowMIDescription.join(" ");

p.preloadHighMI = {
    type: jsPsychPreload,
    video: highMIVideoPaths,
    message: `<p>Now loading the first wheel... </p> <p> As a reminder, the wheel will show the following accounts:</p><ul>${highMIDescription.join('')}</ul><br>`,
    on_success: function(file) {
        console.log('Loaded: ', file);
    },
    on_error: function(file) {
        console.error('Failed to load:', file);
    }
};


p.preloadHighMI_examples = {
    type: jsPsychPreload,
    video: highMIexamples,
    message: `<p>You're almost ready to start playing!</p>
                <p>Before that, here's descriptions of the accounts on the first wheel:</p>
                </p><ul>${highMIDescription.join('')}</ul><br>
                <p>Now loading the examples for each time you land on each account on the first wheel. </p>`,
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
        message: `<p> Now loading the second wheel... </p> <p> As a reminder, the wheel will show the following accounts:</p>${lowMIDescription.join('')}<br>`,
        on_success: function(file) {
            console.log('Loaded: ', file);
    }
};

p.preloadLowMI_examples = {
    type: jsPsychPreload,
    video: lowMIexamples,
    message: `<p>You will now play the second wheel! </p>
                <p>Before that, here's descriptions of the accounts on the second wheel:</p>
                </p><ul>${lowMIDescription.join('')}</ul><br>
                <p>Now loading the examples for each time you land on each account on the second wheel. </p>`,
    on_success: function(file) {
        console.log('Loaded: ', file);
    },
    on_error: function(file) {
        console.error('Failed to load:', file);
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
                <p><strong>Welcome to our study on the psychological effects of social media!</strong></p>
                <p>We're exploring how social media content affects immersion and engagement. </p>
                <p>All you'll need to do is to watch a few Twitter videos and report how immersed and engaged you felt. </p> 
                <p>To add a fun twist, you'll get to control which videos you watch by spinning a wheel. </p>
                <p>Each spin will lead you to new video based on where the wheel lands. </p> 
                <p> Click "Next" to start! </p>
            </div>`,
/*
            `<div class='parent'>
                <p>To spin the wheel, just grab it with your cursor and give it a spin!
                <br>Watch the animation below to see how it's done.</p>
                <img src="./img/spinGif.gif" style="width:60%; height:60%">
            </div>`, */

            `<div class='parent'>
                <p>You'll be spinning two wheels for 20 spins, each featuring 4 unique Twitter or "X" accounts. </p>
                <p> Each time you spin the wheel and land on the account, you'll watch a short video based on the account you land on.</p>
                <p>After spinning the wheel 20 times, you'll report how immersed and engaged you felt and move to the next wheel. </p>
            </div>`
            ],

        intro_postChk: [
            `<div class='parent'>
                <p>You're almost ready to start playing!</p> <p> Next up, you'll read some instructions and watch sample videos from the accounts on the wheel.</p> 
            </div>`,      
        ],

        postTask: [
            `<div class='parent'>
                <p>Thank you!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],

        intro_DescriptionsHigh: [
            `<div class='parent'>
                <p>You're almost ready to start playing!</p>
                <p>Before that, here's descriptions of the accounts on the first wheel:</p>
                </p><ul>${highMIDescription.join('')}</ul><br>
                <p>On the next page, you'll see examples for each time you land on all 4 accounts. </p>
            </div>`
        ], 

        intro_DescriptionsLow_example0: [
            `<div class='parent'>
             <p>Watch the video below for when you land on the account: </p>
            <p>${lowMIDescripExamples[0]}</p>
            <p>Please make sure your volume is turned on. </p>
            <video src= "${lowMIexamples[0]}" style="width:60%; height:60%;" controls>
                Your browser does not support the video tag.
            </video>
            </p>
        </div>`
        ],

        intro_DescriptionsLow_example1: [
            `<div class='parent'>
             <p>Watch below for when you land on the account: </p>
            <p>${lowMIDescripExamples[1]}</p>
            <p>Please make sure your volume is turned on. </p>
            <video src= "${lowMIexamples[1]}" style="width:60%; height:60%;" controls>
                Your browser does not support the video tag.
            </video>
            </p>
        </div>`
        ],

        intro_DescriptionsLow_example2: [
            `<div class='parent'>
             <p>Watch below for when you land on the account: </p>
            <p>${lowMIDescripExamples[2]}</p>
            <p>Please make sure your volume is turned on. </p>
            <video src= "${lowMIexamples[2]}" style="width:60%; height:60%;" controls>
                Your browser does not support the video tag.
            </video>
            </p>
        </div>`
        ],

        intro_DescriptionsLow_example3: [
            `<div class='parent'>
             <p>Watch below for when you land on the account: </p>
            <p>${lowMIDescripExamples[3]}</p>
            <p>Please make sure your volume is turned on. </p>
            <video src= "${lowMIexamples[3]}" style="width:60%; height:60%;" controls>
                Your browser does not support the video tag.
            </video>
            </p>
        </div>`
        ],

        intro_HighDescriptionsAfterExamples: [
            `<div class='parent'>
             <p>You're now ready to play!</p> <p>Please make sure you're volume is on. </p> <p> Click "Next" to start playing the first wheel.</p>
        </div>`
        ],

                intro_DescriptionsHigh_example0: [
            `<div class='parent'>
             <p>Watch the video below for when you land on the account: </p>
            <p>${highMIDescripExamples[0]}</p>
            <p>Please make sure your volume is turned on. </p>
            <video src= "${highMIexamples[0]}" style="width:60%; height:60%;" controls>
                Your browser does not support the video tag.
            </video>
            </p>
        </div>`
        ],

        intro_DescriptionsHigh_example1: [
            `<div class='parent'>
             <p>Watch below for when you land on the account: </p>
            <p>${highMIDescripExamples[1]}</p>
            <p>Please make sure your volume is turned on. </p>
            <video src= "${highMIexamples[1]}" style="width:60%; height:60%;" controls>
                Your browser does not support the video tag.
            </video>
            </p>
        </div>`
        ],

        intro_DescriptionsHigh_example2: [
            `<div class='parent'>
             <p>Watch below for when you land on the account: </p>
            <p>${highMIDescripExamples[2]}</p>
            <p>Please make sure your volume is turned on. </p>
            <video src= "${highMIexamples[2]}" style="width:60%; height:60%;" controls>
                Your browser does not support the video tag.
            </video>
            </p>
        </div>`
        ],

        intro_DescriptionsHigh_example3: [
            `<div class='parent'>
             <p>Watch below for when you land on the account: </p>
            <p>${highMIDescripExamples[3]}</p>
            <p>Please make sure your volume is turned on. </p>
            <video src= "${highMIexamples[3]}" style="width:60%; height:60%;" controls>
                Your browser does not support the video tag.
            </video>
            </p>
        </div>`
        ],

/*
        intro_DescriptionsLow: [
            `<div class='parent'>
                <p>You will now spin the second wheel that will show videos from the following accounts:</p>
                <ul> ${descriptionListLow}
                </ul>
            </div>`
        ],
*/
        intro_toSecond: [
            `<div class='parent'>
                <p>You'll now ready to spin the second wheel! </p>
                <p>Before that, here's descriptions of the accounts on the second wheel:</p>
                </p><ul>${lowMIDescription.join('')}</ul><br>
                <p>On the next page, you'll see examples for each time you land on each accounts. </p>
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
            timeline: [instLoop],
        }

        this.timeline = [introTimeline];
    }

    p.consent = {
        type: jsPsychExternalHtml,
        url: "./html/consent.html",
        cont_btn: "advance",
    };

    p.intro = new MakeIntro();


    p.intro_DescriptionsHigh = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsHigh,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

    p.intro_DescriptionsHigh_example0 = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsHigh_example0,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };    


    p.intro_DescriptionsHigh_example1 = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsHigh_example1,
            show_clickable_nav: true,
            post_trial_gap: 500,
        }; 

    p.intro_DescriptionsHigh_example2 = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsHigh_example2,
            show_clickable_nav: true,
            post_trial_gap: 500,
        }; 

    p.intro_DescriptionsHigh_example3 = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsHigh_example3,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };     

    p.intro_HighDescriptionsAfterExamples = {
            type: jsPsychInstructions,
            pages: html.intro_HighDescriptionsAfterExamples,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };   



    p.intro_DescriptionsLow_example0 = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsLow_example0,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };    


    p.intro_DescriptionsLow_example1 = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsLow_example1,
            show_clickable_nav: true,
            post_trial_gap: 500,
        }; 

    p.intro_DescriptionsLow_example2 = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsLow_example2,
            show_clickable_nav: true,
            post_trial_gap: 500,
        }; 

    p.intro_DescriptionsLow_example3 = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsLow_example3,
            show_clickable_nav: true,
            post_trial_gap: 500,
        }; 
  

/*
    p.intro_DescriptionsLow = {
            type: jsPsychInstructions,
            pages: html.intro_DescriptionsLow,
            show_clickable_nav: true,
            post_trial_gap: 500,
        }; 
*/

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
            spin_num = remainingSpinsReset;
            console.log(spin_num + " spin num after DV is done");
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
   // exp.consent,
    exp.intro, 
    exp.preloadHighMI_examples, 
   // exp.intro_DescriptionsHigh,
    exp.intro_DescriptionsHigh_example0,
    exp.intro_DescriptionsHigh_example1,
    exp.intro_DescriptionsHigh_example2,
    exp.intro_DescriptionsHigh_example3,
    exp.intro_HighDescriptionsAfterExamples,
    exp.preloadHighMI, 
    exp.task_highMI,
    dv, 
 //   exp.intro_LowDescriptionsAfterExamples,
 //  exp.intro_toSecond,
    exp.preloadLowMI_examples, 
   exp.intro_DescriptionsLow_example0,
   exp.intro_DescriptionsLow_example1,
   exp.intro_DescriptionsLow_example2,
   exp.intro_DescriptionsLow_example3,
   exp.preloadLowMI, 
   exp.task_lowMI, 
   dv, 
   exp.demographics]; 


jsPsych.run(timeline);

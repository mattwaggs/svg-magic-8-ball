/*
 * We created an image of a magic 8 ball in adobe illustator.
 * We then exported that image as a .svg file and copied the
 * contents of it here.
 * 
 * We can now insert the svg into our page
 * and manipulate it with javascript and css.
 */
var getSvgImage = function() {

    var svgContents = `
        <?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600px"height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve"><g id="Layer_6" display="none"><rect x="-269.5" y="-157.396" display="inline" fill="#212028" width="1139" height="860"/></g><g id="base_1_"><circle id="clip-template" display="none" fill="#0B0B0B" stroke="#000000" stroke-miterlimit="10" cx="300" cy="300" r="274.617"/><circle id="base" fill="#0B0B0B" stroke="#000000" stroke-miterlimit="10" cx="300" cy="300" r="274.617"/><path fill="#121212" d="M481.317,93.77C432.557,57.083,369.229,34.913,300,34.913c-69.228,0-132.556,22.169-181.317,58.856c-57.197,50.326-93.3,124.057-93.3,206.231c0,10.489,0.609,20.834,1.754,31.018C53.855,441.886,165.862,525.087,300,525.087s246.145-83.201,272.863-194.069c1.145-10.184,1.754-20.528,1.754-31.018C574.617,217.827,538.514,144.096,481.317,93.77z"/><path fill="#171617" d="M300,41.584c-82.145,0-155.857,29.808-206.18,77.042c-39.023,44.326-63.97,101.33-67.877,164.043C34.797,401.392,154.094,495.423,300,495.423c145.904,0,265.201-94.029,274.058-212.75c-3.906-62.716-28.854-119.722-67.879-164.048C455.855,71.391,382.144,41.584,300,41.584z"/><ellipse fill="#1B1B1C" cx="300" cy="250.121" rx="256.785" ry="201.007"/><ellipse fill="#1B1B1C" cx="-185.497" cy="68.242" rx="1.342" ry="0.335"/><g opacity="0.1"><path opacity="0.7" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M89.375,125.055C49.438,173.352,25.383,235.577,25.383,303.5c0,11.671,0.72,23.17,2.098,34.463C46.2,383.75,84.063,423.059,133.894,450.395c-31.361-48.152-50.243-110.14-50.243-177.791s18.882-129.638,50.243-177.791C117.708,103.692,102.79,113.838,89.375,125.055z"/><path opacity="0.7" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M510.627,125.057c-13.415-11.217-28.334-21.363-44.52-30.243c31.361,48.153,50.243,110.139,50.243,177.79s-18.882,129.637-50.243,177.791c49.83-27.337,87.692-66.646,106.412-112.433c1.378-11.293,2.098-22.792,2.098-34.462C574.617,235.578,550.563,173.353,510.627,125.057z"/></g></g><g id="reflection"><path opacity="0.1" fill="#F1F2F2" d="M453.982,139.48c-12.049-29.381-35.485-47.595-52.35-40.68c-2.274,0.933-4.304,2.287-6.099,3.983c16.744,10.466,32.985,30.573,43.539,56.307c6.147,14.992,9.572,29.977,10.466,43.679C462.705,192.932,464.936,166.191,453.982,139.48z"/><path opacity="0.1" fill="#F1F2F2" d="M469.526,123.648c-6.169-15.043-18.169-24.369-26.804-20.828c-1.164,0.478-2.203,1.171-3.122,2.039c8.573,5.359,16.889,15.653,22.292,28.829c3.147,7.676,4.901,15.349,5.358,22.364C473.992,151.015,475.134,137.324,469.526,123.648z"/></g><g id="hole"><ellipse fill="#121212" cx="300" cy="220.255" rx="127.926" ry="118.286"/><ellipse opacity="0.1" fill="#F1F2F2" cx="300" cy="218.255" rx="127.926" ry="118.286"/><ellipse opacity="0.1" fill="#F1F2F2" cx="300" cy="220.255" rx="121.215" ry="112.081"/><ellipse fill="#0B0B0B" cx="300" cy="218.255" rx="121.215" ry="112.081"/></g><g id="overlay"><g id="triangle" style="opacity: 0"><polygon id="triangle-solid" fill="#2B3990" points="300,170.899 388.643,170.899 344.322,230.949 300,291 255.678,230.949 211.357,170.899 "/>
            <text id="line-1" text-anchor="middle" transform="matrix(1 0 0 1 300 197.5)" fill="#FFFFFF" font-family="'Arial'" font-size="18"></text>
            <text id="line-2" text-anchor="middle" transform="matrix(1 0 0 1 300 219.5549)" fill="#FFFFFF" font-family="'Arial'" font-size="18"></text>
            <text id="line-3" text-anchor="middle" transform="matrix(1 0 0 1 300 240.5)" fill="#FFFFFF" font-family="'Arial'" font-size="18"></text>
        </g></g><ellipse id="overlay-black" opacity="0.1" fill="#0B0B0B" cx="300" cy="219.255" rx="121.215" ry="112.081"/></g></svg>
    `;

    return svgContents;
}

/*
 * Get a random response from our list of responses
 */
function getRandomResponse() {
    var index = getRandomNumber(responses.length);
    return responses[index];
}

/*
 * Generate a random number from 0 to the maximum value specified
 */
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max+1));
}

/*
 * Fill the result triangle with multiple lines of text
 */
function fillTextWithResponse(response) {

    var lines = response.split('\n');

    document.getElementById('line-1').innerHTML = lines[0] || '';
    document.getElementById('line-2').innerHTML = lines[1] || '';
    document.getElementById('line-3').innerHTML = lines[2] || '';
}

function setupAskListener() {
    var form = document.getElementById('question-form');
    var question = document.getElementById('question');
    question.focus(); // Force focus to the question on startup

    form.onsubmit = function(e) {
        e.preventDefault(); // stop the page from going anywhere
        if (question.value.trim() == '') {
            return; // the user did not ask a question, return immediately
        }

        question.value = '' // clear the question text

        var ball = document.getElementById('svg-goes-here');
        ball.className = 'shake'; // make the ball shake

        var triangle = document.getElementById('triangle');
        triangle.style.transition = 'all 0s';
        triangle.style.opacity = 0;

        // remove the shake animation after 1s so it can be
        // added again for a different question
        setTimeout(function() { 
            ball.className = '';
            triangle.style.transition = 'all 3s';
            triangle.style.opacity = 1;
        }, 1000);

        var response = getRandomResponse();
        fillTextWithResponse(response);

        question.focus(); // Return focus to the text field for continuous questions.
    }
}

// run our code

var target = document.getElementById('svg-goes-here');
target.innerHTML = getSvgImage();
setupAskListener();

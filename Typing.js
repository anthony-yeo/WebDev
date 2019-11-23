document.addEventListener('DOMContentLoaded', function(event){
    //array with texts to type in typewriter animation

    var dataText = [ "Test your typing skills", "Find out what your WPM is", "Speed Typers"];

    //type one text in the typewriter
    //Recursion until the text is finished

    function typeWriter(text, i, fnCallback){
        //check if text is finished
        if (i < (text.length)) {
            //add next character in string
            document.querySelector("h1").innerHTML = text.substring(0, i+1) + '<span aria-hidden = "true"></span>';

            //pause
            setTimeout(function(){
                typeWriter(text, i + 1, fnCallback)
            }, 100);

        }

        // if text is finished, recursion
        else if (typeof fnCallback == 'function'){
            //callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {

        //check if dataText[i] exits

        if (typeof dataText[i] == 'undefined'){
            //text doesn't exist
            setTimeout(function() {
                return;
            }, 200000);
        }

        if (i< dataText[i].length){
            //text exists
            typeWriter(dataText[i], 0, function(){
                //after callback and text is finished, start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});
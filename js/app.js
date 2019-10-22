$('.enter_link').click(function() { 
    $(this).parent().fadeOut(500);
    
});
$('#enterBtn').on('click', run);

// start counting down 
var number = 30;
var intervalId;
// start button for start count down seconds 
// $('#btn-Start').on('click', run);
// $('#btn-Done').on('click', stop);

// main function for decreasing number
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
// once seconds reach to 0 it will stop
function stop(){
    clearInterval(intervalId);

}

// giving correct & incorrect answer value it starts 0
var Correct = 0;
var Incorrect = 0;

function decrement(){
 
   number--;
// desplaying seconds
    $("#time-left").html(number);
    // console.log(number)
// conditional statement for each questions for cheching correct and incorrect answer
    if(number === 0){
         stop();
         
// 1дахь асуулт
        if($('#5').is(':checked')){
            // alert("it's checked");
            Correct++;
            $('#correct-answer').html(Correct);
        }
        else{
            Incorrect++;
            $('#incorrect-answer').html(Incorrect);
               
        }
    
// 2дахь асуулт 
        if($('#pacific').is(':checked')){
            // alert("it's checked");
            Correct++;
            $('#correct-answer').html(Correct);
        }
        else{
            Incorrect++;
            $('#incorrect-answer').html(Incorrect);
            //    alert("wrong");
        }
        
// 3дахь асуулт
        if($('#astralia').is(':checked')){
            // alert("it's checked");
            Correct++;
            $('#correct-answer').html(Correct);
        }
        else{
            Incorrect++;
            $('#incorrect-answer').html(Incorrect);
            //    alert("wrong");
        }
// 4дахь асуулт
        if($('#23').is(':checked')){
            // alert("it's checked");
            Correct++;
            $('#correct-answer').html(Correct);
        }
        else{
            Incorrect++;
            $('#incorrect-answer').html(Incorrect);
            //    alert("wrong");
        }

// 5дахь асуулт
        if($('#nile').is(':checked')){
            // alert("it's checked");
            Correct++;
            $('#correct-answer').html(Correct);
        }
        else{
            Incorrect++;
            $('#incorrect-answer').html(Incorrect);
            //    alert("wrong");
        }

// 6дахь асуулт
        if($('#365').is(':checked')){
            // alert("it's checked");
            Correct++;
            $('#correct-answer').html(Correct);
        }
        else{
            Incorrect++;
            $('#incorrect-answer').html(Incorrect);
            //    alert("wrong");
        }
// 
// Done button!
//  function done(){
//     clearInterval(intervalId);
     
// }


// if($('#btn-Done').on('click', done)){
//     Correct++;
// }
// else{
//     Incorrect++;
  
  
//  }




    }
}


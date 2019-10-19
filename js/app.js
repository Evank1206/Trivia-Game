
var number = 5;

var intervalId;

$('#btn-Start').on('click', run);

$('#btn-Done').on('click', result)


function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement(){
 
   number--;

    $("#time-left").html(number);
    // console.log(number)
    if(number === 0){
        stop();
        
        if('#5'=== 5){
            correct++;
        }else{
            incorrect++
        }
    }
}

function stop(){
    clearInterval(intervalId);
}

function result(){

}

// var thirtysec = setTimeout(thirtySeconds, 1000*3);

// function thirtySeconds(){
//     $("#time-left").html(number);

//     // alert('hi');
//     console.log('hello ');

// var count = thirtysec, 

// var thirtysec = Math.floor((count % (1000 * 60)) / 1000);





//1. Declare variables 
 var score = 0;

 var mins ;
 var secs = mins * 60;

 //2. Declare javascript runs after HTML and the start button

 $(document).ready(function(){
console.log ("Trivia Game running")
Decrement();
}
);

function countdown () {
    setTimeout (Decrement(), 60);
}

   async function f(){
   var promise = new Promise ((resolve, reject)=> {
     setTimeout (() => resolve ("done!"), 1000)  
    });    
    var result = await promise;
    alert(result);
}
    f();




//3. Decrement time to answer the trivia
async function Decrement (){
    var promise = new Promise ((resolve, reject) =>{
        setTimeout(() => {
            document.getElementById('Minutes');
            document.getElementById('Seconds');
            var seconds = $("#Minutes");
            var minutes = $("#Seconds");
            console.log ("promise");
            
            
        
                seconds.html = getseconds();
                minutes.html = getminutes();
                console.log ("B");
            
            if (mins < 0){
                alert('time up');
                minutes.html = 0;
                seconds.html = 0;
            } else { 
                secs--;
                console.log("C");
            }
            resolve("done");
        }, 1000)});
    await promise;
} 

function getminutes (){
minutes = Math.floor (secs /60);
    return mins;
}

function getseconds (){
    return secs - Math.round (mins * 60);
}



    $("#start-button").on("click", function() {
        var questions = [{
            prompt :" What is the pH of lemon juice?\n (a)acidic \n (b)neutral \n (c)basic",
            answer :"a"
        }, {prompt :"what is the pH of milk?\n (a)acidic \n (b)neutral \n (c)basic",
        answer :"c"
        }];
        for (var i = 0; i <questions.length; i++){
        var response =window.prompt(questions[i].prompt);
        if (response == questions[i].answer){
         score++;
         alert('correct!');
     } else {
         alert('wrong!');
     }
 }

});
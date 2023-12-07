var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var textbox = document.getElementById("textbox"); 

function start()
{
    textbox.innerHTML = " "; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    textbox.innerHTML = Content;
    console.log(Content);
    if(Content== "Toma mi selfie")
    {
        console.log("Tomando selfiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        speak();
    }
    
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Ttoommaannddoo  ttuu sseellffiiee eenn 55 sseegguunnddooss  gggggggggggggggggggghiiiiiiiiiiiighhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiihhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggrrrrrrrrrrrrrrrrrttttttttttttttttttttttttggggggggggggggggggggggggggggggggggghiasasfgedshjuidgojhihjhgijjhijihjihij";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
    save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");
function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id"selfie_image" src="'+data_uri+'">'
    });
}






































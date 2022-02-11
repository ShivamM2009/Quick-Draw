function setup(){
    canvas = createCanvas(300,300);
    canvas.position(525,280);
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth = window.speechSynthesis;
    
}
function cc(){
    background("white");

}
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
    
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifycanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error)
    }
    console.log(result);
    document.getElementById("label").innerHTML ="Label- "+result[0].label;
    document.getElementById("confidence").innerHTML = "Confidence- "+Math.round(result[0].confidence *100)+ "%"
    utter = new SpeechSynthesisUtterance(result[0].label);
    synth.speak(utter);
}
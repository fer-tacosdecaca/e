//https://teachablemachine.withgoogle.com/models/yNSbHuqVT/


function startt(){
navigator.mediaDevices.getUserMedia({audio: true})
classy = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yNSbHuqVT/model.json", modely)
}

function modely(){
console.log("hfjckkhghhfiugbkgjhhkhfuhkjfhkfukghdkjjkhjhhgsugiug");
classifier.classy(gotresults);
}

function gotresults(error, results){
console.log(results);
}
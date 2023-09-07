//https://teachablemachine.withgoogle.com/models/yNSbHuqVT/



function startt(){
navigator.mediaDevices.getUserMedia({audio: true})
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yNSbHuqVT/model.json", modely)
}

function modely(){
console.log("hfjckkhghhfiugbkgjhhkhfuhkjfhkfukghdkjjkhjhhgsugiug");
classifier.classify(gotresults);
}

function gotresults(error, results){
if (error) {
    console.error(error);
} else 
    
console.log(results);
    document.getElementById("result_label").innerHTML = 'Escucho -' + [0].label;
document.getElementById("result_confidence").innerHTML = 'precicion -' +(results[0].confidence*100).toFixed(2)+"%";
 
    img =document.getElementById("alien1")
    img1 =document.getElementById("alien2")
    img2 =document.getElementById("alien4")
    img3 =document.getElementById("alien4")
    
    if(results[0].label == "pou"){  
    img2.src = "aliens-03.gif"
    img1.src = "aliens-02.png"
    img.src = "aliens-01.png"
    img3.src = "aliens-04.png"

   
   
    }
    else if(results[0].label == "A"){  
    img.src = "aliens-01.gif"
    img1.src = "aliens-02.png"
    img2.src = "aliens-03.png"
    img3.src = "aliens-04.png"


    }
    
    else if(results[0].label == "I"){  
    img2.src = "aliens-02.gif"
    img.src = "aliens-01.png"
    img2.src = "aliens-03.png"
    img3.src = "aliens-04.png"


    }









    
} 



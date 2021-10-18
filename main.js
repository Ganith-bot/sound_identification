function start(){
navigator.mediaDevices.getUserMedia({audio : true});
classification = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YvVy9wXCX/model.json", modelReady);
}

function modelReady(){
    console.log("the ml version used in this project - ", ml5.version);
    classification.classify(gotResult);
}

function gotResult(error, results){
    if (error){
    console.error(error);
}
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("hear1").innerHTML =  results[0].label;
        document.getElementById("accuracy1").innerHTML = results[0].confidence.toFixed(2);
    }
}
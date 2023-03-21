function startClass(){
    navigator.mediaDevices.getUserMedia({ audio:true });
 classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7vK7Q_BF2/model.json",modelready)
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        random_number_r = Math.floor(Math.round() * 255) + 1;
        random_number_g = Math.floor(Math.round() * 255) + 1;
        random_number_b = Math.floor(Math.round() * 255) + 1;
        document.getElementById("animal_result").innerHTML = "I can hear - "+ results[0].label;
        document.getElementById("animal_confidence").innerHTML = "Accuracy - "+ (results[0].confidence * 100).toFixed(2) +"%";
        document.getElementById("animal_result").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("animal_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById('MEOW UNO');
        img_1 = document.getElementById('DOGGY DOS');
        img_2 = document.getElementById('POISON BOI');
        img_3 = document.getElementById('EAR2')
        if(results[0].label=="BARKING"){
            img.src = 'MEOW UNO.jpg';
            img_1.src = 'DOGGY DOS.gif';
            img_2.src = 'POISEN BOI.jpg';
            img_3.src = 'EAR2.jpg';
        }
        else if(results[0].label=="MEOWING"){
            img_1.src = 'DOGGY DOS.jpg';
            img_3.src = 'EAR2.jpg';
            img_2.src = 'POISON BOI.jpg';
            img.src = 'MEOW UNO.gif';
        }
        else if(results[0].label=="HISSING"){
            img_2.src = 'POISON BOI.gif';
            img.src = 'MEOW UNO.jpg';
            img_1.src = 'DOGGY DOS.jpg';
            img_3.src = 'EAR2.jpg';
        }
        else {
            img_3.src = 'EAR2.gif';
            img.src = 'MEOW UNO.jpg';
            img_1.src = 'DOGGY DOS.jpg';
            img_2.src = 'POISON BOI.jpg';
        }

    }
}
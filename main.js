//https://teachablemachine.withgoogle.com/models/N2Q_hwIJ7/

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/N2Q_hwIJ7/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
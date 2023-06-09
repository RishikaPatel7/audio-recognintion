function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier =ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3Tpwuwq1t/model.json",modelready);
}

function modelready()
{
    classifier.classify(gotResults);
}
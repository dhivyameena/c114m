noseX=0;
noseY=0;

function preload() {
    mustache=loadImage('https://www.amazon.com/MyMealivos-Megaphone-Detachable-Microphone-Lightweight/dp/B0B1PQHKY1/ref=sr_1_3_sspa?keywords=megaphone%2Bwith%2Brechargeable%2Bbattery&qid=1663544405&sr=8-3-spons&smid=A1SA94RDHZ1BSE&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWVFFWkVaTVJTNDBNJmVuY3J5cHRlZElkPUEwMTUxMzc1M0tMVzFDQkNKSUg1JmVuY3J5cHRlZEFkSWQ9QTA3OTE2NTMzM0xLVEhSV1oxRkFQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1')
}

function setup() {
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 25, 15)
}

function take_snapshot() {
    save('filter_app_pic.png')
}

function modelLoaded() {
    console.log('posenet is loaded');
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+18;  
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
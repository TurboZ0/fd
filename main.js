noseX="";
noseY="";
lefteyex="";
lefteyey="";
righteyex="";
righteyey="";

function preload() {
    image47=loadImage ("https://i.postimg.cc/c1K8GY4d/Clown.png");
    imageak=loadImage ("https://i.postimg.cc/bNfb0T1s/blueeyes-eyes-lens-freetoedit-11562869614sh2nmg4ah7-removebg-preview.png")
}


function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, foundresult);
    posenet.on("pose", poseing); 
}
function foundresult() {
    console.log("Posenet has finally been loaded");
}
function poseing(onresult) {
    console.log(onresult);
    console.log(onresult[0].pose.nose.x);
    console.log(onresult[0].pose.nose.y);
    
    noseX=onresult[0].pose.nose.x;
    noseY=onresult[0].pose.nose.y;
    lefteyex=onresult[0].pose.leftEye.x;
    lefteyey=onresult[0].pose.leftEye.y;
    righteyex=onresult[0].pose.rightEye.x;
    righteyey=onresult[0].pose.rightEye.y;
    }
function snapshot() {
    save("imagethatisdownloading.png");
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(image47, noseX-75, noseY+1, 30, 30);
    image(imageak, lefteyex, lefteyey, 35, 35);
}
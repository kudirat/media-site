// This is a test of the p5LiveMedia webrtc library and associated service.
// Open this sketch up 2 times to send video back and forth

let myVideo;
let otherVideo;
let currRoom;

const connectRoom = document.getElementById('connectRoom');
currRoom = document.getElementById('roomInput');

let constraints = {audio: true, video: true};

connectRoom.addEventListener('click', function(e) {
    connectToRoom(currRoom.value);
});

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent(videoStuff)
}

function updateButton() {
  let temp = document.getElementById('roomInput').value;
  if(temp == "connect!") {
    document.getElementById('connectRoom').value = "leave room";
  }
}

function connectToRoom(currRoom) {
    myVideo = createCapture(VIDEO, 
      function(stream) {
        let p5l = new p5LiveMedia(this, "CAPTURE", stream, currRoom);
        p5l.on('stream', gotStream);
      }
    );  
    myVideo.muted = true;     
    myVideo.hide();
}

function draw() {
  background(165, 188, 214);
  stroke(255);
  if (myVideo != null) {
    image(myVideo,0,0,width/2,height);
    text("Thing 1", 10, 10);
  }
  fill(90,0,6);
  ellipse(mouseX,mouseY,100,100);

  if (otherVideo != null) {
    image(otherVideo,width/2 + 10,0,width/2,height);
    text("Thing 2", width/2+10, 10);
  }  
}

// We got a new stream!
function gotStream(stream, id) {
  // This is just like a video/stream from createCapture(VIDEO)
  otherVideo = stream;
  //otherVideo.id and id are the same and unique identifiers
  otherVideo.hide();
}
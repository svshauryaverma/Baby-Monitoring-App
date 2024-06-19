img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(380,380);
    cavas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetetctor('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : object Detected";

}

function draw()
{
image(video, 0, 0, 380,380);
    if(status !="")
        {
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(video, gotReslt);
            for(i 0; i < object.length; i++)
                {
                    document.getElementsById("status").innerHTML = "Status : Object Detected";
                    document.getElementById("number_of_objects").innerHTML  = "number of objects detected are : "+ objects.length;
                    fill(r,g,b);
                    percent = floor(objects[i].confidence * 100);
                    text(objects[i].label + " " + percent + "%", objects[i].x +15, objects[i].y + 15);
                    noFill();
                    stroke(r,g,b)
                    rect(objects[i].x, objects[i].y, objects.width, objects[i].height);
                }
        }

}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, result)
{
    if (error)
        {
            console.log(error);
        }
        console.log(results);
        objects= results;
}



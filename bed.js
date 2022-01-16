img="";
status="";
objects=[];
function preload()
{
    img=loadImage("https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFzdGVyJTIwYmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80");
}
function setup()
{
    canvas=createCanvas(500,350);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function modelloaded()
{
    console.log("model is loaded");
    status=true;
    objectdetector.detect(img,gotresult);
}
function gotresult(error,results)
{
    if(error)
{
console.log(error);
 }
    console.log(results);
    objects=results;
}
function draw()
{
    image(img,0,0,500,350);
    if(status!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status:object detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+25,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x+25,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
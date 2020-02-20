var front = false;
document.getElementById('flip-button').onclick = () => { front = !front; };

var constraints = { video: { facingMode: (front? "user" : "environment") } };

// le preguntamos al navegador para usar la camara y se resuelve como una promesa
navigator.mediaDevices.getUserMedia(constraints)
.then( (stream)=> {
    console.log(stream)

    let video = document.getElementById("video")
    video.srcObject = stream

} )
.catch( (err) => { console.log(err) } )


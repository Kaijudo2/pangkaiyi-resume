document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
});

document.querySelector('myVideo').playbackRate = 0.1;

document.getElementsByClassName("Google_Drive").addEventListener("click", GoogleDrive);
document.getElementsByClassName("Linkedin").addEventListener("click", Linkedin);
document.getElementsByClassName("Mail").addEventListener("click", Mail);

function GoogleDrive(){
    // document.getElementsByClassName("Google_Drive")
    window.open("https://www.w3schools.com");
}

function Linkedin(){
    document.getElementById("Linkedin")
}

function Mail(){
    document.getElementById("Google_Drive")
}
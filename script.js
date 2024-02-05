let song = document.getElementById("songName");
let url = "https://api.lyrics.ovh/v1/"
let words= document.getElementById("lyrics")
const btn = document.getElementById("search")

btn.addEventListener("click" , async () =>{
    let inpSong = document.getElementById("songName").value;
    let inpArtist = document.getElementById("artistName").value;
    let songName = await fetch(`${url}${inpArtist}/${inpSong}`);
    let response = await songName.json()
    let dataCon = await console.log(response)
    let l = response.lyrics
    words.innerHTML = l.slice(45);
})


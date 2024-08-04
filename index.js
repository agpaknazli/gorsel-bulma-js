const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const buttonArama = document.querySelector(".arama");
const buttonSil = document.querySelector(".delete");
const img = document.querySelector(".imageList");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit", search);
}

function search(e){
    const value = input.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID 7GECwCqz3i2yCXIZTiHyfuBB_tse4DOKnFW1sUt6ypc"
        }
    })
    .then((res) => res.json())
    .then((data) =>{
        Array.from(data.results).forEach((img)=>{
            addİmgeTo(img.urls.small);
        })

    })
    .catch((err) => console.log(err));

    e.preventDefault();
}


function addİmgeTo(url){
const div=document.createElement("div");
div.className="card"
const imge=document.createElement("img");
imge.setAttribute("src",url);
}
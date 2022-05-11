import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { renderTeams } from "./ui/renderTeams.js";
import { searchTeams } from "./ui/searchTeams.js";

import { getExcistingFavs } from "./utils/favFunction.js";

const productsUrl = baseUrl;

const favourites = getExcistingFavs();

(async function createList () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(teams);
        renderTeams(teams);
        searchTeams(teams);

        container.innerHTML = "";

        for (let i = 0; i < json.length; i++){
            let cssClass = "far";

            // check through favs array
            // does the product id exist in the favs array
            const doesObjectExist = favourites.find(function (fav) {
                console.log(fav);
        
                return parseInt(fav.id) === json[i].id;
            });
        
            console.log(doesObjectExist);
        
            // if is in the array, change the style of the i element
            if (doesObjectExist) {
                cssClass = "fa";
            }
       
        //json.forEach(function (product) {
            console.log(json);
            container.innerHTML += `<div class="product">
            <h4> ${json[i].id}</h4>  
            <h4> ${json[i].title}</h4>         
            <p>Author: ${json[i].author}</p>
            <p>Summary: ${json[i].summary}</p>
            <i class="${cssClass} fa-heart" data-id="${json[i].id}" data-author="${json[i].author}" data-title="${json[i].title}"  </i>
                                    </div>`;
        };


        const favButtons = document.querySelectorAll(".product i");
 console.log(favButtons);


//for (let i = 0; i < favButtons.length; i++) {
  //  favButtons[i].addEventListener("click", handleClick)
//}

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick(){
//console.log(event);
this.classList.toggle("fa");
this.classList.toggle("far");

const id = this.dataset.id;
const author = this.dataset.author;
const title = this.dataset.title;

//console.log("title", title);

const currentFavs = getExcistingFavs();
//console.log(currentFavs);

const productExists = currentFavs.find(function(fav){
return fav.id === id;
});

if(productExists === undefined){
    const product = {id: id, author: author, title: title};

    currentFavs.push(product);
    
    saveFavs(currentFavs);
}

else{
const newFavs = currentFavs.filter(fav => fav.id !== id);
saveFavs(newFavs);




}
//console.log("productExists" , productExists);



}


function saveFavs (favs){
    localStorage.setItem("favourites", JSON.stringify(favs));
}

    } 
    
    
    
    
    
    
    catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();



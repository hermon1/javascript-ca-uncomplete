import { getExcistingFavs } from "./utils/favFunction.js";
import { baseUrl } from "./settings/api.js";


const favourites = getExcistingFavs();

const productContainer = document.querySelector(".product-container");

if (favourites.length === 0) {
    productContainer.innerHTML = "No favourites yet";
}





        for (let i = 0; i < favourites.length; i++){
        //json.forEach(function (product) {
            console.log(favourites);
            productContainer.innerHTML += `<div class="product"${favourites[i].id}">
            <h4> ${favourites[i].title}</h4>         
            <p>Author: ${favourites[i].author}</p>
            <p>Summary: ${favourites[i].summary}</p>
            <i class="fa fa-heart"  </i>
                                    </div>`;





        };

        //function button (button){
          //  document.getElementsByClassName(".button").addEventListener("click", localStorage.clear());
    //
      //      productContainer.innerHTML = "";
    //
      //      };

            document.querySelector(".button").addEventListener("click", function() {
                localStorage.clear();
                productContainer.innerHTML = "";
              });



       
 
    
    
    
    
    
    
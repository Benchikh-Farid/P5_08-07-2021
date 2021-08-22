
const ContentItems = document.getElementById("content");
const productInStorage = JSON.parse(localStorage.getItem("productIn"));  
    console.log(productInStorage);
//---------------------------------------------------------------------------
// injection du Html avec les valeurs selectionnés
if (productInStorage===null) {
	alert("Votre panier est vide!");
} else {
	productInStorage.forEach(item => {
		// displayChoice(item);
		displayPanier(item);
	});
}

function displayPanier(item) {

    let itemsContent = document.createElement ("article");
    itemsContent.classList.add("cards");
    itemsContent.setAttribute("id","content_lenses");

    let imageProduct = document.createElement("img");
    imageProduct.src = item.image;
    imageProduct.classList.add("card-img-top");

    let contentProduct = document.createElement("div");
    contentProduct.classList.add("card-body");

    let nameProduct = document.createElement("h4");
    nameProduct.classList.add("card-title")
    nameProduct.textContent = item.nameOfProduct;

    let priceProduct = document.createElement("h5");
    priceProduct.classList.add("card-text");
    priceProduct.textContent = item.price / 100 + "€";

    let contentLenses = document.createElement("p");
    contentLenses.classList.add("card-title");
    contentLenses.textContent = "Lentilles :" + item.lenses;

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btn-dark");
    btnRemove.textContent= "supprimer"
    btnRemove.setAttribute("id","btnRemove");
    btnRemove.addEventListener("click", () => {
        removeItemFromCart(item.id);
    });


    itemsContent.appendChild(imageProduct);
    itemsContent.appendChild(contentProduct);
    contentProduct.appendChild(nameProduct);
    contentProduct.appendChild(priceProduct);
    contentProduct.appendChild(contentLenses);
    contentProduct.appendChild(btnRemove);
    ContentItems.appendChild(itemsContent);
};

// Supprimer le panier //-------------------------------------------------------

document.getElementById("all-delete").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("productIn");
    document.location.reload();	
});
//------------------------------------------------------------------------------
// supprimer un produit 
function removeItemFromCart(id) {
	for (let k in productInStorage) {
		if (productInStorage[k].id === id) {
			productInStorage.splice(k, 1);
			break;
		}
        
	}
    // renvoi la variable dans le localStorage
    localStorage.setItem("productIn", JSON.stringify(productInStorage));
	document.location.reload();
};
//------------------------------------------------------------------------------
// le prix total

let totalPrix = [];
if(productInStorage === null){
    document.querySelector(".full-cart").textContent = `Votre panier est vide! `
}else{
for (let i = 0; i< productInStorage.length; i++){
     let priceProductIn= productInStorage[i].price/100;
     totalPrix.push(priceProductIn)
     console.log(totalPrix);
      
};
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = totalPrix.reduce(reducer,0);

document.querySelector(".full-cart").textContent =`le prix total est : ${prixTotal}€`
};











// function displayChoice (item) { 
//     //   let  produitHtml =[];  
//        const produitHtml =
//             `
//             <article class = "cards" id = "content_lenses">
//                 <img class = "card-img-top" src = "${item.image}" alt ="image de ${item.nameOfProduct}">
//                     <div class = "card-body bg-light" >
//                         <h4 class = "card-title">${item.nameOfProduct}</h4>
//                         <h5 class = "card-text">${item.price / 100 + "€"}</h5><br>
//                         <p class = "card-title">Lentilles ${item.lenses}</p>
//                     <div class = "content_btn">
//                         <button onClick=`addToCart("${camera._id}")` class = "btn btn-dark btnRemove" id ="btnRemove">supprimer</button>
//                     </div>
//                 </div>
                
                   
//             </article>
//             `;
//             contentProduct.innerHTML += produitHtml;         
// };



        // quantité du produit //
//     const label = document.createElement("label");
//     label.id = "select";
//     label.textContent = "Quantité :"
//     const quantity = document.createElement("select");
//     quantity.id = "select-quantity";
   

//     for (let i = 1; i < 10; i++) {
//     // afficher une liste proposant une quantité pour un produit
//     const nbrItems = document.createElement("option");
//     if (i == item.quantity) {
//         nbrItems.setAttribute("selected", "selected");
//     }
//     nbrItems.textContent = i;
//     quantity.appendChild(nbrItems);
// }
// quantity.addEventListener("change", e => {
//     // e.preventDefault();
//     const quantityChoice = document.getElementById("select-quantity").value;
//     item.quantity = quantityChoice;
//     location.reload();
//     localStorage.setItem("productIn", JSON.stringify(productInStorage));
// });
    


// let lenses = [];
// for ( i = 0; i < productInStorage.length; i++){
// // récupérer les données du produit selection et l'option choisie
// lenses = productInStorage[i].lenses;
// const id = productInStorage[i].id; 
// console.log(id);
// let urlFetch = `http://localhost:3000/api/cameras/${id}`;
// console.log(urlFetch);     

// fetch (urlFetch)
// .then (res => res.json())
// .then (data =>{ 
//     console.log(data);
    // displayChoice(data,lenses) 
    // listnerProduct();
// })
    // deleteProduct(data) 
    // .then (product => listnerProduct())
    

// .catch(err => console.log(" problème de connexion ", err));
// }








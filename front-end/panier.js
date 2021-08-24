
const ContentItems = document.getElementById("content");
const productInStorage = JSON.parse(localStorage.getItem("productIn"));  
    console.log(productInStorage);
//---------------------------------------------------------------------------
// injection du Html avec les valeurs selectionnés ou affichage de msg si panier vide 
if (productInStorage===null) {
	alert("Votre panier est vide!");
} else {
	productInStorage.forEach(item => {
		// displayChoice(item);
		displayPanier(item);
	});
}
// fonction qui affiche le produit selectionner
function displayPanier(item) {

    let itemsContent = document.createElement ("div");
    itemsContent.classList.add("d-flex", "p-2", "bd-highlight", "content-items");
    itemsContent.setAttribute("id","content_lenses");

    let imageProduct = document.createElement("img");
    imageProduct.src = item.image;
    imageProduct.classList.add("img-thumbnail", "img-panier");

    let contentProduct = document.createElement("div");
    contentProduct.classList.add("product-info");

    let nameProduct = document.createElement("h4");
    nameProduct.classList.add("card-title")
    nameProduct.textContent = item.nameOfProduct;

    let contentProductBis = document.createElement("div");
    contentProductBis.classList.add("product-info", "product-info-bis");

    let contentLenses = document.createElement("p");
    contentLenses.classList.add("card-title");
    contentLenses.textContent = "Lentilles :" + item.lenses;

    let priceProduct = document.createElement("h5");
    priceProduct.classList.add("card-text");
    priceProduct.textContent = item.price / 100 + "€";

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btn-dark");
    btnRemove.textContent= "supprimer"
    btnRemove.setAttribute("id","btnRemove");
    btnRemove.addEventListener("click", () => {
        removeItemFromCart(item.id);
    });


    itemsContent.appendChild(imageProduct);
    itemsContent.appendChild(contentProduct);
    itemsContent.appendChild(contentProductBis);
    contentProductBis.appendChild(priceProduct);
    contentProductBis.appendChild(btnRemove);
    contentProduct.appendChild(nameProduct);
    contentProduct.appendChild(contentLenses);
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
// calcule du prix total
// la variable qui contient le tableau des prix 
let totalPrix = [];
if(productInStorage === null){
    document.querySelector(".full-cart").textContent = `Votre panier est vide! `
}else{
    // mettre les prix des produit dans un tableau
for (let i = 0; i< productInStorage.length; i++){
     let priceProductIn= productInStorage[i].price/100;
     totalPrix.push(priceProductIn)
     console.log(totalPrix);
      
};

// calcule du prix total avec reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = totalPrix.reduce(reducer,0);

document.querySelector(".full-cart").textContent =`le prix total est : ${prixTotal}€`
};






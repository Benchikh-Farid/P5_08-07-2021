
// récuperer l'id de la page
const querystring = window.location.search;
// extraire l'id
 const idProduct = new URLSearchParams(querystring);
const id = idProduct.get("id");
// console.log(urlId);
const contentProduct = document.querySelector(".flex-product");
const urlFetch = `http://localhost:3000/api/cameras/${id}`
// appelle de l'api et injection de HTML
 
const fetchProduct =  () => {
      fetch(urlFetch)
     .then(res => res.json()) // convertit le resultat au format json*/
     .then((product) => {
       displayProduct (product)
       addToCard (product)
       addLens (product)})
       
     .catch(err => console.log(" problème de connexion ", err));
     };
     
const displayProduct = (product) => {
  // console.log(product);
  
     const  produitHtml =  `
      <div class = "card" style="width: 30rem;">
           <img class = "card-img-top" src = ${product.imageUrl} alt ="image de ${product.name}">
          <div class = "card-body bg-light">
             <h2 class = "card-title">${product.name}</h2>
             <p class = "card-text">${product.description}</p>
             <h3 class = "card-text">${product.price/100 + "€"}</3> <br><br>
             <label for="lens">Lentilles</label><br>
             <select name="lens" id="lens" class = "card-text">
             </select>
             </div>
             <button class = "btn btn-primary" id = "select">Ajouter au Panier</button>
             </div>
             `
             contentProduct.innerHTML = produitHtml;

};
// -------------------------------------------------------------

addLens = (product) => {
  const contentLens = document.getElementById("lens");
  for (let i=0; i < (product.lenses).length; i++ ){
    let contentOption = document.createElement("option");
    contentOption.setAttribute("value",(product.lenses)[i]);
    contentOption.textContent =(product.lenses)[i];
    contentLens.appendChild(contentOption);
  };
}

//---------------------------------------------------------------
// ajout au panier du produit selectionner
const addToCard = (product) => { 
  const containerData = document.getElementById("select");
  containerData.addEventListener("click", (e)=> {
    e.preventDefault();
  // récupérer l'option selectionner par  
  const selectElmt = document.getElementById("lens");
  const lenses = selectElmt.value; 
 
// la variable qui contient les key et value qui sont dans le locale storage 
   const contentPanier = {
    image: product.imageUrl,
    nameOfProduct:product.name,
    description:product.description,
    price:product.price,
    id,
    lenses,
    
};
   // Le localstorage ----------------------
   let productInStorage = JSON.parse(localStorage.getItem("productIn"))||[];
   // JSON.parse pour convertir les données du localstorage qui sont au format JSON en objet javascript  
   console.log(productInStorage);
   let itemExist = false;
    productInStorage.forEach(item => {
      // acces aux elements (boucle)
      if ((item.id === contentPanier.id)) {
        // quantity++;
        itemExist = true;
      }
    });
   if(!itemExist){
    // s'il est vide 
    productInStorage.push(contentPanier)  
  }
  localStorage.setItem("productIn", JSON.stringify(productInStorage))
});
}
document.addEventListener("DOMContentLoaded", fetchProduct); 



  
    
    
  
//-------------------------------------------------------

 

















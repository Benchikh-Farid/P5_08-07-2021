
// récuperer l'id de la page
const querystring = window.location.search;
// extraire l'id
 const idProduct = new URLSearchParams(querystring);
const urlId = idProduct.get("id");
// console.log(urlId);
const contentProduct = document.querySelector(".flex-product");
const urlFetch = `http://localhost:3000/api/cameras/${urlId}`
// appelle de l'api et injection de HTML
 
const fetchProduct =  () => {
      fetch(urlFetch)
     .then(res => res.json()) // convertit le resultat au format json*/
     .then((product) => {
       displayProduct (product)})
       
     .catch(err => console.log(" problème de connexion ", err));
     };
     
const displayProduct = (product) => {
     const  produitHtml =  `
      <div class = "card" style="width: 30rem;">
           <img class = "card-img-top" src = ${product.imageUrl} alt ="image de ${product.name}">
          <div class = "card-body bg-light">
             <h2 class = "card-title">${product.name}</h2>
             <p class = "card-text">${product.description}</p>
             <h3 class = "card-text">${product.price/100 + "€"}</3> <br><br>
           </div>
           <button class="btn btn-primary" id="select">Ajouter au Panier</button>
         </div>
  `
  contentProduct.innerHTML = produitHtml;

  // pointer le boutton d'ajout au panier 
  const containerData = document.getElementById("select");
  console.log(containerData);

  
  let contentPanier = {
  urlId,
  imageProduit: product.imageUrl,
  nameProduct: product.name,
  descriptionProduct:product.description,
  priceProduct:product.price/100 + "€",
};

// ecouter le click du boutton 
  containerData.addEventListener("click", (e)=> {
    e.preventDefault();
   console.log(contentPanier);
    });
  };
document.addEventListener("DOMContentLoaded", fetchProduct); 



  
    
    
  
//-------------------------------------------------------

 
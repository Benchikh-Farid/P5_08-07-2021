
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
const addToCard = (product) => {
  // pointer le boutton d'ajout au panier 
  const containerData = document.getElementById("select");

// ecouter le click du boutton 
  containerData.addEventListener("click", (e)=> {
    e.preventDefault();

  // ajout de l'option selectionner 
  const selectElmt = document.getElementById("lens");
  const lenses = selectElmt.value; 
 console.log(lenses);
 
// la variable qui contient les key et value qui sont dans le locale storage 
   let contentPanier = {
  id,
  lenses,
};
   // Le localstorage ----------------------
   
   let productInStorage = JSON.parse(localStorage.getItem("productIn"));
   // JSON.parse pour convertir les données du localstorage qui sont au format JSON en objet javascript  
  //  console.log(productInStorage);
   
   if(productInStorage){
    productInStorage.push(contentPanier)
    localStorage.setItem("productIn", JSON.stringify(productInStorage))

  }else{
    productInStorage = [];
    productInStorage.push(contentPanier)
    localStorage.setItem("productIn", JSON.stringify(productInStorage))
    // console.log(productInStorage);
    
  }
});
}
document.addEventListener("DOMContentLoaded", fetchProduct); 



  
    
    
  
//-------------------------------------------------------

 
















// // récuperer l'id de la page
// const querystring = window.location.search;
// // extraire l'id
//  const idProduct = new URLSearchParams(querystring);
// const id = idProduct.get("id");
// // console.log(urlId);
// const contentProduct = document.querySelector(".flex-product");
// const urlFetch = `http://localhost:3000/api/cameras/${id}`
// // appelle de l'api et injection de HTML
 

//       fetch(urlFetch)
//      .then(res => res.json()) // convertit le resultat au format json*/
//      .then((product) =>{
//        displayProduct (product)
//       //  addToCart (product)
//        const containerData = document.getElementById("selectId");
//        containerData.addEventListener("click", (e) => {
//         e.preventDefault();
//       })
//        })
//      .catch(err => console.log(" problème de connexion ", err));
     
 
// // document.addEventListener("DOMContentLoaded", fetchProduct);
// // ----------------------------------------------------------------

// const displayProduct = (product) => {
//      const  produitHtml =  `
//       <div class = "card" style="width: 30rem;">
//            <img class = "card-img-top" src = ${product.imageUrl} alt ="image de ${product.name}">
//           <div class = "card-body bg-light" id="select-lens">
//              <h2 class = "card-title">${product.name}</h2>
//              <p class = "card-text">${product.description}</p>
//              <h3 class = "card-text">${product.price/100 + "€"}</3> <br><br>
//            </div>
//            <button class="btn btn-primary" id="selectId">Ajouter au Panier</button>
//            </div>
//            `;
//            contentProduct.innerHTML = produitHtml;           
// };
// // ----------------------------------------------------------------------

// // pointer la balises "select"



// // stocker les lentilles dans variable 



// //  injecter le html 
// // for (let i= 0; i < (product.lenses).lenght; i++){
// // let lensOption = document.createElement("option");
// // lensOption.setAttribute("value",(product.lenses)[i]);
// // lensOption.textContent=(product.lenses)[i];
// // lens.innerHTML = lensOption;
// // };


// // --------------------------------------------------------
//   // const addToCart = () => {
//   //   // pointer le boutton d'ajout au panier 
    
    
//   // };
//    // Le localstorage ----------------------
//    // la variable qui contient les key et value qui sont dans le locale storage 
   
  
//    let productInStorage = JSON.parse(localStorage.getItem("productIn"));
//   //  // JSON.parse pour convertir les données du localstorage qui sont au format JSON en objet javascript  
//    if(productInStorage){
//     productInStorage.push(id)
//     localStorage.setItem("productIn", JSON.stringify(productInStorage))
//   }else{
//     productInStorage = [];
//     productInStorage.push(id)
//     localStorage.setItem("productIn", JSON.stringify(productInStorage)) 
//   };
 



  
    
    

// //-------------------------------------------------------
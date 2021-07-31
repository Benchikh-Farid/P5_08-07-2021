 
const contentProduct = document.querySelector(".flex");
// récuperer l'id de la page
const querystring = window.location.search;
// extraire l'id
 const idProduct = new URLSearchParams(querystring);
const urlId = idProduct.get("id");
// console.log(urlId);

const selecteurProduit = document.querySelector(".flex");

// appelle de l'api et injection de HTML
     fetch(`http://localhost:3000/api/cameras/${urlId}`)
     .then(res => res.json()) // convertit le resultat au format json*/
     .then((product) => {
    const produitHtml = `
    <div class = "cards" >
         <img class = "card-img-top" src = ${product.imageUrl} alt ="image de ${product.name}">
        <div class = "card-body">
           <h2 class = "card-title">${product.name}</h2>
           <p class = "card-text">${product.description}</p>
           <h3 class = "card-text">${product.price/100 + "€"}</3>
         </div>
       </div>
`
selecteurProduit.innerHTML = produitHtml;
     })
     .catch(err => console.log(" problème de connexion ", err));
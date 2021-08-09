
const contentProduct = document.getElementById("content");
// let productInStorage = JSON.parse(localStorage.getItem("productIn"));
let productInStorage = [];

for (i = 0; i < localStorage.length; i++){
    // localStorage.key[i];
    productInStorage = JSON.parse(localStorage.getItem("productIn"));  
    console.log(productInStorage);
}

for ( j = 0; j < productInStorage.length; j++){
    const urlFetch = `http://localhost:3000/api/cameras/${productInStorage[j].id}`
    console.log(urlFetch);
    fetch (urlFetch)
    .then (res => res.json())
    .then (data => displayChoice(data));  
}

    let produitHtml = [];
        const displayChoice = (data) => {
                
             produitHtml += 
            `
            
            <article class = "cards" >
            <img class = "card-img-top" src = "" alt ="image de">
            <div class = "card-body bg-light">
            <h2 class = "card-title">je suis l'index.js</h2>
            <h3 class = "card-text"></3><br><br>
            </article>
            </div>
            `
            contentProduct.innerHTML=produitHtml
        }
        


// récuperer l'id de la page
const querystring = window.location.search;
// extraire l'id
 const idProduct = new URLSearchParams(querystring);
const id = idProduct.get("OrderId");
console.log(id);

const contentOrder = document.getElementById("contentOrder");
console.log(contentOrder);
contentOrder.textContent = "N° de votre commande : " + id;
localStorage.clear();
// récuperer l'id de la page 

const querystring = window.location.search;
// extraire l'id
 const idProduct = new URLSearchParams(querystring);
const urlId = idProduct.get("id");
// console.log(urlId);
const fetchProduct = () => {
fetch(`http://localhost:3000/api/cameras/${urlId}`)
 .then(res => res.json())
 .then(data => console.log(data));
}
fetchProduct();

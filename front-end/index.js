// appelle de l'api
const URL = "http://localhost:3000/api/cameras";
let userData = [];
// fetch(URL)
// 	.then((res) => res.json())
// 	.then((data) => console.log(data);

const fetchProduct = async () => {
 await fetch(URL)
	.then(res => res.json()) // convertit le resultat au format json*/
	.then((data) => (userData = data))
	console.log(userData)
	// .catch(err => console.log(" problème de connexion ", err));
};

// CIBLER LES CONTENEUR PAGE et afficher dynamiquement
// async pour attendre la data

const displayCard = async () => {
	await fetchProduct();
	document.querySelector(".flex").innerHTML = userData.map((product) => 
	
	`
	<div class = "cards" >
		<a class ="link" href = "produit.html">
		<img class = "card-img-top" src = ${product.imageUrl} alt ="image de ${product.name}">
		<div class = "card-body">
			<h2 class = "card-title">${product.name}</h2>
			<p class = "card-text">${product.description}</p>
			<h3 class = "card-text">${product.price/100 + "€"}</3>
		</div>
	</div>
	`
	)	
	.join("");
};
    
displayCard();

 
    
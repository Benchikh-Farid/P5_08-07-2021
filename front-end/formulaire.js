

	const urlOrderFetch = "http://localhost:3000/api/cameras/order";

/*FORM TO API*/
const fetchApi = async function (data) {
	let reponse = await fetch(urlOrderFetch, {
		method: "POST",
		body: data,
		headers: {
			"Content-type": "application/json"
		}
	})
	
	if (reponse.ok) {
		let infos = await reponse.json();
		window.location = "order.html?OrderId=" + infos.orderId;
	} else {
		alert("erreur" + reponse.status);
	}
};

/*ENVOI FORMULAIRE*/
function sendForm() {
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let mail =  document.getElementById("mail");
let adresse = document.getElementById("inputAddress");
let ville = document.getElementById("city");
let zip =  document.getElementById("zip");


let alertFirstName = document.getElementById("alert-firstname");
let alertLastName = document.getElementById("alert-lastname");
let alertEmail = document.getElementById("alert-email");
let alertAddress = document.getElementById("alert-adresse");
let alertCity = document.getElementById("alert-city");
let alertZip = document.getElementById("alert-zip");

    let nameValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
	let emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let addressValid = /^([\w\s]+){5,}/;
	let zipValid = /^\d{5}$|^\d{5}-\d{4}$/;
	let cityValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

	//valeur de début
    let formValid = true;

    if (nameValid.test(nom.value) == false) {
		alertFirstName.innerHTML = "Merci de renseigner un prénom valide";
		formValid = false;
	}
	if (nameValid.test(prenom.value) == false) {
		alertLastName.innerHTML = "Merci de renseigner un Nom valide";
		formValid = false;
	}
	if (emailValid.test(mail.value) == false) {
		alertEmail.innerHTML = "Merci de renseigner une adresse email valide";
		formValid = false;
	}
	if (addressValid.test(adresse.value) == false) {
		alertAddress.innerHTML = "Merci de renseigner une adresse valide";
		formValid = false;
	}
	if (zipValid.test(zip.value) == false) {
		alertZip.innerHTML = "Merci de renseigner un code postal valide";
		formValid = false;
	}
	if (cityValid.test(ville.value) == false) {
		alertCity.innerHTML = "Merci de renseigner un code postal valide";
		formValid = false;
	}   
    
    //mise en forme pour envoi
let plugContact = {
    firstName: nom.value,
    lastName: prenom.value,
    email: mail.value,
    address: adresse.value,
    city: zip.value + " " + ville.value
};

// mise en forme des produits selectionners

let camera_id = []; //tableau produits

	let orderCart = JSON.parse(localStorage.getItem("productIn"));
	for (let item of orderCart) {
		for (let i = 0; i < item.length; i++) {
			camera_id.push(item.id);
		}
	}

	//final order
	let order = {
		contact: plugContact,
		products: camera_id
	};
	let orderApi = JSON.stringify(order);
	

	if (formValid) {
		fetchApi(orderApi);
        localStorage.setItem("productIn",JSON.stringify(camera_id))
	}
    // formValid
}

/*ENVOYER COMMANDE*/
const contentForm = document.getElementById("content-form");
document.getElementById("content-form").addEventListener("submit", function (e) {
	e.preventDefault();
	sendForm();
});

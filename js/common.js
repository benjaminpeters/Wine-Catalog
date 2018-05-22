/**
 * This file contains globally accessible helper variables and methods.
 *
 * TODO: You are free to add any additional helper methods and properties here
 * to help in your implementation.
 */

// Helper Functions
function formatPrice(p){
	return p.split(".");
}

function refreshShoppingCart(cart){
	// update items
	var listHTML = "";
	var mylist = $('#shoppingList');

	// Use an Array to sort by date added
	var listitems = cart.getCartArr();

	listitems.sort(function(a, b){
		return dateAsc(a,b);
	});

	// add/update html
	$.each(listitems, function(idx, item) { 

		description = item.getDescription();
		price = "$" + item.getPrice();
		amount = item.getAmount();
		quantity = item.getQuantity();
		id = item.getID();

		listHTML += formatCartItemHTML(quantity, description, price, amount, id, idx);
	});

	mylist.html(listHTML);

	// update total
	var total = $("#totalAmount");
	var amount = cart.getTotal();
	var totalAmountHTML = "$" + amount ;

	total.html(totalAmountHTML);
}


// Sorting Functions
// by name
function nameAsc(a, b){
	return $(a).find("p.cardName")[0]["textContent"].toUpperCase().localeCompare($(b).find("p.cardName")[0]["textContent"].toUpperCase());
}
function nameDesc(a,b){
	return $(b).find("p.cardName")[0]["textContent"].toUpperCase().localeCompare($(a).find("p.cardName")[0]["textContent"].toUpperCase());
}

// by category
function categoryAsc(a, b){
	return $(a).find("p#cardCategory")[0]["textContent"].toUpperCase().localeCompare($(b).find("p#cardCategory")[0]["textContent"].toUpperCase());
}
function categoryDesc(a,b){
	return $(b).find("p#cardCategory")[0]["textContent"].toUpperCase().localeCompare($(a).find("p#cardCategory")[0]["textContent"].toUpperCase());
}

// by volume - compare ints
function volumeAsc(a, b){
	return parseInt($(b).find("p#cardVolume")[0]["textContent"]) - parseInt($(a).find("p#cardVolume")[0]["textContent"].toUpperCase());
}
function volumeDesc(a,b){
	return parseInt($(a).find("p#cardVolume")[0]["textContent"]) - parseInt($(b).find("p#cardVolume")[0]["textContent"].toUpperCase());
}

// by price - compare ints
function priceAsc(a, b){
	return parseInt($(b).find("p#cardPrice")[0]["textContent"]) - parseInt($(a).find("p#cardPrice")[0]["textContent"].toUpperCase());
}
function priceDesc(a,b){
	return parseInt($(a).find("p#cardPrice")[0]["textContent"]) - parseInt($(b).find("p#cardPrice")[0]["textContent"].toUpperCase());
}

// by country
function countryAsc(a, b){
	return $(a).find("p#cardCountry")[0]["textContent"].toUpperCase().localeCompare($(b).find("p#cardCountry")[0]["textContent"].toUpperCase());
}
function countryDesc(a,b){
	return $(b).find("p#cardCountry")[0]["textContent"].toUpperCase().localeCompare($(a).find("p#cardCountry")[0]["textContent"].toUpperCase());
}

// by producer
function producerAsc(a, b){
	return $(a).find("p#cardProducer")[0]["textContent"].toUpperCase().localeCompare($(b).find("p#cardProducer")[0]["textContent"].toUpperCase());
}
function producerDesc(a,b){
	return $(b).find("p#cardProducer")[0]["textContent"].toUpperCase().localeCompare($(a).find("p#cardProducer")[0]["textContent"].toUpperCase());
}

// by date Added 
function dateAsc(a,b) {
	aDate = a.getDateAdded();
	bDate = b.getDateAdded();

	return new Date(aDate) - new Date(bDate);
}
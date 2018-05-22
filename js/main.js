// wait for the document to be loaded
$(document).ready(function() {
	init();
});

function init(){
	initLeftPanel();
	initCenterPanel();
	initRightPanel();
}

function initLeftPanel(){
	// Left Panel Listeners

	// Search Box
	$('#wineSearchBox').keyup(function(){
		var valThis = $(this).val();
		$('#wineList>li').each(function(){
			var text = $(this).find("p.cardName")[0]["textContent"].toLowerCase();
			(text.indexOf(valThis) != -1) ? $(this).show() : $(this).hide();         
		});
	});

	//Sort By
	$('#sortBy').change(function() {
		var sortBy = $(this).find('option:selected').val();

		var mylist = $('#wineList');
		var listitems = mylist.children('li').get();

		listitems.sort(function(a, b) {
			var fn = window[sortBy];
			if(typeof fn === 'function') {
				return fn(a,b);
			}
		})
		$.each(listitems, function(idx, itm) { mylist.append(itm); });
	});

	// Category Picker
	$("#categoryList>li").click(function(e){
		if (!$(this).hasClass("active")) {
			$("li.active").removeClass("active");
			$(this).addClass("active");
		}

		var category = e.target.id.toLowerCase();

		if(category == "all"){
			$('#wineList>li').each(function(){
				$(this).show();
			});
		}
		else {
			$('#wineList>li').each(function(){
				var text = $(this).find("p#cardCategory")[0]["textContent"].toLowerCase();
				(category.indexOf(text) != -1) ? $(this).show() : $(this).hide();         
			});
		}
	});
}

function initCenterPanel(){

	var item = "";
	var id = ""
	var category = "";
	var name = "";
	var volume = "";
	var price = "";
	var country = "";
	var producer = "";

	for (i in Catalog){
		item = Catalog[i];
		id = i;
		category = item.getCategory();
		name = item.getName();
		volume = item.getVolume();
		price = item.getPrice();
		country = item.getCountry();
		producer = item.getProducer();

		$("#wineList").append(formatCatalogItemHTML(id, category, name, volume, price, country, producer));
	}

	// Default: sort in name ascending order
	var sortBy = $('#sortBy').find('option:selected').val();

	var mylist = $('#wineList');
	var listitems = mylist.children('li').get();

	listitems.sort(function(a, b) {
		var fn = window[sortBy];
		if(typeof fn === 'function') {
			return fn(a,b);
		}
	})
	$.each(listitems, function(idx, itm) { mylist.append(itm); });

	// Center Panel Listeners

	// Open/close wine card details
	$("#wineList>.cardContainer>.cardDetails>.activedetailSpacing>.caret").click(function(){
		var card = $(this).parents("#wineList>.cardContainer");
		var cardDetails = $(this).parents("#wineList>.cardContainer>.cardDetails>.activedetailSpacing");

		if ($(card).hasClass("active")) {
			$(card).removeClass("active");
			$(this).html("&#9650;");
		}
		else{
			$(card).addClass("active");
			$(this).html("&#9660;");
		}
	});
}

function initRightPanel(){

	// Set up shopping cart
	var cart = new Cart();
	var shoppingCart = cart.getCart();

	var item = "";
	var id = ""
	var description = "";
	var price = "";
	var amount = "";
	var quantity = "";

	for ( i in shoppingCart ){
		item = shoppingCart[i];
		id = i;
		description = item.getDescription();
		price = item.getPrice();
		amount = item.getAmount();
		quantity = item.getQuantity();

		$("#shoppingList").append(formatCartItemHTML(quantity, description, price, amount, id));
	}
	// Rigth Panel Listeners

	// open/close shopping cart
	$("#toggleShoppingCart").click(function(){
		if($("#slideOutCartContainer").hasClass("active")){
			$("#slideOutCartContainer").removeClass("active");
			$("#toggleShoppingCart").removeClass("active");
			$("#toggleShoppingCart>span").html("&#9668;");
		}
		else {
			$("#slideOutCartContainer").addClass("active");
			$("#toggleShoppingCart").addClass("active");
			$("#toggleShoppingCart>span").html("&#9654;");
		}
	});

	// Add item to list 
	$(".cardAddItem").click(function(){
		// add to cart object
		id = parseInt($(this).data("id"));
		item = Catalog[id];

		description = item.getName();
		price = item.getPrice();

		cart.addItem(id, description, price);

		refreshShoppingCart(cart);
	});

	// remove item from list
	$("#shoppingList").on("click", "#removeItem", function (event) {
		id = parseInt($(this).data("id"));
		cart.removeItem(id);
		refreshShoppingCart(cart);
	});
}
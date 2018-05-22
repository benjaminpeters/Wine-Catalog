/**
 * This prototypal object definition defines a generic cart object.
 *
 * TODO: You are free to add any additional helper methods and properties here
 * to help in your implementation.
 *
 * @class Cart
 */

function Cart() {
	this.cart = {};

	this.total = 0;

	this.setCart = function(cart){
		this.cart = cart;
	}

	this.getCart = function(){
		return this.cart;
	}

	this.getCartArr = function(){
		return Object.values(this.cart)
	}

	this.addItem = function(id, name, price){
		this.total += price;

		if(this.cart[id] == null){
			var newItem = new CartItem(id, 1, name, price, price)
			this.cart[id] = newItem;
		}
		else {
			this.cart[id].increaseQuantity();

		}
	}

	this.removeItem = function(id){
		var amount = this.cart[id].getAmount();
		this.total -= amount;

		delete this.cart[id];
	}

	this.getTotal = function(){
		return Math.abs(this.total.toFixed(2));
	}
}

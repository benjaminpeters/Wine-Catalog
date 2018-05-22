 /* @class CartItem
 * @param id {String} The unique id for this item.
 * @param quantity {int} The item quantity
 * @param description {String} The item description.
 * @param price {String} The item price.
 * @param amount {String} The item amount.
 */
function CartItem(id, quantity, description, price, amount) {
    // declare these as private variables
    var id = id;
    var quantity = quantity;
    var description = description;
    var price = price;
    var amount = amount;
    var dateAdded = new Date();

    // simple getter methods
    this.getID = function() { return id; }
    this.getQuantity = function() { return quantity; }
    this.getDescription = function() { return description; }
    this.getPrice = function() { return parseFloat(price); }
    this.getAmount = function() { return amount; }
    this.getDateAdded = function() { return dateAdded; }

    this.increaseQuantity = function(){
        quantity++;
        amount = amount + price;
    }

}

function formatCartItemHTML(quantity, description, price, amount, id, index){
    // rotate colors
    var backgroundColor = ""
    if (index % 2 == 0){
        backgroundColor = "even";
    }
    else {
        backgroundColor = "odd";
    }

    var html = "<li> \
                    <div class='shoppingCartItems " + backgroundColor + "'> \
                        <p id='removeItem' data-id='" + id + "'  class='removeItemSpacing'>&#x2717;</p> \
                        <p class='QTYspacing'>" + quantity + "</p> \
                        <p class='descSpacing'>" + description + "</p> \
                        <p class='unitPriceSpacing'>" + price + "</p> \
                        <p class='amountSpacing'>$" + amount.toFixed(2); + "</p> \
                    </div> \
                </li>" 

    return html;
}
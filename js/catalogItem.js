/**
 * This prototypal object definition defines a generic catalog item.
 *
 * TODO: You are free to add any additional helper methods and properties here
 * to help in your implementation.
 *
 * @class CatalogItem
 * @param id {String} The unique id for this item.
 * @param category {String} The item category.
 * @param name {String} The item name.
 * @param volume {String} The description of the item's volume.
 * @param price {String} The price of this item.
 * @param country {String} The country code for this item's origin.
 * @param producer {String} The producer of this item.
 */
function CatalogItem(id, category, name, volume, price, country, producer) {
    // declare these as private variables
    var id = id;
    var category = category;
    var name = name;
    var volume = volume;
    var price = price;
    var country = country;
    var producer = producer;

    // simple getter methods
    this.getId = function() { return id; }
    this.getCategory = function() { return category; }
    this.getName = function() { return name; }
    this.getVolume = function() { return volume; }
    this.getPrice = function() { return parseFloat(price.slice(1)); }
    this.getCountry = function() { return country; }
    this.getProducer = function() { return producer; }

    /* TODO: Implement additional helpers here */
    this.getImage = function() { return "../candidate/images/catalog/" + id + ".png" }
}

function formatCatalogItemHTML(id, category, name, volume, price, country, producer){
    var formattedPrice = formatPrice(String(price));
    if (formattedPrice[1] == undefined) {
        formattedPrice[1] = "00";
    }

    var formattedImage = "../Wine-Catalog/images/catalog/" + id + ".png";


    var html = "<li class='cardContainer grow'> \
                    <p class='cardAddItem' data-id='" + id +"'> &#43; </p> \
                    <p class='cardPriceLabelCent'>" + formattedPrice[1] + " </p> <p class='cardPriceLabelDollar'> $" + formattedPrice[0] + " </p> \
                    <img class='cardImage' src = " + formattedImage + "> \
                    <div class='cardDetails'> \
                        <div class='activedetailSpacing'> \
                            <p class='caret'>&#9650;</p> \
                            <p class='cardName'>" + name + "</p> \
                            <div class='activeDetailInfo'> \
                                <p>&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472&#9472</p>  \
                                <p> Category </p> \
                                <p id='cardCategory' class='capitalize detailCardInfoFont'>" + category.toLowerCase() + "</p> \
                                <p> Volume </p> \
                                <p id='cardVolume' class='capitalize detailCardInfoFont'>" + volume.toLowerCase() + "</p> \
                                <p> Price </p> \
                                <p id='cardPrice' class='capitalize detailCardInfoFont'>" + price + "</p> \
                                <p> Country </p> \
                                <p id='cardCountry' class='capitalize detailCardInfoFont'>" + country.toLowerCase() + "</p> \
                                <p> Producer </p> \
                                <p id='cardProducer' class='capitalize detailCardInfoFont'>" + producer.toLowerCase() + "</p> \
                            </div> \
                        </div> \
                    </div> \
                </li>";
    return html;
}
let ordersClick = [];
let ordersArray = [];
let cartContent = '';

function initializeShop() {

	for (let i in productdata.jewelry) {
		$('#allproducts').append(`
			<div class="productcontainer">
				<div class="imagecontainer">
					<img src="${productdata.jewelry[i].image}" alt="${productdata.jewelry[i].name}" class="present">
				</div>
				<div class="productinfo">
					<p class="productname">${productdata.jewelry[i].name}</p>
					<p class="price"><strong>$${productdata.jewelry[i].price}</strong><span class="originalprice"></span></p>
					<button id="${productdata.jewelry[i].id}" class="orderbutton">Add to cart</button>
				</div>
			</div>
		`)
	}

	$('.orderbutton').click(addItemToCart);

	$('#shoppingcart').click(generateOrderTable);

};

function addItemToCart() {
	let item = this.id;
	let itemOrder = productdata.jewelry[this.id];
	
	$('#orders').hide();

	if (jQuery.inArray(item, ordersClick) == '-1') {
		ordersClick.push(item);
		ordersArray.push(itemOrder);
		$('#cartamount').replaceWith('<span id="cartamount">' + ordersArray.length + '</span>');
		$(this).replaceWith('<button class="addedButton">Added to cart</button>');
		$('.addedButton').click(function() { $('#orders').hide(); });
	}
}

function generateOrderTable() {
	$('#orders').hide();
	$('#orders').replaceWith('<div id="orders"></div>');

	if (ordersArray.length == 0) {
		$('#orders').replaceWith('<div id="orders"><p align="center">Your shopping cart is empty.</p></div>');
		$('#orders').show();
	};

	for (let i in ordersArray) {
		let currentAmountPrice = ordersArray[i].amount_ordered * ordersArray[i].price;

		$('#orders').append(`
			<div id="orders">
				<table id="ordertable">
					<tr>
						<td class="imagecolumn"><img src="${ordersArray[i].image}" alt="${ordersArray[i].name}"></td>
						<td class="namecolumn">
							<div class="truncatedtext">${ordersArray[i].name}</div>
							<div class="productprice"><strong>$${ordersArray[i].price}</strong> (${ordersArray[i].amount_stock} in stock)</div>
						</td>
						<td class="amountcolumn"><input type="number" maxlength="2" min="0" max="${ordersArray[i].amount_stock}" value="${ordersArray[i].amount_ordered}" class="itemAmountField" id="ia${ordersArray[i].id}"></td>
						<td class="itemPriceSubtotal"><span id="itp${ordersArray[i].id}">$${currentAmountPrice}</span></td>
					</tr>
				</table>
			</div>
		`);

	};

	$('#orders').show();

	$('.itemAmountField').change(function() {
		let tempID = $(this).attr('id');
		let tempValue = $(this).val()
		tempID = tempID.substring(2);
		let itemIndex = productdata.jewelry.findIndex((obj => obj.id == tempID));
		productdata.jewelry[itemIndex].amount_ordered = tempValue;
		generateOrderTable();
	});	
};



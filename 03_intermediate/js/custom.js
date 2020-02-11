let ordersarray = [];
let cartContentDiv = '';

for (let i in productdata.jewelry) {
	$('#allproducts').append(`
		<div class="productcontainer">
			<div class="imagecontainer">
				<img src="${productdata.jewelry[i].image}" alt="${productdata.jewelry[i].name}" class="present">
			</div>
			<div class="productinfo">
				<p class="productname">${productdata.jewelry[i].name}</p>
				<p class="price"><strong>$${productdata.jewelry[i].price}</strong><span class="originalprice"></span></p>
				<button id="${productdata.jewelry[i].id}" class="orderbutton">&#128722;&nbsp;Add to cart</button>
			</div>
		</div>
	`)
}

 $('.orderbutton').on('click', function () {
 	console.log(this.id);
	ordersarray.push(productdata.jewelry[this.id]);
	console.table(ordersarray);
 });

 $('#shoppingcart').on('click', function() {
 	
 	$('#orders').replaceWith('<div id="orders"></div>');
 	
 	cartContentDiv = '';

	for (let i in ordersarray) {
		cartContentDiv += `
			<div id="orders">
				<table id="ordertable">
					<tr>
						<td class="imagecolumn"><img src="${ordersarray[i].image}" alt="${ordersarray[i].name}"></td>
						<td class="namecolumn">
							<div class="truncatedtext">${ordersarray[i].name}</div>
							<div class="productprice"><strong>$${ordersarray[i].price}</strong></div>
						</td>
						<td class="add"><button type="button">+</button></td>
						<td class="amountcolumn">1</td>
						<td class="substract"><button type="button">-</button></td>
						<td class="pricesubtotal">$340</td>
					</tr>
				</table>
			</div>
		`;
	}

	$('#orders').replaceWith(cartContentDiv);

});

function generateCart() {

}

function cartContent() {

};

var addedServices = [];

function addToCart(serviceName) {
    if (addedServices.includes(serviceName)) return;
    addedServices.push(serviceName);
}

$('.cart').click(function () {
    console.log('cart')
});
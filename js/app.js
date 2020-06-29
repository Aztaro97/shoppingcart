(function () {
    const cart_info = document.querySelector('.cart-info');
const cart = document.querySelector('.cart')

cart_info.addEventListener('click', () => {
    cart.classList.toggle('show-cart')
})
})();





(function() {
    var cartbtn = document.querySelectorAll(".cake-img")
    cartbtn.forEach( function(btn) {
        btn.addEventListener("click", (e) => {
            if (e.target.src) {
                let fullpath = e.target.src;
                let pos = fullpath.indexOf("img") + 3;
                let partpath = fullpath.slice(pos);

                
                let item = {};
                item.img = 'img'+partpath;
                

                let name = e.target.parentElement.nextElementSibling.children[0].textContent;
                item.name = name;

                let price = e.target.parentElement.nextElementSibling.children[1].textContent;

                let finalprice = price.slice(0).trim();
                item.price = finalprice;


                CartItem = document.createElement('div');
                CartItem.classList.add('cart-item');
                CartItem.innerHTML = '<div><img src="'+item.img+'" alt=""></div><div><div class="item-title">'+item.name+'</div><div class="price-item">'+item.price+'</div></div><div><a href="#"><i class="fas fa-trash"></i></a></div></div>'
                

                /*/// Select Cart */
                var cart = document.querySelector('#cart');
                total = document.querySelector('.cart-total-container');
                cart.insertBefore(CartItem, total);
                alert("Item Added to the cart");
                showTotals();


                console.log(item)
            }
        })
    })

    function showTotals() {
        const totals = [];
        const items = document.querySelectorAll('.price-item');

        items.forEach((item) => {
            totals.push(parseFloat(item.textContent));
            // console.log(totals)
        })

        const totalMoney = totals.reduce(function(total,item){
            total += item;
            return total
        },0)



        document.querySelector('.item-count').textContent = totals.length;
        document.querySelector('.item-totals').textContent = totalMoney
        document.querySelector('#cart-totals').textContent = totalMoney
        console.log(totalMoney)
    }


})()



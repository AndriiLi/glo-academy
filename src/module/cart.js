import renderCarts from "./renderCarts";
import postData from "./cartCrud/postData";

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = document.querySelector('.cart-close');
    const goodsWrapper = document.querySelector('.goods');
    const cartWrapper = document.querySelector('.cart-wrapper');

    const cartTotal = document.querySelector('.cart-total > span');
    const cartSendBtn = document.querySelector('.cart-confirm');
    const cartCounter = document.querySelector('.counter');

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cartModal.style.display = 'flex';
        renderCarts(cart);
        const total =  cart.reduce((sum, goodItem)=> {
            return sum + goodItem.price;
        }, 0);

        cartTotal.textContent = total;
    }

    const closeCart = () => {
        cartModal.style.display = '';
    }

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);

    goodsWrapper.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn-primary')) {
            const card = e.target.closest('.card');
            const key = card.dataset.key;

            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

            const goodItem = goods.find((item) => {
                return item.id  === +key;
            });
            cart.push(goodItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('cartCounter', cart.length);

            const counter = localStorage.getItem('cartCounter');
            cartCounter.textContent = counter;

        }
    });

    cartWrapper.addEventListener('click', (e)=> {
        if(e.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const card = e.target.closest('.card');
            const key = card.dataset.key;

            const  index = cart.findIndex((item) => {
                return item.id === +key;
            })

            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));
            renderCarts(cart);
            const total =  cart.reduce((sum, goodItem)=> {
                return sum + goodItem.price;
            }, 0);
            cartTotal.textContent = total;
            localStorage.setItem('cartCounter', cart.length);
            cartCounter.textContent = cart.length;
        }
    });

    cartSendBtn.addEventListener('click', (e)=> {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        postData(cart).then(()=> {
            localStorage.removeItem('cart');
            renderCarts([]);
            cartTotal.textContent = 0;
            const cartCounter = document.querySelector('.counter');
            localStorage.setItem('cartCounter', 0);
            cartCounter.textContent = 0;
        });
    })
}

export default cart;
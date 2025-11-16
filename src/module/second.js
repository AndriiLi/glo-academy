import postData from './cartCrud/postData';
import getData from './cartCrud/getData'

const second = () => {

    const cartBtn = document.getElementById('cart');

    cartBtn.addEventListener('click', () => {
        getData().then((resp) => {
            // postData({
            //     "id": 24,
            //     "title": "Очень старая приставка",
            //     "price": 33990,
            //     "sale": false,
            //     "img": "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
            //     "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
            //     "category": "Игровая приставка"
            // })
        });
    });

}

export default second;
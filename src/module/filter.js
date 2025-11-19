import getData from "./cartCrud/getData";
import renderGoods from "./renderGoods";
import {hotSaleFilter, priceFilter} from  "./filters"

const filter = () => {
    const minInput = document.getElementById('min');
    const maxinput = document.getElementById('max');
    const checkboxInput = document.getElementById('discount-checkbox');
    const discountSpan = document.querySelector('.filter-check_checkmark');

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxinput.value));
        });
    });

    maxinput.addEventListener('input', ()=> {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxinput.value));
        });
    });

    checkboxInput.addEventListener('change', ()=> {
        checkboxInput.checked ?
        discountSpan.classList.add('checked'):
        discountSpan.classList.remove('checked');

        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxinput.value));
        });

    });


}

export default filter;
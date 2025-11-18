import getData from "./cartCrud/getData";
import renderGoods from "./renderGoods";
import {filterGoods} from  "./filters"

const searchOptions = () => {
    const minPrice = document.getElementById('min');
    const maxPrice = document.getElementById('max');
    const discount = document.getElementById('discount-checkbox');
    const discountCheckmark = document.querySelector('.filter-check_checkmark');

    const applyFilters = () => {
        getData().then(data => {
            const filtered = filterGoods(data, {
                minPrice: minPrice.value,
                maxPrice: maxPrice.value,
                discountOnly: discount.checked
            });

            renderGoods(filtered);
        });
    };

    discount.addEventListener('change', (e) => {
        discount.checked ?
        discountCheckmark.classList.add('checked'):
        discountCheckmark.classList.remove('checked');
    });

    minPrice.addEventListener('input', applyFilters);
    maxPrice.addEventListener('input', applyFilters);
    discount.addEventListener('change', applyFilters);

}

export default searchOptions;
export const searchFilter = (goods, value) => {
    return goods.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
    );
};


export const categoryFilter =  (goods, categoryText) => {
    return goods.filter(item => {
        return item.category == categoryText;
    });
};

export function filterGoods(data, filters) {
    const { minPrice, maxPrice, discountOnly } = filters;
    const min = minPrice !== '' && !isNaN(minPrice) ? Number(minPrice) : null;
    const max = maxPrice !== '' && !isNaN(maxPrice) ? Number(maxPrice) : null;

    return data.filter(item => {
        if (min !== null && max !== null && min > max) return false;
        if (min !== null && item.price < min) return false;
        if (max !== null && item.price > max) return false;

        if (discountOnly && !item.sale) return false;

        return true;
    });
}
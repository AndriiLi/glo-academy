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


export const priceFilter =  (goods, min, max) => {
    return goods.filter(item => {
        if(min ==='' && max ==='') {
            return  item;
        }else if(min !== '' &&  max !== ''){
            return  item.price >= +min && item.price <= +max;
        }else if(min !== '' &&  max == ''){
            return  item.price >= +min;
        }else if(min === '' &&  max !== ''){
            return  item.price <= +max;
        }
    });
};

export const hotSaleFilter =  (goods, value) => {
    return goods.filter(item => {
        if(value) {
            return item.sale === true;
        }else {
            return item;
        }
    });
};
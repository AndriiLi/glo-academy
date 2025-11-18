import getData from './cartCrud/getData'
import renderGoods from './renderGoods';

const load = () => {

        getData().then((resp) => {
            renderGoods(resp)
        });

}

export default load;
//BASE URL FOR API

const BASE_URL = 'https://fakestoreapi.com/'

const allProducts = `${BASE_URL}products`

const getOneProduct = (id) => {
    return `${allProducts}/${id}`
}
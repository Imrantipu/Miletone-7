// common function for both input fields to get input values
const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    // input value reset
    inputField.value = '';
    return inputValue;
}
// button onclick used
const addProduct = () =>{
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');

    // display product in UI we have to call 
    addProductToDisplay(product,quantity);

    // save to local storage as one values making an object i have to call again
    // localStorage.setItem(product,quantity);
    saveItemToLocalStorage(product,quantity);
}

//  set itemes as object in local storage
const getShoppingCartFromLocalStorage = () =>{
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) =>{
    const cart = getShoppingCartFromLocalStorage();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringified =JSON.stringify(cart);

    // save to the local storage
    localStorage.setItem('cart', cartStringified);

}
// display product in UI
 const addProductToDisplay = (product,quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
 }

//  display saved stored value in UI
const displayStoredProducts = () =>{
    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product];
        // console.log(product,quantity);
        addProductToDisplay(product,quantity);
    }
} 

displayStoredProducts();
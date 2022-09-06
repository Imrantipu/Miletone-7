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
    displayProducts(product,quantity);

    // set to local storage
    localStorage.getItem(product,quantity);
}

// display product in UI
 const displayProducts = (product,quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
 }
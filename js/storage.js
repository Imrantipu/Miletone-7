document.getElementById('btn-add-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    // console.log(nameValue);
    // set items in local storage
    localStorage.setItem('name',nameValue);
    // remove item from local storage
    localStorage.removeItem('name');

    // to clear local storage
    localStorage.clear();

})


const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}
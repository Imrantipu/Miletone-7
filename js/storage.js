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
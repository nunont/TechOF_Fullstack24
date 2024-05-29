
var alreadyAddedProducts = [];

$(() => {

    const input = $('#productI');
    const addButton = $('#btnAdd');

    const list = $('#shoppingList');

    input.keypress((e) => {
        if (e.which === 13) {
            addButton.click();
        }
    });

    addButton.click(() => {
        const value = input.val();
        if (alreadyAddedProducts.includes(value)) {
            alert('Product already added');
            input.val('');
            return;
        }
        if (value) {
            alreadyAddedProducts.push(value);
            let div = createProductDiv(value);
            list.append(div);
            input.val('');
        }
    });

    /* list.on('click', '.delete-button', (e) => {
        $(e.target).closest('.product-item').remove();
    }); */

    $('.delete-button').click((e) => {
        $(e.target).parent().parent().remove();
    
    });

    list.on('click', '.product-item', (e) => {
        $(e.target).toggleClass('checked-item');
    });

})

const createProductDiv = (product) => {
    return `<div id="${product}-id" class="product-item">
    ${product}
    <button class="delete-button">
        <span class="material-symbols-outlined">delete</span>
    </button>
    </div>`;
}
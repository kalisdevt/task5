document.addEventListener('DOMContentLoaded', function () {
    let select = document.getElementById('orders');
    let errorHolder = document.getElementById('errorHolder');
    let button = document.getElementById('calculateSumm');
    let countProducts = document.getElementById('countOfProducts');
    let resultHolder = document.getElementById('resultHolder');

    errorHolder.classList.add('d-none');
    errorHolder.innerHTML = '';

    let orders = [
        {
            title: 'Товар 1',
            value: 1000
        },
        {
            title: 'Товар 2',
            value: 300
        },
        {
            title: 'Товар 3',
            value: 5000
        },
        { title: 'Товар 4', value: 400 }
    ];

    for (let i = 0; i < orders.length; i++) {
        select.innerHTML += `
            <option value=${orders[i].value}>${orders[i].title} - ${orders[i].value.toLocaleString('ru-RU')} рублей</select>
        `;
    }

    button.addEventListener('click', function () {
        resultHolder.classList.add('d-none');
        resultHolder.innerHTML = '';
        errorHolder.classList.add('d-none');
        errorHolder.innerHTML = '';
        const count = countProducts.value;
        const orderPrice = select.value;
        console.log(count, orderPrice);
        const reg = /^[1-9][0-9]*/;

        if (!reg.test(count)) {
            errorHolder.innerHTML = 'Вы ввели недопустимое значение или оно пустое';
            errorHolder.classList.remove('d-none');
            return;
        }

        const result = (Number(orderPrice) * Number(count)).toLocaleString('ru-RU');

        resultHolder.innerHTML = `Итоговая стоимость товаров: ${result} рублей.`;
        resultHolder.classList.remove('d-none');
    });
});
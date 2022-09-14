const form = document.querySelector('form');
const result = document.querySelector('.result');



form.addEventListener('submit', e => {
    e.preventDefault();

    const bitcoin = form.bitcoin.value;
    const dollar = form.dollar.value;

    let total = dollar/bitcoin;

    result.innerHTML = `<h2>You can buy ${total} BTC</h2>`

    result.style.display = 'block';
// method reset may be used to clear input fields, if it is desired
    // form.reset();
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbzGMd-Bnvt1KSPVUVhcb4rOwO7JpnD4hAmyjtWjlGyOHZT7Kz6k-NbYqoP8y7xkwfGN/exec';
const form = document.forms['submit-data-sementara'];
const alert = document.querySelector('#form .alert');
const btnSubmit = document.querySelector('#form .btn-submit');
const btnLoading = document.querySelector('#form .btn-loading');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    btnSubmit.classList.toggle('d-none');
    btnLoading.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnSubmit.classList.toggle('d-none');
            btnLoading.classList.toggle('d-none');
            alert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message));
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbxtNeVSIYoeOakL5-yqpgXr5j2HLqOOqzgpqkolk_X7N01WFMYtj1PqpGe_4OkdAHy5Vw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e=> {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData (form)})
    .then(response => alert("Thank you! Your form is submitted successfully."))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
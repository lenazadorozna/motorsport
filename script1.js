document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
        if (!formObject[key]) {
            formObject[key] = value;
        } else {
            if (!Array.isArray(formObject[key])) {
                formObject[key] = [formObject[key]];
            }
            formObject[key].push(value);
        }
    });

    // Konwertuj obiekt formularza na JSON
    const formJson = JSON.stringify(formObject);

    // Wyślij dane formularza na adres e-mail (przykład z użyciem EmailJS)
    emailjs.send('your_service_id', 'your_template_id', formObject, 'your_user_id')
        .then((response) => {
            console.log('Sukces!', response.status, response.text);
            alert('Formularz został wysłany!');
        }, (error) => {
            console.log('Błąd', error);
            alert('Wystąpił błąd podczas wysyłania formularza.');
        });
});

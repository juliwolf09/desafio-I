function cadastrar() {
    alert ('Cadastro realizado com sucesso!')
    console.log('Cadastro realizado com sucesso')
};

const form = document.querySelector('#cadastro');

form.addEventListener('submit', (event)=> {
    event.preventDefault();

    const formData = new FormData(form);
    const json = {};

    for (const [key, value] of formData.entries()){
        json[key] = value;
    }

    console.log(json);
    form.reset();
});










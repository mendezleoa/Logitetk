import './style.css';

async function enviar_email() {
  let correo = document.getElementById('correo').value
  email = { email: correo}

  let data = JSON.stringify(email);

  await fetch("http://localhost:3000",{
      method: 'Post',
      body: data
    })
    .then(x => console.log("Se envio el Email", x))
    .catch(err => console.log(err))
}
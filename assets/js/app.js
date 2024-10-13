const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se cambió a selector de clase
const $b = document.querySelector('.blog'); //Se cambió a selector de clase
const $l = document.querySelector('.location');

//Se agregó async para la función asíncrona
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Se agregó la función que obtiene los datos JSON
  console.log(data);
  $n.textContent = `${data.name}`; //Se cambiaron '' por ``
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //se agregó el $ que recibe la variable $n
}

displayUser('stolinski').catch(handleError);
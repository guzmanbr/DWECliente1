const SERVER = 'http://localhost:3000';

window.addEventListener('load', () => {
  document.getElementById('getProduct').addEventListener('submit', (event) => {
    event.preventDefault();
    let idProd = document.getElementById('id-prod').value
    if (isNaN(idProd) || idProd.trim() == '') {
      alert('Debes introducir un número')
    } else {
      fetch(SERVER + '/productos?id=' + idProd)
        .then((response) => response.json())
        .then((datos) => {
           // aquí pintamos los datos. Habrá casos que será muy extenso.
           document.getElementById('p1').innerHTML = datos[0].name+"  "+datos[0].descrip;
        })
        .catch((error) => console.error(error))
    }
  })
})
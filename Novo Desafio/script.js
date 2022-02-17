const header = {
    "Content-Type": "application/json",
}
  
fetch('http://localhost:3000/indicadores', {header})
.then(res => res.json())
.then(retorno => {
    document.querySelector('#ipca').value = retorno[1].valor + "%"
    document.querySelector('#cdi').value = retorno[0].valor + "%"
})
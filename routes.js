const baseURL = ()=>{
    let parametro = document.getElementById("pokemon").value;
    let url = 'https://pokeapi.co/api/v2/pokemon/' + parametro;
    fetch(url)
        .then((response => response.json()))
        .then(myJson => console.log(myJson))
}

const typeURL = ()=>{
    let parametro = document.getElementById("type").value;
    let url = 'https://pokeapi.co/api/v2/type/' + parametro;
    fetch(url)
    .then((response => response.json()))
    .then(myJson => console.log(myJson))
}

const abilityURL = ()=>{
    let parametro = document.getElementById("ability").value;
    console.log(parametro)
    let url = 'https://pokeapi.co/api/v2/ability/' + parametro;
    fetch(url)
    .then((response => response.json()))
    .then(myJson => console.log(myJson))
}
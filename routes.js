const baseURL = ()=>{
    let parametro = document.getElementById("pokemon");
    let url = 'https://pokeapi.co/api/v2/pokemon/' + numberOrPokemon;
    fetch(url)
        .then((response => response.json()))
        .then(myJson => console.log(myJson))
}

const typeURL = ()=>{
    let parametro = document.getElementById("type");
    let url = 'https://pokeapi.co/api/v2/pokemon/' + numberType;
    fetch(url)
    .then((response => response.json()))
    .then(myJson => console.log(myJson))
}

const abilityURL = ()=>{
    let parametro = document.getElementById("ability").value;
    console.log(parametro)
    let url = 'https://pokeapi.co/api/v2/pokemon/' + numberAbility;
    fetch(url)
    .then((response => response.json()))
    .then(myJson => console.log(myJson))
}



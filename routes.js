const baseURL = (numberOrPokemon)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/' + numberOrPokemon;
    fetch(url)
        .then((response => response.json()))
        .then(myJson => console.log(myJson))
}

const typeURL = (numberType)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/' + numberType;
    fetch(url)
    .then((response => response.json()))
    .then(myJson => console.log(myJson))
}

const abilityURL = (numberAbility)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/' + numberAbility;
    fetch(url)
    .then((response => response.json()))
    .then(myJson => console.log(myJson))
}



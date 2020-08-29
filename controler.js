const baseURL = ()=>{
    let arrValue = [];
    let parametro = document.getElementById("pokemon").value;
    let url = 'https://pokeapi.co/api/v2/pokemon/' + parametro;
    fetch(url)
        .then((response => response.json()))
        .then(myJson => {
            let element = document.getElementById('poke-table');
            element.style.display = "block";
            document.getElementById("image").src = myJson.sprites.front_default
            arrValue.push(myJson.name);
            arrValue.push(myJson.id);
            arrValue.push(myJson.base_experience);
            arrValue.push(myJson.height);
            for (index in arrValue) {
                document.getElementById("parameterValue" + index).innerHTML = arrValue[index];
            }
        })
}

const typeURL = ()=>{
    let parametro = document.getElementById("type").value;
    let url = 'https://pokeapi.co/api/v2/type/' + parametro;
    fetch(url)
    .then((response => response.json()))
    .then(myJson => {
    })
}

const abilityURL = ()=>{
    let parametro = document.getElementById("ability").value;
    console.log(parametro)
    let url = 'https://pokeapi.co/api/v2/ability/' + parametro;
    fetch(url)
    .then((response => response.json()))
    .then(myJson => {

    })
}
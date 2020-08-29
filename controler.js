const baseURL = ()=>{
    let arr = [];
    let parametro = document.getElementById("pokemon").value;
    let url = 'https://pokeapi.co/api/v2/pokemon/' + parametro;
    fetch(url)
        .then((response => response.json()))
        .then(myJson => {
            document.getElementById("image").src = myJson.sprites.front_default
            arr.push(myJson.name);
            arr.push(myJson.id);
            arr.push(myJson.base_experience);
            arr.push(myJson.height);
            for (index in arr) {
                param = document.getElementById("parameter" + index).innerHTML = arr[index];
                console.log(`parameter${index} + : arr[${index}]`);
                console.log()
            }
        })
    return arr
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
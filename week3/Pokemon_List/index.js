const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)


xhr.onreadystatechange = function(){
    
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        const object = data.objects[0]
        const pokemon = object.pokemon
        MyArr(pokemon)
    } 
    
}

function MyArr(arr) {
    arr.map(function(pokemon) {
        var myPokemon = document.getElementById("objects");
        const h1 = document.createElement('h1')
        h1.textContent = pokemon.name
        myPokemon.appendChild(h1)
        
    })
}
xhr.send()
myMain = document.getElementById("my-main")
let objects = []
async function getData() {
let characters = await axios.get("https://rickandmortyapi.com/api/character").then(res =>  listCharctersToDOM(res.data.results));
let locations = await axios.get("https://rickandmortyapi.com/api/location").then(res => listCharctersToDOM(res.data.results));
let episodes = await axios.get("https://rickandmortyapi.com/api/episode").then(res => listCharctersToDOM(res.data.results));

        // objects.push([characters, locations, episodes])
        const objects= await Promise.all([characters, locations, episodes])
         //.then(res => console.log(res.data.results))
        
        
        //.catch(error => console.log(error))
    }

function listCharctersToDOM(objects){

    clearList()

    for(i=0; i< objects.length; i++) {
        const li1 = document.createElement('h4')
        li1.textContent = objects[0].name 
        document.body.appendChild(li1)
        
        const li2 = document.createElement('h4') 
        li2.textContent = objects[0].status
        document.body.appendChild(li2)

        const li3 = document.createElement('h4') 
        li3.textContent = objects[0].episode[0]
        document.body.appendChild(li3)

        const li4 = document.createElement('h4') 
        li4.textContent = objects[0].dimension
        document.body.appendChild(li4)

        const im = document.createElement('img') 
        im.src = objects[i].image
        im.style.width = "200px"
        document.body.appendChild(im)
    

        const br1 = document.createElement("br")
        document.body.appendChild(br1)

        const br2 = document.createElement("br")
        document.body.appendChild(br2)
        
    }
}

function clearList(){
    const el = document.getElementById('my-main')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}
getData()
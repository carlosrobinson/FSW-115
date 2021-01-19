 myOl = document.getElementById("my-List")
 
 axios.get("https://api.vschool.io/CarlosRobinson1/todo")
 .then(response => {
     for(let i = 0; i < newObject.length; i++){
            let object = response.data
            let newObject = JSON.parse(object)
                const li = document.createElement('li')
                li.textContent = newObject.data   
                myOl.append(li) 
                
        }
    
    
    myTodo(response)
})
     //document.getElementById("my-List").innerHTML=`${responce.data[i]}`

.catch(error => console.log(error))

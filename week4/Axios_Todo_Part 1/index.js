

// Get
let myOl = document.getElementById("my-List")
axios.get("https://api.vschool.io/CarlosRobinson1/todo")
.then(response => {
    for(i = 0; i < response.data.length; i++) {
        var li = document.createElement("li")
        li.setAttribute(`value`, response.data[i]._id)
        li.textContent = response.data[i].completed
        li.name = "mycomp"
        myOl.append(li)
        if(response.data[i].completed === true) {
                li.style.textDecoration = "line-through"
                
            }
            
        var li = document.createElement("li")
        li.textContent = response.data[i].title
        myOl.appendChild(li)
        if(response.data[i].completed === true) {
            li.style.textDecoration = "line-through"
           
        }
        
            var li = document.createElement("li")
            li.textContent = response.data[i].description
            myOl.appendChild(li)
            if(response.data[i].completed === true) {
                li.style.textDecoration = "line-through"
              
            }   
            var li = document.createElement("li")
            li.textContent = `$` + response.data[i].price
            myOl.appendChild(li)
            if(response.data[i].completed === true) {
                li.style.textDecoration = "line-through"
            } 
    
            var li = document.createElement("li")
            li.textContent = response.data[i]._id
            myOl.appendChild(li)
            if(response.data[i].completed === true) {
                li.style.textDecoration = "line-through"
          
            }


            var img = document.createElement("img")
            img.src = response.data[i].imgUrl
            img.style.width = "150px"
            myOl.appendChild(img)

 
            var input = document.createElement("input")
            input.type = "checkbox"
            input.value = response.data[i]._id
            myOl.appendChild(input) 

   
           var br = document.createElement("br")
            myOl.appendChild(br)
                    
            var br = document.createElement("br")
            myOl.appendChild(br)
 
        }        

       
    })
      
 
    
    .catch(error => console.log(error))
 



// //Post
//         const todoform = document.todoform
//         todoform.addEventListener("submit", function(event){
//             event.preventDefault()
            
//             const newTodo = {
//                 title: todoform.title.value,
//                 description: todoform.description.value,
//                 price: todoform.price.value,
//                 imgUrl: todoform.imgUrl.value
//             }
            
//             axios.post("https://api.vschool.io/CarlosRobinson1/todo", newTodo)
//                 .then(deleteData)
//                 .then(getData)
//                 .catch(error => console.log(error))
                

//         }) 

//Put

    
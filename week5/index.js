

// Get
let myOl = document.getElementById("my-List")

function getData(){

axios.get("https://api.vschool.io/CarlosRobinson1/todo")
.then(response => {
    for(i = 0; i < response.data.length; i++) {
        var li = document.createElement("li")
        
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
            input.name="checkbox"
            input.value = response.data[i]._id
            myOl.appendChild(input) 
            
            
            var btn = document.createElement("button")
            btn.textContent= "click"
            btn.id= "button"
            myOl.append(btn)
            

                var br = document.createElement("br")
                myOl.appendChild(br)    
                var br = document.createElement("br")
                myOl.appendChild(br)
                
                
                input.addEventListener("input", function (e) {
                    
                    e.preventDefault()
                    var x = input.parentNode
                    var id = this.value
                    if(x = this.checked) {
                        li.style.textDecoration='line-through'
                        
                    } else{
                        li.style.textDecoration='none'
                    
                    }
                var newTodo = {
                    
                    completed: this.checked
                }
                axios.put("https://api.vschool.io/CarlosRobinson1/todo/" + id , newTodo)
                .then(respsonse => response())
                .then(clearList)
                
            })
            
    }        
})

}


//Post
        const todoform = document.todoform
        todoform.addEventListener("submit", function(event){
            event.preventDefault()
            
            const newTodo = {
                title: todoform.title.value,
                description: todoform.description.value,
                price: todoform.price.value,
                imgUrl: todoform.imgUrl.value
            }
            todoForm.title.value = ""
            axios.post("https://api.vschool.io/CarlosRobinson1/todo", newTodo)
                
            .then(response => getData())
                .catch(error => console.log(error))
                

        }) 
function clearList(){
    const el = document.getElementById('my-List')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}
 




    
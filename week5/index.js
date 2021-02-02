// GET's THE TODO's FROM THE DATABASE
function getData(){
    
    axios.get("https://api.vschool.io/CarlosRobinson1/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
    
    
}



// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    clearList()
    
    for(let i = 0; i < data.length; i++){
        
        var li = document.createElement("li")
        li.textContent = data[i].completed
        document.getElementById('my-List').appendChild(li)
        if(data[i].completed === true ) {
            li.style.textDecoration = "line-through"
        }

        var li = document.createElement("li")
        li.textContent = data[i].title
        document.getElementById('my-List').appendChild(li)
        if(data[i].completed === true) {
            li.style.textDecoration = "line-through"
        }

        var li = document.createElement("li")
        li.textContent = data[i].description
        document.getElementById('my-List').appendChild(li)
        if(data[i].completed === true) {
            li.style.textDecoration = "line-through"
        }

        var li = document.createElement("li")
        li.textContent = `$` + data[i].price
        document.getElementById('my-List').appendChild(li)
                if(data[i].completed === true) {
            li.style.textDecoration = "line-through"
        }

        var li = document.createElement("li")
        li.textContent = data[i]._id
        document.getElementById('my-List').appendChild(li)
        if(data[i].completed === true) {
            li.style.textDecoration = "line-through"
        }
        
        var img = document.createElement("img")
        img.src = data[i].imgUrl
        img.style.width = "150px"
        document.getElementById('my-List').appendChild(img)

        var input = document.createElement("input")
        input.type = "checkbox"
        input.name="checkbox"
        input.value = data[i]._id
        document.getElementById('my-List').appendChild(input) 
        
        var btn = document.createElement("button")
        btn.textContent= "delete"
        btn.id= "button"
        btn.value = data[i]._id
        document.getElementById('my-List').appendChild(btn)
    

//Put
const myLi = document.querySelectorAll("li")
        input.addEventListener("input", async function (e) {               
            e.preventDefault()
            var x = input.parentNode
             li.parentNode
            var id = this.value
            if(x = this.checked) {
               li.style.textDecoration='line-through' 
            } else{
                li.style.textDecoration='none'      
           }
        var newTodo = {
           completed:  this.checked
        }
        
           await axios.put("https://api.vschool.io/CarlosRobinson1/todo/" + id , newTodo)
           
    })
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
            todoform.title.value = ""
            axios.post("https://api.vschool.io/CarlosRobinson1/todo", newTodo)
            
             getData()
            .catch(error => console.log(error))
            
            
        }) 
    //Delete
    btn.addEventListener("click", async function (e) {               
        e.preventDefault()
       btn.parentNode
       var id = this.value

       await axios.delete("https://api.vschool.io/CarlosRobinson1/todo/" + id )
        getData()

    })

    
}

}

    
    getData()
    function clearList(){
        const el = document.getElementById('my-List')
        while(el.firstChild){
            el.removeChild(el.firstChild)
        }
        
    }
    








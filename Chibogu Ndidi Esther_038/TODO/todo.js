let lastId = 200

window.onload = () =>{
    loadDoc()
} 
// Load all TODO list from API 
function loadDoc() {
    let content = ""
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        const oldData = this.responseText
        const newData = JSON.parse(oldData);
        content+= '<p>All Todos</p>'
        content += '<table><tr ><th>ID </th> <th> User ID </th>  <th> Title</th>  <th> Actions </th> </tr>';
        newData.forEach( (datas,index) => {
            content += `<tr class="tr-${index}"> <td>` + datas.id + '</td>' + '<td>' + datas.userId + '</td>'  + '<td>' + datas.title + '</td>'
           +  '<td>' + '<button onclick="editTodo(this)">Edit</button> '
           + '</td>' +  '</tr>' ;
        });
        content+= '</table>';
        document.getElementById("demo").innerHTML = content;

      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
    xhttp.send();
}

// Add New Todo using POST method
const addTodo = () =>{
        let new_title = document.getElementById("text_input").value;
        if(typeof new_title == 'undefined' || new_title == ''){
            // console.log("hello")
            return false;
        }            

	
	fetch('https://jsonplaceholder.typicode.com/todos/', {
		method: 'POST',
		body: JSON.stringify({
		title: new_title,
         completed: false,
		  userId: 11
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
	  })
	  .then(response => response.json())
	  .then(json => {console.log(json);
        document.getElementById("text_input").value = ""
        addNewTodo(json)
    })
}

// Manually add new TODO to the existing table
const addNewTodo = (arg) => {
    oldContent = document.querySelector("table").innerHTML;
    newRow = `<tr class="tr-${++lastId}"><td>${lastId}</td> <td>${arg.userId}</td> <td>${arg.title}</td> <td><button onclick=\"editTodo(this)\">Edit</button> </td> </tr>`;
    document.querySelector("table").innerHTML = oldContent + newRow;
}

// Initialize Editing of the TODO paste the content of the todo in the input
const editTodo = (arg) => {
    let parentC = arg.parentElement.parentElement.className;
    console.log(parentC)
    let oldTitle = document.querySelector(`.${parentC} > td:nth-child(3)`).innerHTML;
    let id = document.querySelector(`.${parentC} > td:nth-child(1)`).innerHTML;
    let userId = document.querySelector(`.${parentC} > td:nth-child(2)`).innerHTML
    document.getElementById('text_input').value = oldTitle
    document.getElementById("btn").setAttribute("onclick", `addEditTodo('${parentC}',${id},${userId})`)
    document.getElementById("btn").innerHTML = "Save Changes"
    // console.log(oldTitle)
}


// Do the actual editing and update it in the server using PUT
const addEditTodo = (arg,newId,newUserId) => {

    // console.log(arg)
    newTitle = document.getElementById("text_input");
    if(typeof newTitle.value == "undefined" || newTitle.value == ""){
        alert("Please input a valid title")
        return false;
    }

    document.querySelector(`.${arg} > td:nth-child(3)`).innerHTML = newTitle.value;
    document.getElementById("btn").innerHTML = "Add New Todo"
    // Reset the function attribute
    document.getElementById("btn").setAttribute("onclick", "addTodo()")

    fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`, {
		method: 'PUT',
		body: JSON.stringify({
		title: newTitle.value,
		id:newId,
         completed: false,
		  userId:newUserId
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
	  })
	  .then(response => response.json())
	  .then(json => {console.log(json);

    })
    newTitle.value = ""
}
let lastId = 200

const showTodo = () =>{
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
        content+= '<h3>All Todos</h3>'
        content += '<table><tr ><th>ID </th> <th> User ID </th>  <th> Title</th>  <th> completed </th> </tr>';
        newData.forEach( (datas,index) => {
            content += `<tr class="tr-${index}"> <td>` + datas.id + '</td>' + '<td>' + datas.userId + '</td>'  + '<td>' + datas.title + '</td>'
             + '<td>' + datas.completed + '</td>'  + '</tr>' ;
        });
        content+= '</table>';
        document.getElementById("demo").innerHTML = content;

      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
    xhttp.send();
}

const userListContainer = document.getElementById("user-list-container")

const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send()
request.onload = () => {
    if(request.status == 200) {
        JSON.parse(request.response).forEach(user => {
            const userList = new UserList(user)
            userListContainer.append(userList.userListElement())
        })
    }
}


// presenting with the server
class UserList {
    constructor(user) {
        this.list = document.createElement("li")
        this.list.innerHTML = `<div>
            <p><span class="prop">Name</span>: ${user.name}</p>
            <p><span class="prop">Phone</span>: ${user.phone}</p>
            <p><span class="prop">Username</span>: ${user.username}</p>
            <p><span class="prop">city</span>: ${user.address.city}</p>
            <p><span class="prop">zipcode</span>: ${user.address.zipcode}</p>
            <p><span class="prop">suite</span>: ${user.address.suite}</p>
        </div>`        
    }
    userListElement() {
        return this.list
    }
}


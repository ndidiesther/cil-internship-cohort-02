 fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    let usersBox = document.querySelector('.users')
    data.forEach(user => {
        console.log(data)
        usersBox.innerHTML += 

        `<div>
            
            <h4>${user.name}</p>
            <h4>${user.username}</h4>
            <p>${user.email}</p>
        </div>
        `
        
    })
   
})

fetch( 'https://https://jsonplaceholder.typicode.com/users')
.then( response => { 
    return response.json();
})
.then( user => { 
    console.log( users );
});

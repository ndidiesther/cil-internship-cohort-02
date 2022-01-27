const api_url = 'https://jsonplaceholder.typicode.com/users';

async function getApi(url){

    const response = await fetch(url);

    const data = await response.json();
    display_list(data);
}

getApi(api_url)

function display_list(data){
    const list = document.querySelector('.users-list');        

    for (let i = 0; i < data.length; i++){
        user = data[i].name;

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(user));
        list.append(li)

        console.log(data[i].name);
    }
}
let getUsers=document.getElementById('getUsers');
let table=document.getElementById('table');



let url="https://jsonplaceholder.typicode.com/users";
let usersList=[];
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    usersList=data
})

getUsers.addEventListener('click',function(){
    for (let user of usersList){
        let container=document.createElement('tr');
        let SnoElement=document.createElement('td');
        let nameElement=document.createElement('td');
        let EmailElement=document.createElement('td')
        let UserNameEl=document.createElement('td')
        let WebsiteEl=document.createElement('td')
        SnoElement.textContent=user.id;
        container.appendChild(SnoElement);
        nameElement.textContent=user.name;
        container.appendChild(nameElement);
        EmailElement.textContent=user.email;
        container.appendChild(EmailElement)
        UserNameEl.textContent=user.username;
        container.appendChild(UserNameEl)
        WebsiteEl.textContent=user.website;
        container.appendChild(WebsiteEl)
        table.appendChild(container)
    }

    console.log(usersList)

})

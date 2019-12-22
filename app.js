const data = [
    {
        name: "Donacien",
        age: 32,
        gender: "Male",
        lookingfor: "Female",
        location: "Cameroon",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Jen Smith",
        age: 22,    
        gender: "Female",
        lookingfor: "Male",
        location: "Cameroon",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Zidane Zandroid",
        age: 32,
        gender: "Male",
        lookingfor: "Female",
        location: "Cameroon",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Jenifer",
        age: 26,
        gender: "Female",
        lookingfor: "Male",
        location: "Cameroon",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        name: "Karlson",   
        age: 32,
        gender: "Male",
        lookingfor: "Female",
        location: "Cameroon",
        image: "https://randomuser.me/api/portraits/men/83.jpg"
    },
    {
        name: "Joy",
        age: 32,
        gender: "Female",
        lookingfor: "Male",
        location: "Cameroon",
        image: "https://randomuser.me/api/portraits/women/5.jpg"
    }
];


//Profile Iterator
const profiles = profileIterator(data);
nextProfile();
document.querySelector('#next').addEventListener('click',nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
    document.querySelector('#profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Preferences: ${currentProfile.gender} Looking For ${currentProfile.lookingfor} </li>
        <li class="list-group-item">Location: ${currentProfile.location} </li>
    </ul>
    `;
    document.querySelector('#imageDisplay').innerHTML = `
    <img src=${currentProfile.image}>
    `
    }else {
        window.location.reload();
    }
}

function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false} : {done:true};
        }
    }
}




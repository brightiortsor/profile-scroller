
const data = [
    {
        name: 'Griffin Doyle',
        age: 45,
        gender: 'Male',
        lookingFor: 'Female',
        location: 'Houston, Texas',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },

    {
        name: 'John Wick',
        age: 52,
        gender: 'Male',
        lookingFor: 'Female',
        location:'California, US',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },

    {
        name: 'Gabriella Doug',
        age: 34,
        gender: 'Female',
        lookingFor: 'Male',
        location: 'Accra, Ghana',
        image: 'https://randomuser.me/api/portraits/women/34.jpg'
    },

    {
        name: 'Hannah Montana',
        age: 25,
        gender: 'Female',
        lookingFor: 'Female',
        location: 'Chinatown, Japan',
        image: 'https://randomuser.me/api/portraits/women/77.jpg'
    },

    {
        name: 'Sarah Juss',
        age: 47,
        gender: 'Female',
        lookingFor: 'Male',
        location:'Lagos, Nigeria',
        image: 'https://randomuser.me/api/portraits/women/91.jpg'
    },

    {
        name: 'Foster Manny',
        age: 29,
        gender: 'Male',
        lookingFor: 'Female',
        location: 'Downtown, Mexico',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name: 'Backer James',
        age: 47,
        gender: 'Male',
        lookingFor: 'Female',
        location:'RisingDay, India',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },

    {
        name: 'Sucre Papito',
        age: 29,
        gender: 'Male',
        lookingFor: 'Female',
        location: 'Dublin, Ireland',
        image: 'https://randomuser.me/api/portraits/women/89.jpg'
    }
];

const profiles = profileIterator(data);

//manually call first profile
nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;
    
    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group w-50">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
    </ul>
    `; 
 const displayNew = document.getElementById('imageDisplay');
 displayNew.innerHTML = `<img src="${currentProfile.image}"> `;
        displayNew.style.width = "100%"
        displayNew.style.height = "auto";
    } else {
        window.location.reload();
    }
}

//profile  iterator
function profileIterator(profiles){
    let nextIndex = 0;
    return {
       next: function(){
           return nextIndex < profiles.length ? 
           {value: profiles[nextIndex++], done: false} :
           {done: true}
       } 
    }
}

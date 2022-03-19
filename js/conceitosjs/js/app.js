function toggleTheme(){
    document.body.classList.toggle('dark');
}

document.querySelector('#theme-toggle').addEventListener('click', (event) => {
    event.preventDefault();

   
toggleTheme();
});



const cast = [
    'Keanus Reeves',
    'Carrie-Anne Moss',
    'Laurence Fishburne',
    'Hugo Weaving'
]

const castList = document.querySelector('.cast');

cast.forEach(person => {
    //Criar um elemento li
    const item = document.createElement("li");
    const personName = document.createTextNode(person);
    item.appendChild(personName);

    castList.appendChild(item);
  
})

//----------------------------------------------------------



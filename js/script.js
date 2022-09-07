let pokemonList = [
    {
        name: 'Bulbasar', 
        height: 6, 
        type: 'grass'
    },
    {
        name: 'Eve',
        height: 5, 
        type: 'fire'
    },
    {
        name: 'Nando',
        height: 7, 
        types: ['poison', 'flying']
    }
]

for (let i = 0; i < pokemonList.length; i++) { // loop to pokemon characters 
    if (pokemonList[i].height > 6) {
        document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + ' -Wow, that\'s huge!' + '</p>');
     } else {
       document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + '</p>');
     }
}
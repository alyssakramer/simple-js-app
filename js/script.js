let pokemonRepository = (function () {
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
            type: ['poison', 'flying']
        }
    ];
    return {
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList;
        }
    };
}) ();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' }]

// for (let i = 0; i < pokemonList.length; i++) { // loop to pokemon characters 
   // if (pokemonList[i].height > 6) {
   //      document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + ' -Wow, that\'s huge!' + '</p>');
   //  } else {
   //    document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + '</p>');
   //  }
   // }

   pokemonRepository.getAll().forEach(function(pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.height + ' tall and ' + pokemon.type + ' type ');
   }); 

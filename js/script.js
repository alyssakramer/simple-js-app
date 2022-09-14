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
        },
    ];
    function add(pokemon){
        if (typeof pokemon==="object") {
            let pokeKeys=Object.keys(pokemon);
            if (pokeKeys.indexOf('name')!==-1 && pokeKeys.indexOf('height')!==-1 && pokeKeys.indexOf('type')!==-1){
                pokemonList.push(pokemon);                
            } else {
                console.log("Please enter the name, height and type of the pokemon!");
            }
        } else {
            console.log("Please input valid data type");
        }
    }
      function getAll() {
        return pokemonList;
      }

      // Add single pokemon item in UL list as button, assign pokemon name to button and when button clicked, log name into console
      function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
      }
      function showDetails(pokemon) {
        console.log(pokemon.name);
      }
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
      };
    })();
    
    // Add one Pokemon
    pokemonRepository.add({
            name:'Pikachu',
            height: 6,
            type: ['Electric']
        });
    
    console.log(pokemonRepository.getAll());
    
    // List the name and height of every Pokemon from the pokemonList. 
    pokemonRepository.getAll().forEach (pokemonRepository.addListItem);
    

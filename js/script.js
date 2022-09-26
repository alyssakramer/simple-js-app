let pokemonRepository = (function () {
    let pokemonList = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
    
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon is not correct')
        }
    }

      function getAll() {
        return pokemonList;
      }

      // Add single pokemon item in UL list as button, assign pokemon name to button and when button clicked, log name into console
      function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        pokemonList.addClass(group-list-item)
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.addClass('btn-primary');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
      }
      
      function loadList() {
        return fetch(apiURL).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

      // going to add more in a later task
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showDetailsModal(pokemon);
        });
    };

    function showDetailsModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        let modalHeader = $('modal-header');
        modalTitle.empty();
        modalBody.empty();

        let nameElement = $('<h1>' + pokemon.name + '</h1>');
        let imageElementFront = $('<img class="modal-img" style="width: 50%">');
        imageElementFront.attr("src", pokemon.imgUrlFront);
        let heightELement = $('<p>' + "height: " + pokemon.height + '</p>')
        let typesElement = $('<p>' + "type: " + pokemon.type + '</p>')


        // appends the above elements to the modal container
        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(heightElement);
        modalBody.append(typeElement);
        

        modalContainer.classList.add('is-visible');
        

        modalContainer.addEventListener('click', (e) => {
            // Since this is also triggered when clicking INSIDE the modal
            // We only want to close if the user clicks directly on the overlay
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
          })
        }


        function hideModal() {
          let modalContainer = document.querySelector('.pokemon-details-modal');
          modalContainer.classList.remove('is-visible');
      }
  
      // hides the modal when pressing the escape key
      window.addEventListener('keydown', (e) => {
          let modalContainer = document.querySelector('.pokemon-details-modal');
          if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
              hideModal();
          }
      })
    

      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails, 
        showDetailsModal: showDetailsModal
      };
    })();
    

    
    console.log(pokemonRepository.getAll());

    pokemonRepository.loadList().then(function () { 
        pokemonRepository.getAll().forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
    });
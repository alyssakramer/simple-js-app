let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):console.log("pokemon is not correct")}function n(){return t}function o(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(t){console.error(t)})}function i(t){let e=$(".modal-body"),n=$(".modal-title");$("modal-header");let o=Array.isArray(t.types)?t.types.map(t=>t.type.name).join(", "):"";n.empty(),e.empty();let i=$("<h1>"+t.name+"</h1>"),a=$('<img class="modal-img" style="width: 50%">');a.attr("src",t.imageUrl);let l=$("<p>height: "+t.height+"</p>"),r=$("<p>type: "+o+"</p>");n.append(i),e.append(a),e.append(l),e.append(r),exampleModal.addEventListener("click",t=>{t.target===exampleModal&&hideModal()})}return{add:e,getAll:n,addListItem:function t(e){let n=document.querySelector(".pokemon-list"),a=document.createElement("li"),l=document.createElement("button");l.innerText=e.name,l.setAttribute("data-toggle","modal"),l.setAttribute("data-target","#exampleModal"),l.classList.add("btn"),a.appendChild(l),n.appendChild(a),l.addEventListener("click",function(t){(function t(e){o(e).then(function(){i(e)})})(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let n={name:t.name,detailsUrl:t.url};e(n),console.log(n)})}).catch(function(t){console.error(t)})},loadDetails:o,showDetailsModal:i}}();console.log(pokemonRepository.getAll()),pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});
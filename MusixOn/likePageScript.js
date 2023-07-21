//playlist Table 

//shopping-cart function 
const playlistFunc = document.getElementById('playlist');
const PlaylistId = document.getElementById('PlaylistId');

playlistFunc.addEventListener('click',() => {
    PlaylistId.style.display = "block";
});

function toggleSearchBox() {
    var searchIcon = document.getElementById("search-icon");
    var searchContainer = document.getElementById("search-container");
  
    if (searchIcon.classList.contains("fa-magnifying-glass")) {
      searchIcon.classList.remove("fa-magnifying-glass");
      searchIcon.classList.add("fa-times");
  
      var searchBox = document.createElement("input");
      searchBox.setAttribute("type", "text");
      searchBox.setAttribute("placeholder", "Search");
      searchContainer.appendChild(searchBox);
    } else {
      searchIcon.classList.remove("fa-times");
      searchIcon.classList.add("fa-magnifying-glass");
  
      var searchBox = document.querySelector("#search-container input");
      searchContainer.removeChild(searchBox);
    }
  }
  

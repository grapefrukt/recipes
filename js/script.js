document.addEventListener("DOMContentLoaded", function(event) {
  
  const inputElement = document.querySelector('#find');
  const elements = Array.from(document.getElementsByClassName("recipe"));

  const clearElement = document.querySelector(".find-clear");

  const updateSearch = function(){
    // const result = document.querySelector('.result');
    // result.textContent = `You like ${event.target.value}`;
    console.log(inputElement.value);
    const value = inputElement.value;
    
    elements.forEach(element => {
      if (value == "") {
        element.classList.remove("search-hit");
        element.classList.remove("search-miss");
      } else if (element.innerHTML.toLocaleLowerCase().indexOf(value) > -1) {
        element.classList.add("search-hit");
        element.classList.remove("search-miss");
      } else {
        element.classList.add("search-miss");
        element.classList.remove("search-hit");
      }
    });
  };

  clearElement.addEventListener("click", (event) => {
    inputElement.value = "";
    updateSearch();
  });

  inputElement.addEventListener('input', (event) => {updateSearch()});

});
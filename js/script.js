document.addEventListener("DOMContentLoaded", function(event) {
  
  const inputElement = document.querySelector('#find');
  const elements = Array.from(document.getElementsByClassName("recipe"));

  const clearElement = document.querySelector(".find-clear");

  const updateSearch = function(){
    const value = inputElement.value.toLocaleLowerCase();
    
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

  const headers = Array.from(document.getElementsByTagName("h3"));
  const categories = Array.from(document.getElementsByClassName("category"));

  headers.forEach(element => {
    element.addEventListener('click', (event) => {
      const tag = event.srcElement.dataset.tag;
      filterCategories(tag);
    });
  });

  const filterCategories = function(tag){
    categories.forEach(category => {
      console.log(category.dataset.tag);
        if (category.dataset.tag == tag){
          category.classList.remove("contracted");
        } else {
          category.classList.add("contracted");
        }
    });
  }

});
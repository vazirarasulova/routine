var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormList = document.querySelector(".form__list");
var plans = [];

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  var inputValue = elFormInput.value.trim();
  
  elFormInput.value = null;

  var plan = {
  id: plans.length,
    title: inputValue
  }

  plans.push(plan);
  elFormList.innerHTML = " ";

  for (var item of plans){
    var newItem = document.createElement("li");
    newItem.textContent = item.id + 1 + "." + item.title;
    elFormList.appendChild(newItem);
  }

})
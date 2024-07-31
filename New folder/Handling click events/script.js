"Use strict";

// querySelector selects elements by their IDs or Class
// addEventListener put event and decide what to change
// by putting a function and that function is called EventHandler
document.querySelector("#button").addEventListener("click", function () {
  console.log((document.querySelector("#text").value = "How you doin?"));
  document.querySelector('#text').textContent = 'How you doin?';
  console.log(text, typeof text);
  if(!text){
    document.querySelector('#text').textContent = 'No text';
  }
});

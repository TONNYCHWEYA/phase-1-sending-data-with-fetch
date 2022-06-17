// Add your code here
function submitData(name, email){
  
  const configurationObject = {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     Accept:"application/json",
   },
   body: JSON.stringify({
    name: `${name}`,
    email: `${email}`,
   })
  }
    return fetch("http://localhost:3000/users", configurationObject)
   .then(function(response){
     return response.json()})
    .then(function(object){
      
      let body = document.querySelector("body")
body.textContent = object.id
})
.catch(function (error) {
  alert(error.message);
  console.log(error.message);
  document.body.innerHTML = error.message;
})


    
}

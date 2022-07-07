let sendButton = document.getElementById("button");
let modal = document.getElementById("modal");
let homePage = document.getElementById("homepage");
let finalPage = document.getElementById("finalpage");
let cancelButton = document.getElementById("cancel-button");
let acceptButton = document.getElementById("accept-button");
let personName = document.getElementById("person-name");
let inputName = "";
let errorMessage = "";


sendButton.addEventListener("click", () =>{
    homePage.style.visibility = "hidden";
    modal.style.visibility = "visible";
    modal.style.zIndex= 1000;
    document.body.style.backgroundColor = "red"; 
    

})
cancelButton.addEventListener("click", () =>{
    modal.style.visibility = "hidden";
    homePage.style.visibility = "visible";
   
})
acceptButton.addEventListener("click", () =>{
    inputName = document.getElementById("input-name").value
    if(inputName == ""){
        document.getElementById("error-message").innerHTML = "Introduce un nombre :)";
    } else{
        
        personName.innerHTML = inputName;
        console.log(inputName);
        modal.style.visibility = "hidden";
        homePage.style.visibility = "hidden";
        finalPage.style.visibility = "visible";
    }
   
})

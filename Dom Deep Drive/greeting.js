const nameInput  = document.getElementById("nameInput");
const greetBtn  = document.querySelector("#greetBtn");
const clearBtn  = document.querySelector("#clearBtn");
const greeting = document.querySelector("#greeting");
const letterCount = document.querySelector("#letterCount");


//a function that reads the input and update the page
function greet()
{
    const name = nameInput.value.trim();
    console.log(typeof name);

    if(name === "")
    {
        greeting.textContent = "Please type your name first!";
        return;
    }
    if(name.length < 2)
    {
        greeting.textContent = "Name must be at least 2 characters long!";
        return;
    }
    greeting.textContent = "Hello ," + name
}


//react to what the user does
greetBtn.addEventListener("click" , greet);

nameInput.addEventListener("keydown" , function(event)
{
    if(event.key === "Enter")
    {
        greet();
    }
});


//live letter count
nameInput.addEventListener("input", function()
{
    letterCount.textContent = nameInput.value.length + "letters typed.";
});

clearBtn.addEventListener("click" ,clearFn);

function clearFn()
{
    nameInput.value = "";
    greeting.textContent = "Hello , strenger!";
    letterCount.textContent = "0 letters typed.";
    nameInput.focus();
}
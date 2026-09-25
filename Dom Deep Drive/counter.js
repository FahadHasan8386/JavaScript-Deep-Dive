const countE1 = document.querySelector("#count");
const message = document.querySelector("#message");
const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");
const resetBtn = document.querySelector("#resetBtn");

//the number lives in a normal Js Variable.
//the page is just a pictuer of that variable
let count = 0 ;

function render()
{
    countE1.textContent = count;

    if(count > 0)
    {
        countE1.styte.color = "green";
    }
    else if(count < 0)
    {
        countE1.style.color = "red";
    }
    else{
        countE1.style.color  = "black";
    }

    if(count === 10)
    {
        message.textContent = "Ten Clicks! Nice.";
    }
    else{
        message.textContent = "Current value: " +count;
    }
}

plusBtn.addEventListener("click" ,function()
{
    count = count + 1;
    render();
});

minusBtn.addEventListener("click" , function()
{
    count = count - 1;
    render();
})

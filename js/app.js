const endDate = "20 May 2023 11:59 PM"

document.getElementById("endDate").innerText = endDate
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000
    console.log(diff);

//condition to stop return nehative values
    if (diff < 0) return;
    //converts into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 2400) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}
//initial function
clock()

// set interval for the countdown
setInterval(
    () =>{
        clock()
    },
    1000
)
   
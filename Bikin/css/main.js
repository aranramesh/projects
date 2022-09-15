// document.querySelector('btn').addEventListener('click',(event) => {
//     event.target.textcontent ='welcome'
// } )


document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
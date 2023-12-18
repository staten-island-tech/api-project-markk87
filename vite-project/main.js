const URL = `https://data.cityofnewyork.us/resource/nc67-uf89.json` //camera violations
const crashURL = `https://data.cityofnewyork.us/resource/bm4k-52h4.json` //vehicle thing a ma bob
const imageContainer = document.querySelector(".imageContainer");
const plateForm = document.getElementById("plateForm");


const DOMSelectors = {
  button: document.querySelector("button")
}

async function getCrashData(crashURL) {
  try {
    const crashResponse = await fetch(crashURL);

    console.log(crashResponse);
    const crashData = await crashResponse.json();
    console.log(crashData);
    imageContainer.innerHTML = "";

    
  } catch (error) {
    console.log("Sorry, it didnt work");
  }
}

getCrashData();

// async function getData(URL) {
//   try {
//     const response = await fetch(URL);
      
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//     imageContainer.innerHTML = "";

//     data.forEach(el => {
//       const textEl = document.createElement("p");
//       textEl.textContent = `Plate: ${el.plate}, Violation: ${el.violation}, Date: ${el.issue_date}`;
//       imageContainer.appendChild(textEl);

      
//     });
//   } catch (error) {
//     console.log("Sorry, we could not find what you are looking for");
//   }
// }
// getData(URL);

// plateForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const plateInput = document.getElementById("plateNumber").value;
//   getData(`${URL}?plate=${plateInput}`);
// });


// DOMSelectors.button.addEventListener("click", function(e){
//   e.preventDefault();
//   const buttonClick = 
// })


const URL = `https://v6.exchangerate-api.com/v6/32a42142b33a098c2cee116a/latest/USD`

const DOMSelectors = {
  mainButton: document.querySelector("#activationButton")
}

async function getData (URL) {
  try {
    const response = await fetch(URL);

    console.log(response);

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Nope.")
  }
}

getData(URL);

async function convertUSD() {
  const usdAmount = document.getElementById('usdAmount').value;
  const currencyCode = document.getElementById('currencyCode').value;

  const apiKey = 'YOUR_EXCHANGE_RATE_API_KEY'; // Replace with your actual API key
  const apiUrl = `https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result === 'success') {
      const exchangeRate = data.rates[currencyCode];
      const convertedAmount = (usdAmount * exchangeRate).toFixed(2);
      document.getElementById('result').innerText = `${usdAmount} USD is approximately ${convertedAmount} ${currencyCode}`;
    } else {
      document.getElementById('result').innerText = 'Failed to fetch exchange rates. Please try again later.';
    }
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    document.getElementById('result').innerText = 'An error occurred. Please try again later.';
  }
}

DOMSelectors.mainButton.addEventListener("click", function(event) {
  event.preventDefault();
  convertUSD();
})















// const URL = `https://data.cityofnewyork.us/resource/nc67-uf89.json` //camera violations
// const crashURL = `https://data.cityofnewyork.us/resource/bm4k-52h4.json` //vehicle thing a ma bob
// const imageContainer = document.querySelector(".imageContainer");
// const plateForm = document.getElementById("plateForm");
// const seeMoreButton = document.querySelector("button");


// const DOMSelectors = {
//   button: document.querySelector("button")
// }

// async function getCrashData(crashURL) {
//   try {
//     const crashResponse = await fetch(crashURL);

//     console.log(crashResponse);
//     const crashData = await crashResponse.json();
//     console.log(crashData);
//     imageContainer.innerHTML = "";

    
//   } catch (error) {
//     console.log("Sorry, it didnt work");
//   }
// }

// getCrashData();

// async function getData(URL) {
//    try {
//      const response = await fetch(URL);
      
//      console.log(response);
//     const data = await response.json();
//      console.log(data);
//      imageContainer.innerHTML = "";

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


// seeMoreButton.addEventListener("click", function(e) {
//   e.preventDefault();
//   const buttonClick = document.getElementById("plateNumber").value;
//   getCrashData(`${crashURL}?`)
// })

// DOMSelectors.button.addEventListener("click", function(e){
//   e.preventDefault();
//   const buttonClick = 
// })


import { gsap } from "gsap";

gsap.from('#heading', {delay: 2, duration: 1.5, y: '-800%', ease: "expo" });
gsap.from('#result', {duration: 1, x: '-750%', ease: 'elastic', delay: 1});
gsap.from('#usdToCurrencyForm', {duration: 3, y: '-200%', ease: 'expo'});




async function convertUSD() {
  const usdAmount = document.getElementById('usdAmount').value;
  const currencyCode = document.getElementById('currencyCode').value;

  
  const apiUrl = `https://open.er-api.com/v6/latest/USD?apikey=`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    

    if (data.result === 'success') {
      const exchangeRate = data.rates[currencyCode];
      const convertedAmount = (usdAmount * exchangeRate).toFixed(2); // this should round the number to 2 decimal places so ppl dont get a huge amount
      document.getElementById('result').textContent = `${usdAmount} USD is approximately ${convertedAmount} ${currencyCode}`;
  
    } else {
      document.getElementById('result').textContent = 'Failed to fetch exchange rates. Please try again later.';
    }
  } catch (error) {
    if (error != 200 && error >= 400) {
      document.getElementById('result').textcontent = 'We could not find what you were looking for'
    } else {

    
    console.error('Error fetching exchange rates:', error);
    document.getElementById('result').textContent = 'An error occurred. Please make sure you entered all the values.';
    }
  }
}

document.querySelector(".button").addEventListener("click", function(event) {
  event.preventDefault();
  convertUSD();
})

document.getElementById('currencyCode').value = '';

// document.getElementById('result').addEventListener("click", function() {
//   e.preventDefault();
//   gsap.fromTo('#result', {opacity: 1, x: '0%', scale: 1}, {duration: 2, opacity: 0, scale: 0} );
// })







// async function getData (URL) {
//   try {
//     const response = await fetch(URL);

//     console.log(response);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Nope.")
//   }
// }

// getData(URL);


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
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap";

gsap.from('#heading', {delay: 2, duration: 1.5, y: '-800%', ease: "expo" });
gsap.from('#result', {duration: 1, x: '-750%', ease: 'elastic', delay: 1});
gsap.from('#usdToCurrencyForm', {duration: 3, y: '-300%', ease: 'expo', delay: 1.5});
gsap.from('#convertFactors', {duration: 1, x: '-500%', ease: 'expo', delay: 2});
gsap.from('.loadText', {duration: 1, scale: 2, x: '-500%', ease:'expo', delay: 1.9});





async function api() {
  const apiUrl = `https://open.er-api.com/v6/latest/USD?apikey=`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.result === 'success') {
      document.querySelector(".button").addEventListener("click", function(event) {
        event.preventDefault();
        convertUSD(data)
        
      })

      const conversionFactorsContainer = document.querySelector("#convertFactors");
      Object.keys(data.rates).forEach((currency) => {
      conversionFactorsContainer.insertAdjacentHTML("beforeend", `<p id="conversionFactors">${currency}: ${data.rates[currency]}</p>`);
});

      const currencyCodes = Object.keys(data.rates);
      currencyCodes.forEach((code) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = code;
        const codes = document.querySelector('#currencyCode')
        codes.appendChild(option)
        console.log(option);
      });
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
api()

async function convertUSD(data) {
  const usdAmount = document.getElementById('usdAmount').value;
  console.log(usdAmount)

    
      const currencyCode = document.getElementById('currencyCode');

      console.log('Data Rates:', data.rates);
      const exchangeRate = data.rates[currencyCode.value];
      console.log('Exchange Rate:', exchangeRate);
      const convertedAmount = (usdAmount * exchangeRate).toFixed(2); // this should round the number to 2 decimal places so ppl dont get a huge amount
      document.getElementById('result').textContent = `${usdAmount} USD is approximately ${convertedAmount} ${currencyCode.value}`;
    
}


document.getElementById('currencyCode').value = '';

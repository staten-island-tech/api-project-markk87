const URL = `https://api.breakingbadquotes.xyz/v1/quotes`

async function getData(URL) {
  try {
      const response = await fetch(URL);
      
      console.log(response);
      const data = await response.json();
      console.log(data);
      document.querySelector("h1").textContent == data.quote
      document.querySelector("h2").textContent == data.author
      
    
     
  } catch (error) {
  }
  
}
getData(URL);
const URL = `https://nrs.harvard.edu/urn-3:HUAM:OCP16703_dynmc?height=150&width=150`



async function getData(URL) {
  try {
      const response = await fetch(URL);
      
      console.log(response);
      const data = await response.json();
      console.log(data);
      document.querySelector("h1").textContent = data.content;
    
      
    
      
  } catch (error) {
    console.log(error)
  }
}
getData(URL);

const URL = `https://fortnite-api.com/v1/map`


async function getData(URL) {
  try {
      const response = await fetch(URL);
      
      console.log(response);
      const data = await response.json();
      console.log(data);
      
      
     
    
      
  } catch (error) {
    console.log(error)
  }
}
getData(URL);


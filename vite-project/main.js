const URL = `https://archive.org/metadata/id`

async function getData(URL) {
  try {
      const response = await fetch(URL);
      
      console.log(response);
      const data = await response.json();
      console.log(data);
     
     
  } catch (error) {
  }
  
}
getData(URL);
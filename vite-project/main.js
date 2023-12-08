const URL = `https://fortnite-api.com/v1/map`
const imageContainer = document.querySelector(".imageContainer")


async function getData(URL) {
  try {
    const response = await fetch(URL);
      
    console.log(response);
    const data = await response.json();
    console.log(data);

    const pois = data.data.pois;

    pois.forEach(imageURL => {
      const imgEl = document.createElement("p");
      imgEl.src = imageURL;
      imgEl.alt = "Fortnite Map";

       imageContainer.appendChild(imgEl)
    });
      
      
     
    
      
  } catch (error) {
    console.log(error)
  }
}
getData(URL);


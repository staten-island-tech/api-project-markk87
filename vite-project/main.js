const URL = `https://data.cityofnewyork.us/resource/ez4e-fazm.json`
const imageContainer = document.querySelector(".imageContainer")



async function getData(URL) {
  try {
    const response = await fetch(URL);
      
    console.log(response);
    const data = await response.json();
    console.log(data);

    const schoolYear = data.school_year;

    schoolYear.forEach(el => {
      const textEl = document.createElement("p");
      textEl.textContent = el.name;
      

      imageContainer.appendChild(textEl);
    });
      
      
     
    
      
  } catch (error) {
    console.log(error)
  }
}
getData(URL);


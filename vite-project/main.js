const URL = `https://data.cityofnewyork.us/resource/nc67-uf89.json`
const imageContainer = document.querySelector(".imageContainer");
    const plateForm = document.getElementById("plateForm");


async function getData(URL) {
  try {
    const response = await fetch(URL);
      
    console.log(response);
    const data = await response.json();
    console.log(data);
    imageContainer.innerHTML = "";

    data.forEach(el => {
      const textEl = document.createElement("p");
      textEl.textContent = `Plate: ${el.plate}, Violation: ${el.violation}, Date: ${el.issue_date}`;
      imageContainer.appendChild(textEl);
    });
  } catch (error) {
    console.log("Sorry, we could not find what you are looking for");
  }
}
getData(URL);

plateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const plateInput = document.getElementById("plateNumber").value;
  getData(`${URL}?plate=${plateInput}`);
});


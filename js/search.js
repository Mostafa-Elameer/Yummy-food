
export class Search {
  constructor() {

    this.searchLink = document.querySelector(".search")
    this.searchSection = document.querySelector("#search")
    this.searchNameInput = document.querySelector("#searchName")
    this.searchLetterInput = document.querySelector("#searchFirstLetter")
    console.log("im constractor search ");
    this.openSection()
    this.getApiSearchName()
    this.getApiSearchFirstLetter()
  }

  openSection() {
    this.searchLink.addEventListener("click", () => {
      this.searchSection.classList.remove("d-none")
    })
  }

  async getApiSearchName() {
    this.searchNameInput.addEventListener("keyup", async () => {
      let userSearch = this.searchNameInput.value;
      const Api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch}`)
      const response = await Api.json()
      this.displayData(response)
    })
  }

  async getApiSearchFirstLetter() {
    this.searchLetterInput.addEventListener("keyup", async () => {
      let userSearch = this.searchLetterInput.value;
      const Api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${userSearch}`)
      const response = await Api.json()
      console.log(response);
      this.displayData(response)
    })
  }

  // display Eny Data 
  displayData(response) {
    let allMealse = response.meals;
    let box = ``
    for (let i = 0; i < allMealse.length; i++) {
      box += `
                <div data-id="${allMealse[i].idMeal}"  class="card p-3 bg-transparent">
                  <div class="contintCard rounded-4">
                    <img  class="img-fluid" src="${allMealse[i].strMealThumb}" alt="${allMealse[i].strMealThumb}">
                    <div class="card-body d-flex justify-content-center align-items-center">
                      <h2>${allMealse[i].strMeal}</h2>
                    </div>
                  </div>
                </div>  `;
    }
    document.getElementById("showData").innerHTML = box;

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", (e) => {
        let id = card.getAttribute("data-id")
        document.getElementById("detilse").classList.remove("d-none")
        this.getApidetilse(id)
      })
    })

  }

  async getApidetilse(id) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const response = await api.json();
    console.log(id);
    this.diplayDetilse(response);
  }

  diplayDetilse(response) {

    let finle = response.meals;
    console.log(finle);
    let box = `
  
          <div class="dataDetilse container border py-2">
              <button id="close" class="btn btn-close bg-danger p-3 mb-2"></button>
  
          <div class="row">
            <div class="col-4">
              <img class="img-fluid" src="${finle[0].strMealThumb}" alt="">
              <h2>${finle[0].strMeal} </h2>
            </div>
            <div class="col-8">
              <p class="fs-5">${finle[0].strInstructions}</p>
              <p class="h2">Area : ${finle[0].strArea} </p>
              <p class="h2">Catogrey : ${finle[0].strCategory}</p>
              <span class="m-1 btn btn-info">${finle[0].strIngredient1} </span>
              <span class="m-1 btn btn-info">${finle[0].strIngredient2} </span>
              <span class="m-1 btn btn-info">${finle[0].strIngredient3} </span>
              <span class="m-1 btn btn-info">${finle[0].strIngredient4} </span>
              <span class="m-1 btn btn-info">${finle[0].strIngredient5} </span>
              <span class="m-1 btn btn-info">${finle[0].strIngredient6} </span>
              <div class="py-2">
              <p class="text-info h2 py-1">tags</p>
               <a class="btn btn-success" target="_blank"  href="${finle[0].strSource}">sourse</a>
              <a class="btn btn-danger" target="_blank"  href="${finle[0].strYoutube}">youtube</a>
              </div>
            </div>
          </div>
        </div>`
    document.getElementById("detilse").innerHTML = box;
    document.getElementById("close").addEventListener("click", function () {
      document.getElementById("detilse").classList.add("d-none")
    })
  }




}

export class Home {
  constructor() {
    this.loding = document.querySelector(".loding")
    console.log("im constractor home");
    this.getApi()
  }

  async getApi() {
    this.loding.classList.remove("d-none")
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=t")
    const response = await api.json()
    this.displayHome(response)
    this.loding.classList.add("d-none")
  }

  displayHome(response) {
    let allmeals = response.meals
    let box = ``
    for (let i = 0; i < allmeals.length; i++) {
      box += `
            <div data-id="${allmeals[i].idMeal}" class="card p-3 bg-transparent">
              <div id="koko" class="contintCard rounded-4">
                <img  class="img-fluid" src="${allmeals[i].strMealThumb}" alt="${allmeals[i].strMealThumb}">
                <div class="card-body d-flex justify-content-center align-items-center">
                  <h2>${allmeals[i].strMeal}</h2>
                </div>
              </div>
            </div>`}

    document.getElementById("showHome").innerHTML = box;
    this.getId()
  }

  getId() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", (e) => {
        let id = card.getAttribute("data-id")
        document.getElementById("detilse").classList.remove("d-none")
        this.getApidetilse(id)
      })
    })
  }

  //--------- get data id 
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
export class Category {
    constructor (){
        this.loding = document.querySelector(".loding")
        this.categoryLink = document.querySelector(".categories");
        this.categorySection = document.querySelector("#category");
        console.log("im constructor category");
        this.openSection ();
    }

    openSection () {
        this.categoryLink.addEventListener("click" , async()=>{
            this.categorySection.classList.remove("d-none")
            this.getApiCategory();
        })
    }

    async getApiCategory (){
        this.loding.classList.remove("d-none")
        const Api = await  fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const respnse = await  Api.json()
        this.displayCategory(respnse)
        this.loding.classList.add("d-none")

    }

    displayCategory (categorys){
        let allCategory  = categorys.categories
        console.log(allCategory);
        let box =``; 
        for (let i = 0 ; i < allCategory.length ; i++){
            box += `
                <div data-id="${allCategory[i].strCategory}"  class="card p-3 bg-transparent">
                    <div class="contintCard rounded-4">
                        <img class="img-fluid" src="${allCategory[i].strCategoryThumb}" alt="${allCategory[i].strCategoryThumb}">
                    <div class="card-body text-center">
                        <h2>${allCategory[i].strCategory}</h2>
                        <p>${allCategory[i].strCategoryDescription}</p>
                    </div>
                    </div>
                </div>
             `
             };
        document.getElementById("showCategory").innerHTML = box
     

        document.querySelectorAll(".card").forEach((card)=>{
            card.addEventListener("click" , (e)=> {
              let id = card.getAttribute("data-id")
              console.log(id);  
             this.getApidetilse(id)
            })
          })
    
    }

    async getApidetilse (id){
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        const response = await api.json();
        console.log(response.meals);
        this.displayData(response)
    }



    displayData(response){ 
        let allMealse = response.meals;
        let box = ``
        for (let i = 0 ; i <allMealse.length ; i ++ ){
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
       document.getElementById("showCategory").innerHTML=box ;
       
}

}
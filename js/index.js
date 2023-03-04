const loadPosts = (dataLimit) => {
  toggleSpinner(true);
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayAI(data.data.tools, dataLimit));
};

const displayAI = (AI, dataLimit) => {
  const aiContainer = document.getElementById("AI-container");
  aiContainer.innerHTML = "";
  //console.log(AI);

  const showAll = document.getElementById("show-all");
  if (dataLimit && AI.length > 6) {
    AI = AI.slice(0, 6);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
  AI.forEach((Ai) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card p-2 h-100">
                <img src="${Ai.image}" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Features</h5>
            <ol type="1">
              <li>${Ai.features[0]}</li>
              <li>${Ai.features[1]}</li>
              <li>${Ai.features[2]}</li>
            </ol>
              </div>
              <hr>
              <div class="d-flex justify-content-between">
                <div>
                  <h5>${Ai.name}</h5>
                  <p><i class="fa-regular fa-calendar-days"></i> ${Ai.published_in}</p>
                </div>
                <button onclick="aiDetails('${Ai.id}')" id="details-arrow" class="rounded-circle my-5 my-auto border bg-white border-0" data-bs-toggle="modal" data-bs-target="#aiModal"><i class="fa-solid fa-arrow-right text-danger fs-5"></i></button>
  
                
              </div>
          </div>
        `;
    aiContainer.appendChild(div);
    toggleSpinner(false);
  });
};

document.getElementById("btn-show-more").addEventListener("click", function () {
  loadPosts();
});

// spinner
const toggleSpinner = (isLoading) => {
  const loading = document.getElementById("loading");
  if (isLoading) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};

loadPosts(7);

const aiDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
      .then((res) => res.json())
      .then((data) => displayAiDetails(data.data));
  };


  const displayAiDetails = (data) => {
    console.log(data);
    const modalBody = document.getElementById("body-modal");
    modalBody.innerHTML = `
      <div class="col border border-danger rounded p-3 bg-danger-subtle">
            <h5 class="mt-3">${data.description}</h5>
            <!-- payment -->
            <div class="d-lg-flex gap-4 mt-4">
              <h6 class="bg-white p-3 text-success rounded">${
                data.pricing[0].price ? data.pricing[0].price : "Free of Cost/"
              }<span>${
      data.pricing[0].plan ? data.pricing[0].plan : "Basic"
    }</span></h6>
              <h6 class="bg-white p-3 text-warning-emphasis rounded ">${
                data.pricing[1].price ? data.pricing[1].price : "Free Of Cost/"
              }<span>${
      data.pricing[1].plan ? data.pricing[1].plan : "Pro"
    }</span></h6>
              <h6 class="bg-white p-3 text-danger-emphasis rounded">${
                data.pricing[2].price ? data.pricing[2].price : "Free of Cost /"
              }<span>${
      data.pricing[2].plan ? data.pricing[2].plan : "Enterprise"
    }</span></h6>
            </div>
            <div class="d-lg-flex   gap-4 mt-4">
              
            <!-- features -->
            <div>
              <h5 >Features</h5>
              <ul>
                <li>${
                  data.features[1].feature_name
                    ? data.features[1].feature_name
                    : "no data found"
                }
                  </li>
                <li>${
                  data.features[2].feature_name
                    ? data.features[2].feature_name
                    : "no data found"
                }</li>
                  
                  <li>${
                    data.features[3].feature_name
                      ? data.features[3].feature_name
                      : "no data found"
                  }</li>
              </ul>
            </div>
              
            <!-- integrations -->
            <div>
              <h5>Integrations</h5>
              <ul>
                <li>${
                  data.integrations[0] ? data.integrations[0] : "no data found"
                }
                  
                  </li>
                <li>${
                  data.integrations[1] ? data.integrations[1] : "no data found"
                }</li>
                <li>${
                  data.integrations[2] ? data.integrations[2] : "no data found"
                }</li>
              </ul>
            </div>

            </div>
          </div>
  
          
      `;
  };
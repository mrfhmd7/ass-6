const loadPosts= (dataLimit) => {
    toggleSpinner(true);
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => displayAI(data.data.tools,dataLimit));
      
  }
  
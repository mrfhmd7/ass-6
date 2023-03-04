const aiDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
      .then((res) => res.json())
      .then((data) => displayAiDetails(data.data));
  };
   
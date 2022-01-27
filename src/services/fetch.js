const callToApi = (inputValue) => {
  return fetch(`https://hp-api.herokuapp.com/api/characters/house/${inputValue.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.map((eachData, index) => {
        return {
          name: eachData.name,
          alternateNames: eachData.alternate_names,
          species: eachData.species,
          gender: eachData.gender,
          house: eachData.house,
          alive: eachData.alive,
          image: eachData.image,
          id: `${eachData.house.toLowerCase()}_${index}`
        };
      });
      return filteredData;
    });
};

export default callToApi;

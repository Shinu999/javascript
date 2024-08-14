// alert("click");

const button = document.getElementById ("search_button");
const input =document.getElementById ("city_input")

 async function getData(cityName){
  const promise = await fetch (
        `http://api.weatherapi.com/v1/current.json?key=26955470b8bf4a859e790739241408&q=${cityName}&aqi=yes`);
     return await promise.json()
};


button.addEventListener ("click", async () => {
    // alert("clicked");
    const value = input.value;
     const result = await getData(value);
     console.log(result);
     
    
}) ;


//http://api.weatherapi.com/v1/current.json?key=26955470b8bf4a859e790739241408&q=London&aqi=yes
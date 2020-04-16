import Axios from "axios"

export const UrlSuffix = 'apiKey=faab0c512e854c5a98f1ee457848e1f3'
const apiKey='faab0c512e854c5a98f1ee457848e1f3'
export const baseRecipiesApiUrl = 'https://api.spoonacular.com/recipes'
export const baseRecipiesApiPhotosUrl = 'https://spoonacular.com/recipeImages/'
const dbCorsKey = '5e98b2d4436377171a0c24a1'
export const dbTableUrl = 'https://bai2020-dca5.restdb.io/rest/recipies'

export const addParametersToUrl = (url, map) => {
  let result = url
  let isFirstParameter = true
  let char = '?'
  map.forEach((key, value) => {
    if (isFirstParameter) {
      isFirstParameter = false
    } else {
      char = '&'
    }
    result = result.concat(`${char}${key}=${value}`)
  })
  return result.concat(`${char}${UrlSuffix}`)
}

export const getWithEndpoint = (url) => {
  url.searchParams.append('apiKey', apiKey);
  return url
}


export const insertNewRow = (recipe_id, likes) => {

  let data = JSON.stringify({
    "recipe_id": recipe_id,
    "likes": likes
  });
  let xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", dbTableUrl);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", dbCorsKey);
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(data);
}

export const getLikes = (recipe_id) => {
  
  let xhr = new XMLHttpRequest();
  let params = JSON.stringify({
    "recipe_id": recipe_id
  })

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(recipe_id + " " + JSON.parse(this.responseText)[0].likes);
      return JSON.parse(this.responseText)[0].likes;
    }
  });

  xhr.open("GET", dbTableUrl + "?q=" + params);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", dbCorsKey);
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(null);
  
}


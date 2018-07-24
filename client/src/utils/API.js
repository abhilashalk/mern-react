//axios package
import axios from "axios";

const authKey = "420733ddcd9743cfa6225002b1e1a3b5";

const BASEURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

export default {
  getArticles: (query, startYear, endYear) => {
    const queryUrl = BASEURL + query + "&begin_date" + startYear + "&end_date" + endYear;
    return axios.get(queryUrl);
  },
  getSavedArticles: () => {
    return axios.get("/api/articles");
  },
  saveArticle: articleDataToSave =>
    axios.post("/api/articles", articleDataToSave)
};
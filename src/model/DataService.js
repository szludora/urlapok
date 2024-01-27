import axios from "axios";

export default class DataService {
  constructor() {
    axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
  }
  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  postData(data, callback) {
    axios
      .post("autos", data)
      .then(function (response) {
        callback(response.data);
        console.log("sikeres");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  deleteData(vegpont, id, callback) {
    axios
      .delete(vegpont + "/" + id)
      .then(function (response) {
        callback(response.data);
        console.log("törölve");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
}

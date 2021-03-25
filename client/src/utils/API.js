import axios from "axios";

class API {
  axios;

  constructor() {
    this.axios = axios.create();
  }

  /**
   * @param {String} name
   * @param {String} value
   */
  setHeader(name, value) {
    if (value) this.axios.defaults.headers.common[name] = value;
    else delete this.axios.defaults.headers.common[name];
  }

  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   *
   * @returns {Promise}
   */
  register(userData) {
    console.log("userData", userData)
    return this.axios.post("/auth/register", userData);
  }

  lookup(id) {
    return this.axios.get("/api/user/" + id);
  }

  lookupAll() {
    return this.axios.get("/api/user");
  }
  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   * @param {String} userData.firstName
   * @param {String} userData.lastName
   *
   * @returns {Promise}
   */
  login(userData) {
    return this.axios.post("/auth/login", userData);
  }

  authenticated() {
    return this.axios.post("/auth/authenticated");
  }
}

export default new API();

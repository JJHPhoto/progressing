import axios from "axios";

const goalAPI = {

  getGoals: function() {
    return axios.get("/api/goals");
  },

  getGoal: function(id) {
    return axios.get("/api/goals/" + id)
  },

  saveGoal: function(goalData) {
    console.log("goalData", goalData)
    return axios.post("/api/goals", goalData);
  },

  updateGoal: function(id, data) {
    return axios.put("/api/goals/" + id, data)
  },

  updateStep: function(id, data) {
    return axios.put("/api/goals/" + id + "/step", data);
  },

  deleteGoal: function(id) {
    return axios.delete("/api/goals/" + id);
  }

};

export default goalAPI;
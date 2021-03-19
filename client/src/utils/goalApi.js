import axios from "axios";

const goalAPI = {

  getGoals: function() {
    return axios.get("/api/goals");
  },

  getGoal: function(id) {
    return axios.get("/api/goals/" + id)
  },

  saveGoal: function(goalData) {
    return axios.post("/api/goals", goalData);
  },

  updateGoal: function(id) {
      return axios.put("/api/goals/" + id)
  },

  deleteGoal: function(id) {
  return axios.delete("/api/goals/" + id);
  }

};

export default goalAPI;
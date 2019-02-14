import axios from "axios";

export default {
  getUser: function(){
   return(axios.post())
  },
  getScores: function() {
    return axios.get("/api/scores");
  },
  getGameScores: function(game) {
    return axios.get("/api/scores/game/" + game);
  },
  getScore: function(id) {
    return axios.get("/api/scores/" + id);
  },
  deleteScore: function(id) {
    return axios.delete("/api/scores/" + id);
  },
  saveScore: function(scoreData) {
    return axios.post("/api/scores", scoreData);
  }
};

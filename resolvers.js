//import axios from "axios";
const axios = require("axios");
const _ = require("lodash");

const resolvers = {
  Query: {
    getLaunches: () => {
      return axios
        .get("https://api.spacexdata.com/v3/launches")
        .then(res => res.data)
        .then(data => {
          let launches = [];
          _.map(data, (val, key) => {
            launches[key] = {
              flight_number: val.flight_number,
              upcoming: val.upcoming,
              launch_year: val.launch_year
            };
          });
          console.log("data", data);

          return launches;
        })
        .catch(err => console.error("errror", err));
    }
  }
};

module.exports = resolvers;
//export default resolvers;

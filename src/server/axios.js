import request from "./request";
import mgopFetch from "./mgopFetch";

let service =
  process.env.NODE_ENV === "development"
    ? request
    : process.env.VUE_APP_Environment == "app"
    ? request
    : mgopFetch;

export default service;

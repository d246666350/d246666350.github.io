let baseURL =
  process.env.NODE_ENV === "development"
    ? window.location.origin + "/apis"
    : window.location.origin + "/apis";

export { baseURL };

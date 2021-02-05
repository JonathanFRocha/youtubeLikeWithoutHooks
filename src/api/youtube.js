import axios from "axios";

const KEY = "AIzaSyB5CuREckdSV8MjZ1cEmbXADOxTHI7q1Wc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});

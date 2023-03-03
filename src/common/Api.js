import axios from "axios";

export const getData = (url, callback) => {
    axios
      .get(url)
      .then(res => {
        if(res && callback) {
            callback(res?.data)
        }
      })
      .catch(err => {
          console.log(err);
          if(err && callback) {
            callback([])
            }
        });
};

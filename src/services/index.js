import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.bamaqconsorcio.com.br/',
  headers: {
    Authorization: 'Bearer 23|CT3vCm0nopm6w723tLjiZGJ0RkzTn5HYbuTcexC8'
  }
});

const GET = (url) => {
  instance.get(url)
    .then((res) => res.data)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e.response.message
    })
}

export { GET, instance }
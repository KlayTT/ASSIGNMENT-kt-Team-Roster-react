import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getPlayer = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createPlayer = (obj) => new Promise((resolve, reject) => {
  axios
    .create(`${dbURL}/players.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbURL}/players/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getPlayer(false).then(resolve);
        });
    })
    .catch(reject);
});

export { getPlayer, createPlayer };

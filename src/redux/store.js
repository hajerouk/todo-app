// On importe `createStore` depuis Redux pour créer un store global
import { createStore } from "redux";

// On importe notre reducer principal qui gère l'état des tâches
import taskReducer from "./reducers/taskReducer";

// On crée le store Redux en utilisant notre reducer
// 1er argument : le reducer qui définit comment l'état change
// 2ème argument : configuration optionnelle (ici on ajoute le support des Redux DevTools dans le navigateur)
const store = createStore(
  taskReducer,
  // Cette ligne permet d'utiliser l'extension Redux DevTools si elle est installée dans ton navigateur
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// On exporte le store pour l'utiliser dans toute l'application (Provider dans index.js)
export default store;

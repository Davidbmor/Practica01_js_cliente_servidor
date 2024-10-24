import { CardHandler } from "./modules/CarHandlerC.js";
import { CarStore } from "./modules/CarConsumer.js";
function datosListos(datos) {   
    console.log(datos);
}

const cardHandler = new CardHandler('http://localhost:3000');
const carStore = new CarStore();
 let c = await cardHandler.getAllCarsV2();

 carStore.convertjson(c);

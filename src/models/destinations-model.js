import Observable from '../framework/observable';
import {UpdateType} from '../consts';

export default class DestinationsModel extends Observable{
  #destinationsApiService = null;
  #destinations = [];
  #id = null

  constructor(destinationsApiService) {
    super();
    this.#destinationsApiService = destinationsApiService;
  }

  get destinations() {
    return this.#destinations, this.#id
  }
  
  init = async () => {
    try {
      const destinations = await this.#destinationsApiService.destinations;
      this.#destinations = destinations;

      const Ids = await this.#destinationsApiService.destinations;
      this.#id = Ids
      let id
      for (let i = 0; i < Ids.length; i++) {
        id = Ids[i].id
        console.log(id);
        return id
      }
      
      
    } catch(err){
      this.#destinations = [];
    }

    this._notify(UpdateType.INIT);
  };
}

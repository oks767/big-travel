import AbstractView from '../../framework/view/abstract-view';
import {createEventTemplate} from './event.tpl';

export default class EventView extends AbstractView{
  #point = null;
  #offers = null;
  #destinationName = null

  constructor(point, offers, destinationName) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinationName = destinationName

  }

  get template() {
    return createEventTemplate(this.#point, this.#offers, this.#destinationName);
  }
  setDestinationName(name) {
    this.#destinationName = name;
    this.updateElement();
  }
  setOpenEditFormClickHandler(callback) {
    this._callback.openEditFormClick = callback;
    this.element.querySelector('.event .event__rollup-btn').addEventListener('click', this.#openEditFormClickHandler);
  }

  setFavoriteClickHandler (callback) {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  #openEditFormClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.openEditFormClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  };
}

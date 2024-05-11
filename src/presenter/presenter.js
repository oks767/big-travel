export class Presenter {
  data = [];
  constructor(data) {
    this.data = data;
  }

  render() {
    this.renderFilter();
    this.renderSortList();
    this.renderList();
    this.renderFormCreate();
    this.renderListEmpty();
    this.renderEmpty()
  }

  renderFilter(container) {
    container = document.querySelector('.trip-controls__filters');
    container.insertAdjacentHTML('beforeend', this.data[0]);
  }

  renderSortList(container) {
    container = document.querySelector('.trip-events');
    container?.insertAdjacentHTML('beforeend', this.data[1]);
  }

  renderFormCreate(list) {
    list = document.querySelector('.trip-events__list');
    list?.insertAdjacentHTML('beforeend', this.data[2]);
  }

  renderList(container) {
    container = document.querySelector('.trip-events');
    container?.insertAdjacentHTML('beforeend', this.data[4]);
  }

  renderListEmpty(listEmpty) {
    listEmpty = document.querySelector('.trip-events');
    listEmpty?.insertAdjacentHTML('beforeend', this.data[3]);
  }
  renderEmpty(empty) {
empty = document.querySelector(".trip-events__item");
empty?.insertAdjacentHTML('beforeend', this.data[5])
  }
}

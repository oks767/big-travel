import { Presenter } from "./presenter/presenter";
import createAddEventTemplate from "./view/add-event-view";
import createEventsListTemplate from "./view/events-list";
import createFilterTemplate from "./view/filter";
import createListEmpty from "./view/list-empty-view";
import createNewEventButtonTemplate from "./view/new-event-button-view";
import createSortTemplate from "./view/sort";
const presenter = new Presenter([
  createFilterTemplate(),
  createSortTemplate(),
  createAddEventTemplate(),
  createListEmpty(),
  createEventsListTemplate(),
  createNewEventButtonTemplate(),
]);

presenter.render();

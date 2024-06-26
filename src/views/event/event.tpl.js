import {humanizeDateMonthDay} from '../../utils/utils';
import dayjs from 'dayjs';

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

const createEventTemplate = (point, allOffers, destinationName) => {
  const {basePrice, isFavorite, type, destination, dateFrom, dateTo, offers} = point;

  const dateFromToDifference = dayjs(`${dateFrom}`);
  const dateToToDifference = dayjs(`${dateTo}`);
  const timeDaysDifference = dateToToDifference.diff(dateFromToDifference, 'd');
  const timeMinutesDifference = dateToToDifference.diff(dateFromToDifference, 'm');
  
    
  //Функция, позволяющая получить оставшееся количество часов (принимает аргументами разницы в количестве дней и количестве минут между датами)
  const getRestHours = (daysDifference, minutesDifference) => {
    if (daysDifference > 0) {
      const restMinutes = timeMinutesDifference - (daysDifference * MINUTES_IN_DAY);
      return Math.round(restMinutes / MINUTES_IN_HOUR);
    }
    if (minutesDifference === MINUTES_IN_HOUR) {
      return 1;
    }
    if (minutesDifference > MINUTES_IN_HOUR) {
      const restMinutes = Math.floor(minutesDifference / MINUTES_IN_HOUR);
      return restMinutes;
    }
    if (minutesDifference < MINUTES_IN_HOUR) {
      return 0;
    }
  };
  const restHoursAmount = getRestHours(timeDaysDifference, timeMinutesDifference);

  //Функция, получить оставшееся количество минут (принимает аргументами разницы в количестве дней и количестве минут между датами)
  const getRestMinutes = (daysDifference, minutesDifference) => {
    if (daysDifference === 0 && (minutesDifference < MINUTES_IN_HOUR)) {
      return minutesDifference;
    }
    if (daysDifference >= 0) {
      const extraMinutes = minutesDifference - daysDifference * MINUTES_IN_DAY;
      if (extraMinutes === MINUTES_IN_HOUR) {
        return 0;
      }
      if (extraMinutes > MINUTES_IN_HOUR) {
        const extraHours = Math.floor(extraMinutes / MINUTES_IN_HOUR);
        return extraMinutes - (extraHours * MINUTES_IN_HOUR);
      } else {
        return extraMinutes;
      }
    }
  };
  const restMinutesAmount = getRestMinutes(timeDaysDifference, timeMinutesDifference);

  //Функция, составляющая необходимый формат даты для элемента с классом 'event__duration'
  const buildDateFormat = (daysDiff, hoursDiff, minutesDiff) => {
    if (timeDaysDifference === undefined && restHoursAmount === undefined && restMinutesAmount === undefined) {
      return '';
    }
    if (daysDiff === 0 && hoursDiff === 0) {
      return `${(restMinutesAmount.toString()).padStart(2, '0')}M`;
    }
    if (daysDiff === 0) {
      return `${(hoursDiff.toString()).padStart(2, '0')}H ${(minutesDiff.toString()).padStart(2, '0')}M`;
    } else if (timeDaysDifference !== undefined && restHoursAmount !== undefined && restMinutesAmount !== undefined) {
      return `${(timeDaysDifference.toString()).padStart(2, '0')}D ${(restHoursAmount.toString()).padStart(2, '0')}H ${(restMinutesAmount.toString()).padStart(2, '0')}M`;
    }
  };
  const eventDuration = buildDateFormat(timeDaysDifference, restHoursAmount, restMinutesAmount);

  const favoriteClassName = isFavorite
    ? ' event__favorite-btn--active'
    : '';

    

  //Функция создания разметки выбранных пользователем офферов для текущего типа события
  const createPickedOffrersTemplate = (allAvailableOffrers, currentType, pointOffers) => {
    //Находим объект, совпадающий по типу с текущим типом события и массивом всех доступных офферов к данному типу события
    const pointWithCurrentType = allAvailableOffrers.find((currentOffer) => currentType === currentOffer.type);
    //Формирование шаблона всех доступных дополнительных функций по полученным данным.
    const resultTemplate = pointWithCurrentType?.offers.map((offer) => {
      const checkedOffer = pointOffers.includes(offer.id);
      if (checkedOffer) {
        return `<li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </li>`;
      } else {
        return '';
      }
    }).join('');
    return resultTemplate;
  };

  const pickedOffrersTemplate = createPickedOffrersTemplate(allOffers, type, offers);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dayjs(dateFrom).format('YYYY-MM-DD')}">${humanizeDateMonthDay(dateFrom)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destinationName}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dayjs(dateFrom).format('YYYY-MM-DDTHH:mm')}">${dayjs(dateFrom).format('HH:mm')}</time>
            —
            <time class="event__end-time" datetime="${dayjs(dateTo).format('YYYY-MM-DDTHH:mm')}">${dayjs(dateTo).format('HH:mm')}</time>
          </p>
          <p class="event__duration">${eventDuration}</p>
        </div>
        <p class="event__price">
          €&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${pickedOffrersTemplate}

        </ul>
        <button class="event__favorite-btn${favoriteClassName}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export {createEventTemplate};

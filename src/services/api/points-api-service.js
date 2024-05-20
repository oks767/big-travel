import ApiService from '../../framework/api-service';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export default class PointsApiService extends ApiService {
  get points() {
    return this._load({url: 'points'}).then(ApiService.parseResponse);
  }

  updatePoint = async (pointId) => {
    const response = await this._load({
      url: `points/${pointId.id}`,
      method: Method.PUT,
      mode: 'cors', 
      body: JSON.stringify(this.#adaptToServer(pointId.id)),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  addPoint = async (point) => {
    const response = await this._load({
      url: 'points',
      method: Method.POST,
      mode: 'cors', 
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  deletePoint = async (pointId) => {
    const response = await this._load({
      url: `points/${pointId.id}`,
      method: Method.DELETE,
    });

    return response;
  };

  //Метод для адаптирования наименований ключей. Данные, которые отправляются на сервер.
  #adaptToServer = (pointId) => {
    const adaptedPoint = {...pointId,
      'base_price': Number(pointId.basePrice),
      'date_from': pointId.dateFrom,
      'date_to': pointId.dateTo,
      'is_favorite': pointId.isFavorite,
    };

    delete adaptedPoint.basePrice;
    delete adaptedPoint.dateFrom;
    delete adaptedPoint.dateTo;
    delete adaptedPoint.isFavorite;

    return adaptedPoint;
  };
}

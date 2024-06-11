import ApiService from '../../framework/api-service';

export default class DestinationsApiService extends ApiService {
  get destinations() {
    let destinations = this._load({ url: "destinations" }).then(ApiService.parseResponse);
    return destinations; 
  }
  id() {
    this.destinations.then((response) => {console.log(response.parse());})
    
  }
}

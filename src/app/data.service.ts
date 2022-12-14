import { Injectable } from '@angular/core';
import { ApiClient} from "src/autogenerated/client";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private client: ApiClient.Client;
  private BASE_URL = "https://early-whimsical-vermicelli.glitch.me/";
  constructor() {
    this.client=new ApiClient.Client(this.BASE_URL);
   }

  public GetIngredients(){
    return this.client.ingredients();
  }

  /**
   * GetLanguages
   */
  public GetLanguages(apiVersion="1.0") {
    return this.client.languages(apiVersion);
  }

  /**
   * Convert
   */
  public Convert(ingredientId: string, from: string, to: string, quantity: number) {
    return this.client.conversions(ingredientId, from, to, quantity);
  }
}
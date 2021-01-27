import { HttpClient, HttpClientModule } from '@angular/common/http';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import {ExghangeRates} from './payloads/exghange-rates';
@Injectable({
  providedIn: 'root'
})
export class ExchangeratesService {

  constructor(private HttpClient: HttpClient) {}
    getRates(base: String){
      return this.HttpClient.get<ExghangeRates>(`https://api.exchangeratesapi.io/latest?base=${base}`);
    
   }
}

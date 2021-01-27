import { Component, OnInit } from '@angular/core';
import { ExchangeratesService } from '../services/exchangerates.service';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount=1;
  from="CAD";
  to="USD";
  rates: {[key:string]:number};
  convert():number{
    console.log(this.rates[this.to]);
    return this.amount* this.rates[this.to];
  }
  constructor(private service: ExchangeratesService) { 

  }
  loadRates(){
    this.service.getRates(this.from).subscribe(res=>this.rates=res.rates);
  }
  getAllCurrencies(){
    return Object.keys(this.rates);
  }
  ngOnInit(): void {
    this.loadRates();
  }

}

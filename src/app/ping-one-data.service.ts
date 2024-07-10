import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PingOneDataService {

  constructor() { }

  urlRiskPol ="http://localhost:3000/0";
  urlRiskPred ="http://localhost:3000/1";

  async getRiskPolData(): Promise<any> {
    const data = await fetch(this.urlRiskPol);
    return (await data.json());
  }

  async getRiskPredData(): Promise<any> {
    const data = await fetch(this.urlRiskPred);
    return (await data.json());
  }
}

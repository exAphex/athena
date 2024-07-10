import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PingOneDataService {

  constructor() { }

  urlRiskPol ="/v1/getRiskPolicy";
  urlRiskPred ="/v1/getRiskDecision";

  async getRiskPolData(): Promise<any> {
    const data = await fetch(this.urlRiskPol);
    return (await data.json());
  }

  async getRiskPredData(): Promise<any> {
    const data = await fetch(this.urlRiskPred);
    return (await data.json());
  }
}

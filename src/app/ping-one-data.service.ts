import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PingOneDataService {

  constructor() { }

  urlRiskPol ="/v1/getRiskPolicy";
  urlRiskDec ="/v1/getRiskDecision";

  async getRiskPolData(): Promise<any> {
    const data = await fetch(this.urlRiskPol);
    return (await data.json());
  }

  async getRiskDecData(username:string,payload:string): Promise<any> {
    let body = {"username":username};

    const data = await fetch(this.urlRiskDec,{
      headers: {
        sdkpayload: payload,
        "content-type": "application/json"
      },
      method: "post",
      body: JSON.stringify(body)
    });

    return (await data.json());
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PingOneDataService } from '../ping-one-data.service';
import {JSONPath} from 'jsonpath-plus';

@Component({
  selector: 'app-riskpolicy',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './riskpolicy.component.html',
  styleUrl: './riskpolicy.component.css'
})
export class RiskpolicyComponent{

  p1DataService : PingOneDataService = inject(PingOneDataService);
  
  constructor(){
    let data = [];
    this.p1DataService.getRiskPolData().then((res:any) => {
      data[0] = res;
      console.log(data);
      this.p1DataService.getRiskPredData().then((res:any) => {
        data[1] = res;
        console.log(data);
        showRiskPolData(data);
      });
    });
  }
 

}

function showRiskPolData(data:any){
  console.log('getRiskPolData function');

  const riskPol = createRiskTableData(data);
  createRiskPolTable('contentRiskPol',riskPol,['name', 'medium', 'high'], ['Predictor Score', 'Medium', 'High']);

  const riskPred = createThresholdData(data)
      
  createThresholdTable('contentThreshold',riskPred,['value1', 'value2'], ['High', 'Medium']);
}

function createRiskPolTable(elem: string,objectArray: any[], fields: string[], fieldTitles: string[]) {
  let body = document.getElementById(elem);
  let tbl = document.createElement('table');
  let thead = document.createElement('thead');
  let thr = document.createElement('tr');
  let i=0;
  fieldTitles.forEach((fieldTitle: string) => {
    let th = document.createElement('th');
    if(i>0){
        th.style.cssText = 'text-align:center;';
    }
    else{
      th.style.cssText = 'width:50%;';
    }
    th.appendChild(document.createTextNode(fieldTitle));
    thr.appendChild(th);
    i++;
  });
  thead.appendChild(thr);
  tbl.appendChild(thead);

  let tbdy = document.createElement('tbody');
  let tr = document.createElement('tr');
  objectArray.forEach((object: { [x: string]: string; }) => {
    let tr = document.createElement('tr');
    let j = 0;
    fields.forEach((field: string | number) => {
      var td = document.createElement('td');
      if(j>0){
        td.style.cssText = 'text-align:center;';
      }
      
      td.appendChild(document.createTextNode(object[field]));
      tr.appendChild(td);
      j++;
    });
    tbdy.appendChild(tr);    
  });
  tbl.appendChild(tbdy);
  if(body) body.appendChild(tbl);
  return tbl;
}

function createThresholdTable(elem: string,objectArray: any[], fields: string[], fieldTitles: string[]) {
  let body = document.getElementById(elem);
  let tbl = document.createElement('table');
  let thead = document.createElement('thead');
  let thr = document.createElement('tr');
  let i=0;
  fieldTitles.forEach((fieldTitle: string) => {
    let th = document.createElement('th');
    if(i==0){
      th.style.cssText = 'width:60%;';
    }
    th.appendChild(document.createTextNode(fieldTitle));
    thr.appendChild(th);
    i++;
  });
  thead.appendChild(thr);
  tbl.appendChild(thead);

  let tbdy = document.createElement('tbody');
  let tr = document.createElement('tr');
  objectArray.forEach((object: { [x: string]: string; }) => {
    let tr = document.createElement('tr');
    fields.forEach((field: string | number) => {
      var td = document.createElement('td');
      
      td.appendChild(document.createTextNode(object[field]));
      tr.appendChild(td);
    });
    tbdy.appendChild(tr);    
  });
  tbl.appendChild(tbdy);
  if(body){
    body.appendChild(tbl);
    body.appendChild(document.createElement("br"));
  }
 
  return tbl;
}

function createRiskTableData(data: any[]){
    const riskPol_high = data[0]._embedded.riskPolicySets[0].riskPolicies[0];
    const riskPol_medium = data[0]._embedded.riskPolicySets[0].riskPolicies[1];
    const predictorIDs = data[0]._embedded.riskPolicySets[0].evaluatedPredictors;
    const predictors:any = data[1];
  
    let output: {}[] = [];
  
    let predTitles: any[] = [];
  
    predictorIDs.forEach( (elem: { id: string; }) => {

      const json = JSONPath({path:'$._embedded.riskPredictors[?(@.id=="'+elem.id+'")]',json:predictors});
      predTitles.push(json[0].name);
    });
    
    let i = 0;
    riskPol_high.condition.aggregatedScores.forEach((elem: { score: number; }) => {
      let obj:any = {};
      obj.name = predTitles[i];
      if(obj.name == 'New Device' || obj.name == 'Anonymous Network Detection' || obj.name == 'Geovelocity Anomaly')
        obj.medium = '--';
      else obj.medium = Math.round(elem.score/2);
      
      obj.high = elem.score;
      
      output.push(obj);
      
      i++;
    });
    
    return output;
}

function createThresholdData(data: { _embedded: { riskPolicySets: { riskPolicies: { condition: { between: { minScore: any; }; }; }[]; }[]; }; }[]){
  const riskPol_high_value = data[0]._embedded.riskPolicySets[0].riskPolicies[0].condition.between.minScore;
  const riskPol_medium_value = data[0]._embedded.riskPolicySets[0].riskPolicies[1].condition.between.minScore;
  
  let output = [];
  
  output.push({'value1':riskPol_high_value,'value2':riskPol_medium_value});
  output.push({'value1':'and above','value2':'and above'});
    
  return output;
}
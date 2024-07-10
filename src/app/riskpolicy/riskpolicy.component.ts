import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PingOneDataService } from '../ping-one-data.service';
import { JSONPath } from 'jsonpath-plus';
import { NgFor } from '@angular/common';
import { RiskPredictor } from "../../models/riskpredictor.model";

@Component({
  selector: 'app-riskpolicy',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './riskpolicy.component.html',
  styleUrl: './riskpolicy.component.css'
})
export class RiskpolicyComponent {

  p1DataService: PingOneDataService = inject(PingOneDataService);
  predictors: RiskPredictor[] = [];
  thresholds: RiskPredictor[] = [];

  constructor() {
    this.p1DataService.getRiskPolData().then((res: any) => {
      this.showRiskPolData(res);
    });
  }

  showRiskPolData(data: any) {
    this.predictors = this.createRiskTableData(data);
    this.thresholds = this.createThresholdData(data);
  }

  createRiskTableData(data: any[]): RiskPredictor[] {
    const riskPol_high = data[0]._embedded.riskPolicySets[0].riskPolicies[0];
    const riskPol_medium = data[0]._embedded.riskPolicySets[0].riskPolicies[1];
    const predictorIDs = data[0]._embedded.riskPolicySets[0].evaluatedPredictors;
    const predictors: any = data[1];

    let output: RiskPredictor[] = [];

    let predTitles: any[] = [];

    predictorIDs.forEach((elem: { id: string; }) => {

      const json = JSONPath({ path: '$._embedded.riskPredictors[?(@.id=="' + elem.id + '")]', json: predictors });
      predTitles.push(json[0].name);
    });

    let i = 0;
    riskPol_high.condition.aggregatedScores.forEach((elem: { score: number; }) => {
      let obj: RiskPredictor = { name: predTitles[i], medium: '', high: '' };
      if (obj.name == 'New Device' || obj.name == 'Anonymous Network Detection' || obj.name == 'Geovelocity Anomaly')
        obj.medium = '--';
      else obj.medium = "" + Math.round(elem.score / 2);

      obj.high = "" + elem.score;

      output.push(obj);

      i++;
    });

    return output;
  }

  createThresholdData(data: { _embedded: { riskPolicySets: { riskPolicies: { condition: { between: { minScore: any; }; }; }[]; }[]; }; }[]) : RiskPredictor[] {
    const riskPol_high_value = data[0]._embedded.riskPolicySets[0].riskPolicies[0].condition.between.minScore;
    const riskPol_medium_value = data[0]._embedded.riskPolicySets[0].riskPolicies[1].condition.between.minScore;
    let output: RiskPredictor[] = [];

    output.push({ name:"", high: riskPol_high_value, medium: riskPol_medium_value });
    output.push({ name:"", high: 'and above', medium: 'and above' });

    return output;
  }

}
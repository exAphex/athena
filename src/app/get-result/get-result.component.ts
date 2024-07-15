import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tab/tab.component';
import { NgIf } from '@angular/common';
import { PingOneDataService } from '../ping-one-data.service';
import { JSONPath } from 'jsonpath-plus';

@Component({
  selector: 'app-get-result',
  standalone: true,
  imports: [TabsComponent,TabComponent,NgIf],
  templateUrl: './get-result.component.html',
  styleUrl: './get-result.component.css'
})
export class GetResultComponent  implements OnInit, OnChanges{
  public show = false;
  @Input() showTabs: boolean = false;
  @Input() signalsPayload: string = "";
  p1DataService: PingOneDataService = inject(PingOneDataService);

  public response = {};
  public fullTab:string = "";
  public resultTab:string = "";
  public lowTab:string = "";
  public mediumTab:string = "";
  public highTab:string = "";

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['showTabs'].currentValue && changes?.['signalsPayload'].currentValue ) {
      console.log(this.show); // here you'll see the value
      console.log(changes?.['showTabs'].currentValue); // here you'll see the value
      this.show = changes?.['showTabs'].currentValue;

      this.p1DataService.getRiskDecData('testuser',changes?.['signalsPayload'].currentValue).then((res: any) => {
        console.log(res);
        this.response = res;
        this.fullTab= JSON.stringify(res,null,2);
        this.resultTab= JSON.stringify(res.result,null,2);

        const details = res.details;
        
        const jsonLOW = JSONPath({ path: '$.[?(@.level === "LOW")].type', json: details });
        this.lowTab = JSON.stringify(jsonLOW,null,2);

        const jsonMEDIUM = JSONPath({ path: '$.[?(@.level === "MEDIUM")].type', json: details });
        this.mediumTab = JSON.stringify(jsonMEDIUM,null,2);

        const jsonHIGH = JSONPath({ path: '$.[?(@.level === "HIGH")].type', json: details });
        this.highTab = JSON.stringify(jsonHIGH,null,2);

      });

    }
  }

  ngOnInit(): void {

 }
}

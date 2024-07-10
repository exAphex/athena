import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tab/tab.component';
import { NgIf } from '@angular/common';

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
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['showTabs'].currentValue) {
      console.log(this.show); // here you'll see the value
      console.log(changes?.['showTabs'].currentValue); // here you'll see the value
      this.show = changes?.['showTabs'].currentValue;
 
    }
  }

  ngOnInit(): void {

 }
}

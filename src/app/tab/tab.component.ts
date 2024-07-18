import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent{
  @Input('tabTitle') title: string | undefined;
  @Input() active = false;
}

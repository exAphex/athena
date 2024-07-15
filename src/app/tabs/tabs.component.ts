/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input
} from '@angular/core';

import { TabComponent } from '../tab/tab.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})

export class TabsComponent implements AfterContentInit {
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;
  // contentChildren are set

  ngAfterContentInit() {
    // get all active tabs
    if(this.tabs){
      let activeTabs = this.tabs.filter((tab)=>tab.active);

      // if there is no active tab set, activate the first
      if(activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    }
  }
  
  selectTab(tab: TabComponent){
    // deactivate all tabs
    if(this.tabs){
      this.tabs.toArray().forEach(tab => {
        tab.active = false;
      });
    }
    
    // activate the tab the user has clicked on.
    tab.active = true;
    console.log(tab.title);
    /*if(tab.title){
      this.setContent(tab.title);
    }*/
    
  }
  /*
  setContent(tabTitle:string):void{
    const elem = document.querySelector<HTMLElement>("[tabtitle='Full Response']");
    if (elem){
      switch(tabTitle){
        case 'Result':{
          console.log('The RESULT');
          if (elem){
            elem.innerText = 'Result content';
          }
          break;
        }
        case 'Full Response11':{
          console.log('The FULL RESPONSE');
          if (elem){
            elem.innerText = 'Full Response content';
           }
          break;
        }
        case 'Low':{
          console.log('The LOW');
          if (elem){
            elem.innerText = 'Low content';
          }
          break;
        }
        case 'Medium':{
          console.log('The MEDIUM');
          if (elem){
            elem.innerText = 'Medium content';
           }
          break;
        }
        case 'High':{
          console.log('The HIGH');
          if (elem){
            elem.innerText = 'High content';
           }
          break;
        }
        default:{
          break;
        }
      }
    }
  }
  */

}

  
  function ngAfterContentInit() {
    throw new Error('Function not implemented.');
  }


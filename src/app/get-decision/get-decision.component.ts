import { Component} from '@angular/core';
import { NgIf } from '@angular/common';
import { GetResultComponent } from '../get-result/get-result.component';
import { SignalsSDK } from '../signals-sdk';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-get-decision',
  standalone: true,
  imports: [GetResultComponent,NgIf,RouterModule],
  templateUrl: './get-decision.component.html',
  styleUrl: './get-decision.component.css'
})
export class GetDecisionComponent {
  showTabs: boolean = false;

  getDecision() {
    console.log('Hallo'+signalsPayload);
    let textAuth = document.getElementById('signalsPayload');
    if(textAuth && textAuth.parentElement && signalsPayload) {
      textAuth.parentElement.classList.remove("hidden");
      textAuth.innerText = signalsPayload;
      this.showTabs = true;
    }
  }

}

let signalsPayload:any;

function callbackFct() {
  let signals = (window as { [key: string]: any })["_pingOneSignals"] as any;
  
  signals.initSilent({
    // Point this to your P1 Risk EnvId
    envId : "7d60760e-8f8c-4716-a61c-f96bee6a27f9" // PingOne EnvID - API Security
    }).then(function () {
        console.log("PingOne Signals initialized successfully");
    // Uncomment the below if you want to profile on init
        return signals.getData()
    }).then(function (payload:any) {
        signalsPayload = payload;
        //console.log('Payload: ' +payload);
        
    }).catch(function (e:any) {
        console.error("SDK Init failed", e);
    });
}
  
function init(callback:SignalsSDK) {
  let ready = (window as { [key: string]: any })["_pingOneSignalsReady"] as boolean;
   
   if (ready) {
     callback();
   } else {
    document.addEventListener('PingOneSignalsReadyEvent', callback);
  }
  
}

init(callbackFct);
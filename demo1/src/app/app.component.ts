import { Component, OnInit } from '@angular/core';
import { HashConnect } from 'hashconnect/dist/cjs/main';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo1';    
   hashconnect = new HashConnect();


  async ngOnInit(){
    console.log("On init");

    const appMetadata = {
      name: "dApp Example",
      description: "An example hedera dApp",
      icon: "https://absolute.url/to/icon.png",
      url: "https://yourwebsite.com"
  }
  let initData = await this.hashconnect.init(appMetadata, "testnet", false);

  console.log(initData);


  }
}

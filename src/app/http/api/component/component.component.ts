import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})

export class ComponentComponent implements OnInit {
  private urlapi
    = 'https://get.geojs.io/v1/ip/country.json';
  public data: any = null;
  private Date;
  public ip: String = "8.8.8.8";

  private pad = function(input, size) {
    var s = String(input);
    while (s.length < size) {s = "0" + s;}
    return s;
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getAPIdata();
  }

  private getAPIdata() {
    this.Date = new Date()

    const user = 'test';
    const date = [
      this.pad(this.Date.getDate(), 2),
      this.pad(this.Date.getMonth(), 2),
      this.Date.getFullYear()
    ].join(".") ;
    const channel = 'ct24'
    const url = `${this.urlapi}?ip=${this.ip}`;
    console.log(`GET ${url}`)

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  '*',
      })
    };

    this.httpClient
      .get(url, httpsOptions)
      .subscribe(apiData => (this.data = apiData[0]));
  }

}

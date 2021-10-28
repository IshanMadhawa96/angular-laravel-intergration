import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  response:any = [];
  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:8000/api/get-data').subscribe(res=>{
      console.log(res)
      this.response = res;
    })
  }
}

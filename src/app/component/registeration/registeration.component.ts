import { Component, OnInit } from '@angular/core';
import { HttpDataServiceService } from '../../service/http/http-data-service.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private http:HttpDataServiceService) { }

registerationForm:any={};

  ngOnInit()
   {

    this.http.post('fetchData',{}).subscribe(
      (res)=>{console.log(res);
        this.registerationForm = res[0]
      },
      (err)=>{},
      ()=>{}
      );;


  }
  submitForm(){
    console.log('submit called  ');
    this.http.post('register',this.registerationForm).subscribe(
      (res)=>{console.log(res);},
      (err)=>{},
      ()=>{}
      );

  }
}

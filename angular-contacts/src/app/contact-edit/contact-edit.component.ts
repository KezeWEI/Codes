import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  private id:any;
  public formData:any={
    name:'',
    email:'',
    phone:''
  }
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    console.log(this.route);
    this.id=this.route.snapshot.params.id; 
    this.getinfoByid();
  }
  getinfoByid(){
    this.http.get(`http://localhost:3000/contacts/${this.id}`).toPromise()
    .then((data:any)=>{
      this.formData=data;
    }).catch((err:any)=>{
      console.log(err);
    })
  }
  save(){
    console.log(this.formData);
    this.http.patch(`http://localhost:3000/contacts/${this.id}`,this.formData).toPromise()
    .then((data:any)=>{
      console.log(data);
      this.router.navigate(['/layout']);
    }).catch((err:any)=>{
      console.log(err);
    })
  }
}

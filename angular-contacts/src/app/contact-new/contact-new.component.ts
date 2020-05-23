import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})
export class ContactNewComponent implements OnInit {
  public list:any={
    name:'',
    email:'',
    phone:''
  };
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  submit(){
    // 
    this.http.post('http://localhost:3000/contacts',this.list).toPromise()
    .then((data:any)=>{
      // console.log(data);
      // alert('Create success');
      this.router.navigate(['/layout/contact-list']);
    }).catch((err:any)=>{
      console.log(err);
    })
  }
}

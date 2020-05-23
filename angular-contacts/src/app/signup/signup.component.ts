import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public msg:any='';
  public compte:any ={
    email:"",
    password:""
  }
  constructor(
    private http:HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.msg='';
  }
  signup(){
    const formData = this.compte;
    //这里/users是注册，/session是登录
    this.http.post('http://localhost:3000/users',formData).toPromise().then((data:any)=>{
      console.log(data); 
      window.localStorage.setItem('token',data.token);
      window.localStorage.setItem('user',data.user.email);
      if(!this.msg){
        window.alert('Registration success');
        this.router.navigate(['/layout']);
      }
    }).catch(err=>{
      console.log(err);
      if(err.status == 409){
        this.msg="Already exist the compte";
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient} from'@angular/common/http'
import { Router} from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public msg:any='';
  public form:any=
    {
      email:'',
      password:''
    };
  constructor(
    private http:HttpClient,
    private router:Router
  ) { 

  }

  ngOnInit(): void {
    this.msg='';
  }
  signin(){
    this.http.post('http://localhost:3000/session',this.form)
    .toPromise()
    .then((data:any)=>{
      console.log(data); 
      window.localStorage.setItem('token',data.token);
      window.localStorage.setItem('user',data.user.email);
      console.log(window.localStorage.getItem('user'));
      this.router.navigate(['/layout']);
  }).catch((err:any)=>{
    if(err.status ==401){
      this.msg='Login failed, wrong email or password';
      console.log(err);
    }
  })

}
}

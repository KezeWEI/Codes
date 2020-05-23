import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public list:any;
  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
    const token = window.localStorage.getItem('token');
    console.log(token);
    //这里把验证权限放到拦截器组件globbal.interceptor.ts
    // this.http.get('http://localhost:3000/contacts',{headers: new HttpHeaders().set('X-Access-Token',token)})
    this.http.get('http://localhost:3000/contacts')
    .toPromise()
    .then((data:any)=>{
      this.list=data;
      console.log(this.list);
    }).catch((err:any)=>{
      console.log(err);
    })
  }
  deleteByid(id,e){
    e.preventDefault();
    console.log(id);
    this.http.delete(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then(data=>{
      console.log(data);
      this.ngOnInit();
    }).catch((err:any)=>{
      console.log(err);
    })
  }

}

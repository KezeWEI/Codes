import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user:any;
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.user = window.localStorage.getItem('user');
  }
  signout(){
    this.http.delete('http://localhost:3000/session').toPromise()
    .then((data:any)=>{
        window.localStorage.removeItem('token');
        this.router.navigate(['/signin']);
    }).catch((err)=>{
      alert('Exit failed');
    })
  }
}

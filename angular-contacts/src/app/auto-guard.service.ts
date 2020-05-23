import { Injectable} from '@angular/core'
import { CanActivate, Router} from'@angular/router'

@Injectable()

export class AutoGuard implements CanActivate{
    constructor(
        private router:Router,
    ){}
    canActivate(){
        const token=window.localStorage.getItem('token');
        if(!token){
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    }
}
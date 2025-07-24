import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router} from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  username: string='';
  password: string='';

  constructor( private login_prov:UsuarioService, private toastr: ToastrService, private router: Router,private fb:FormBuilder){}

  ngOnInit(): void { }

  login(){
    
    if(this.username==''|| this.password==''){
      this.toastr.error('todos los campos son obligatorios','error');
    }
    
    const user: User = {
      email:this.username,
      password:this.password
    }
    
    this.login_prov.login(user).subscribe({
      next:(token) =>{
        localStorage.setItem('token',token);
        this.router.navigate(['/prestadores']);
      }
    });
  }
}

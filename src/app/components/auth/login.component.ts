import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstantsService } from 'src/app/services/app-constants.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  avatarURL:string="assets/img/locutoreslogo.png"
  formRequestActive = false;

  constructor(protected authService: AuthService, private constants: AppConstantsService, private errorService: ErrorHandlerService, private routerService: Router) { }

  ngOnInit() {
    if (this.constants.currentUser != null) {
      this.routerService.navigateByUrl('');
    }
  }

  login() {
    this.formRequestActive = true;
    this.authService.login().subscribe({
      next: (result) => {
        this.constants.showMenus = true;
        console.log(result);
      },
      error: (err) => {
        this.errorService.handle(err);
        this.formRequestActive = false
      },
      complete: () => { this.formRequestActive = false; console.log('complete'); }
    });
  }
}

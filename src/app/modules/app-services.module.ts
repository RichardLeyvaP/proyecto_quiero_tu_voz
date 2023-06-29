import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Servicios de Utileria
import { AppConstantsService } from '../services/app-constants.service';
import { ErrorHandlerService } from '../services/error-handler.service';

// Servicios de Componentes
import { AuthService } from '../services/auth/auth.service';
import { AuthVerifyService } from '../services/auth/auth-verify.service';
import { ProfileService } from '../services/auth/profile.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AppConstantsService,
    AuthService,
    AuthVerifyService,
    ErrorHandlerService,
    ProfileService
  ]
})
export class AppServicesModule { }

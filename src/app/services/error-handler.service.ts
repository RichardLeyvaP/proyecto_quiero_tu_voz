import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private errorMessage = '';

  constructor(private router: Router) { }

  handle = (error: HttpErrorResponse) => {

    if (error.error instanceof ErrorEvent) { // client-side error
      this.errorMessage = `Error: ${error.error.message}`;
      this.showMessage();
    } else { // server-side error
      switch (error.status) {
        case 400:     // Bad Request - Solicitud incorrecta
          this.errorMessage = `No encontrado: ${error.error.message}`;
          this.showMessage();
          break;
        case 401:     // Unauthorized - No autorizado
          this.router.navigateByUrl("/login");
          this.errorMessage = `No autorizado: ${error.error.message}`;
          this.showMessage();
          break;
        case 403:     // Forbidden - Prohibido
          this.router.navigateByUrl("/unauthorized");
          break;
        case 404:     // Not found - No encontrado
          this.errorMessage = `No encontrado: ${error.error.message}`;
          this.showMessage();
          break;
        case 500:     // Internal Server Error - Error interno del servidor
          this.errorMessage = `Error interno del servidor: ${error.error.message}`;
          this.showMessage();
          break;
        default:
          this.errorMessage = `Error desconocido: ${error.message}`;
          this.showMessage();
          break;
      }
    }
  }

  showMessage() {
    Swal.fire({
      title: environment.appName,
      text: this.errorMessage,
      icon: "error",
      toast: true,
      position: 'bottom-end',
      timer: 5000,
      timerProgressBar: true,
    });
  }
}

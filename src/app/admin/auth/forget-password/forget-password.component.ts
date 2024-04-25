import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  loading: boolean = false;
  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
}
}

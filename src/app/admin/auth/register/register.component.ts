import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loading: boolean = false;
  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
}
}

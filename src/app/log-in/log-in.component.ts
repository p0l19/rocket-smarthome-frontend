import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  readonly username: String = 'admin';
  readonly password: String = 'admin';

  constructor() { }

  ngOnInit(): void {
  }

  log_in(username: String, uassword:String) {
    if (username == this.username && uassword == this.password) {
      alert('Login successful');
      //document.getElementById('login-form').value = '';
    }
    else {
      alert('Login failed');
    }
  }
}

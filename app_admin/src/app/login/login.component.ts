import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication";
import { User } from "../models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public formError: string = "";
  public credentials = {
    email: "",
    password: "",
    name: "",
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}
  public onLoginSubmit(): void {
    this.formError = "";
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = "All fields are required, please try again";
      console.log(this.formError);
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    this.authenticationService
      .login(this.credentials)
      .then(() => this.router.navigateByUrl("#"))
      .catch((message) => (this.formError = message));
  }

  private registerUser(): void {
    let newUser = new User();
    newUser.email = this.credentials.email;
    newUser.password = this.credentials.password;
    newUser.name = this.credentials.name;
    this.authenticationService
      .register(newUser)
      .then(() => this.router.navigateByUrl("#"))
      .catch((message) => (this.formError = message));
  }
}

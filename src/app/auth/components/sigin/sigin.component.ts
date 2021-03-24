import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

form: FormGroup;

  constructor(
    private formBulder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
  }


}

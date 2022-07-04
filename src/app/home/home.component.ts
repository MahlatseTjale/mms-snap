import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ImagesService} from '../images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private router: Router, private _imagesService: ImagesService) { }

  ngOnInit(): void {
  }

  imageCapture(event: any) {
    if (event.target.files) {

      let reader = new FileReader();
      let x = event.target.files[0];
      let time = new Date();

      reader.readAsDataURL(x);
      reader.onload = (event: any) => {
        this._imagesService.addCapturedImage(event, time);
        alert('Image saved')
      }
    }
  }

  openGallery(){
    this.router.navigate(["gallery"]);
  }

}




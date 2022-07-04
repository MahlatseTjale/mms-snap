import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from '../images.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  capturedImages: any[] = [];



  constructor(private _imagesService: ImagesService, private router: Router) { }

  ngOnInit(): void {
    this.capturedImages = this._imagesService.getCapturedImages();

  }

  back(){
    this.router.navigate(["home"]);

  }
}

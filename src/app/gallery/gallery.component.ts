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

  // upload() {
  //   let formData = new FormData();
  //   for (var i = 0; i < this.uploadedFiles.length; i++) {
  //     formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  //   }
  //   this.http.post('src/assets/captured-Images', formData)
  //     .subscribe((response) => {
  //     console.log('response received is ', response);
  //   })
  // }


}

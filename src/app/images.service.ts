import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from './images.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private capturedImages: any[] = [];

  constructor(private http: HttpClient) { }

  getCapturedImages() {
    return this.capturedImages;
  }

  addCapturedImage(url: any, time: any) {
    this.capturedImages.push(
      {
        url: url.target.result,
        time: time
      })

      console.log(this.capturedImages)
  }
}

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private capturedImages: any[] = [];

  constructor() { }

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

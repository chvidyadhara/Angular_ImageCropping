import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  base64Image:string;
  showcropImage:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  readUrl(event:any):void{
    this.imageChangedEvent = event;
    this.showcropImage = false;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.file;
    this.base64Image = event.base64
  }

  submit(){
    var payload = new FormData();
    payload.append("user[profile_pic]", this.croppedImage);
    console.log(this.croppedImage)
  }

}

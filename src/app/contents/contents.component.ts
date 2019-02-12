import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {UploadFile} from "ng-zorro-antd";

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent extends AppComponent{

  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg'
    }
  ];
  previewImage = '';
  previewVisible = false;

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }


  onDelayUploadDateTimePickerChange(result: Date): void {
    this.createBasicMessage(result.toString());
  }

  onDelayUploadDateTimePickerOk(result: Date): void {
    this.createBasicMessage(result.toString());
  }

}

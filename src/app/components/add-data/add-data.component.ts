import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.scss',
  providers: [MessageService],
})
export class AddDataComponent implements OnInit {
  value: string;
  value2!: string;
  value3!: string;
  values: string[] | undefined;

  cities: City[] | undefined;

  selectedCity: City | undefined;

  text: string | undefined;

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  visible2: boolean = false;

  showDialog2() {
    this.visible2 = true;
  }

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }


  files = [];

  totalSize : number = 0;

  totalSizePercent : number = 0;

  constructor(private config: PrimeNGConfig, private messageService: MessageService) {}

  choose(event, callback) {
      callback();
  }

  onRemoveTemplatingFile(event, file, removeFileCallback, index) {
      removeFileCallback(event, index);
      this.totalSize -= parseInt(this.formatSize(file.size));
      this.totalSizePercent = this.totalSize / 10;
  }

  onClearTemplatingUpload(clear) {
      clear();
      this.totalSize = 0;
      this.totalSizePercent = 0;
  }

  onTemplatedUpload() {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event) {
      this.files = event.currentFiles;
      this.files.forEach((file) => {
          this.totalSize += parseInt(this.formatSize(file.size));
      });
      this.totalSizePercent = this.totalSize / 10;
  }

  uploadEvent(callback) {
      callback();
  }

  formatSize(bytes) {
      const k = 1024;
      const dm = 3;
      const sizes = this.config.translation.fileSizeTypes;
      if (bytes === 0) {
          return `0 ${sizes[0]}`;
      }

      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

      return `${formattedSize} ${sizes[i]}`;
  }
}

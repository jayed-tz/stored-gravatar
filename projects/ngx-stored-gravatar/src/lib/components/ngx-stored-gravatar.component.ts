import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'ngx-stored-gravatar',
  templateUrl: 'ngx-stored-gravatar.html',
  styles: []
})
export class NgxStoredGravatarComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();
  private url: any;
  private gravatarKey: string;
  private imgSubject = new Subject();
  @Input() email: string;
  @Input() userName: string;
  @Input() style: any;
  @Input() size: number;
  @Input() useLocalStore = true;
  private gravatarBaseUrl = '//www.gravatar.com/avatar/';
  textFallbackVisible = false;
  fallBackText: string;

  constructor() {
  }

  ngOnInit() {
    if (!this.validateInput()) {
      return;
    }

    this.style = this.style ? this.style : {};
    this.size = this.size ? this.size : 200;
    if (!this.useLocalStore) {
      this.subscribeToImgUrl();
    } else {
      this.setKey();
      const imgData = window.localStorage.getItem(this.gravatarKey);
      if (imgData == null || imgData === undefined) {
        this.subscribeToImgUrl();
      } else {
        this.url = imgData;
      }
    }
  }

  private subscribeToImgUrl() {
    this.imgSubject.pipe(takeUntil(this.unsubscribe)).subscribe((val) => {
      this.url = val;
    });
    this.convertImgToBase64URL(this.generateGravatarUrl());
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private generateGravatarUrl() {
    let emailHash: string | Int32Array;
    emailHash = Md5.hashStr(this.email);
    return `${this.gravatarBaseUrl}${emailHash}?size=${this.size}&d=404`;
  }

  private setKey() {
    this.email = this.email.trim().toLowerCase();
    this.gravatarKey = `gravatar_${this.email}`;
  }

  private convertImgToBase64URL(url) {
    const self = this;
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      let canvas = <HTMLCanvasElement>document.createElement('CANVAS');
      const ctx = canvas.getContext('2d');
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL();
      canvas = null;
      if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem(self.gravatarKey, dataURL);
      }
      self.imgSubject.next(dataURL);
    };
    img.onerror = (err) => {
      self.fallBackText = self.getFallbackText();
      self.textFallbackVisible = true;
    }
    img.src = url;

  }

  getFallbackText() {
    const text = this.userName ? this.userName : this.email;
    const splittedText = text.split(' ');
    if (splittedText.length > 1) {
      return `${text[0].substr(0, 1)}${text[1].substr(0, 1)}`;
    } else {
      return text[0].substr(0, 1);
    }
  }

  private validateInput(): boolean {
    if (!this.email) {
      console.error('Email must be provided.');
      return false;
    }
    return true;
  }
}

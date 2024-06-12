import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, NEVER, switchMap } from 'rxjs';
import { useDragImage } from './shared/use-drag-image';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements OnInit {
  widthValue = 200;
  isShowImage = false;

  @ViewChild('image', { read: ElementRef })
  set imageRef(el: ElementRef<HTMLImageElement> | undefined) {
    this.imageRef$.next(el);
  }

  get imageRef() {
    return this.imageRef$.value;
  }

  imageRef$ = new BehaviorSubject<ElementRef<HTMLImageElement> | undefined>(
    undefined
  );

  ngOnInit(): void {
    this.imageRef$
    .pipe(
      switchMap((ref) => {
        if (ref) {
          return useDragImage(ref.nativeElement);
        }
        return NEVER;
      })
    )
    .subscribe();
  }
  ngAfterViewInit(): void{
    console.log(this.imageRef);
  }

  smallImage(){
    if(this.imageRef!==undefined){
      const IMAGE_ELEMENT = this.imageRef.nativeElement;
      IMAGE_ELEMENT.style.width = '100px'
    }
  }
  mediumImage(){
    if(this.imageRef!==undefined){
      const IMAGE_ELEMENT = this.imageRef.nativeElement;
      IMAGE_ELEMENT.style.width = '200px'
    }
  }
  largeImage(){
    if(this.imageRef!==undefined){
      const IMAGE_ELEMENT = this.imageRef.nativeElement;
      IMAGE_ELEMENT.style.width = '300px'
    }
  }
}


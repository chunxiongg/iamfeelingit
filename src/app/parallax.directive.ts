// import { Directive,ElementRef,Renderer2 } from '@angular/core';
// import {DomController} from '@ionic/angular'


// @Directive({
//   selector: '[appParallax]' ,
//   host:{
//     '(ionScroll)':'onCntscroll($event)',
//   }

// })
// export class ParallaxDirective {
//   constructor(public el:ElementRef,public re:Renderer2,private domCtrl: DomController) {
//   }
//   header:any;
//   main_cnt:any;
//   ta:any;
//   ngOnInit() {
//     let cnt=this.el.nativeElement
//     console.log(cnt)
//     this.header=cnt.getElementsByClassName('bg')[0];
//     console.log(this.header)
//     this.main_cnt=cnt.getElementsByClassName('main-cnt')[0];
//     console.log(this.main_cnt)

//     // this.re.setStyle(this.header,'webTransformOrigin','center bottom');
//     this.re.setStyle(this.header,'background-size','cover');
//     this.re.setStyle(this.main_cnt,'position','absolute');
//     this.re.setStyle(this.header, 'background-color', 'red')

    
//   }
//   onCntscroll(ev){
//   //   console.log(ev)
//   //  ev.domWrite(()=>{
//      console.log("scrolling")
//      this.update(ev);
//   //  });
//   }

//   update(ev){
//     console.log(ev)
//     if(ev.detail.scrollTop>0){
//       this.ta=ev.detail.scrollTop/2;
//     }
//     console.log(this.ta)
//     this.re.setStyle(this.header,'transform','translate3d(0,'+ this.ta +'px,0) scale(1,1)')
//   }
// }

import { IonContent, DomController } from '@ionic/angular';
import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[scrollHide]'
  })
export class ScrollHideDirective {

  @Input('scrollHide') config: ScrollHideConfig;
  @Input('scrollContent') scrollContent: IonContent;

  contentHeight: number;
  scrollHeight: number;
  lastScrollPosition: number;
  lastValue: number = 0;

  constructor(private element: ElementRef, private renderer: Renderer2, private domCtrl: DomController) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.scrollContent && this.config) {
      this.scrollContent.scrollEvents = true;

      let scrollStartFunc = async (ev) => {
        const el = await this.scrollContent.getScrollElement();
        this.contentHeight = el.offsetHeight;
        this.scrollHeight = el.scrollHeight;
        if (this.config.maxValue === undefined) {
          this.config.maxValue = this.element.nativeElement.offsetHeight;
        }
        this.lastScrollPosition = el.scrollTop;
      };

      if(this.scrollContent && this.scrollContent instanceof IonContent) {
        this.scrollContent.ionScrollStart.subscribe(scrollStartFunc);
        this.scrollContent.ionScroll.subscribe(async (ev) => this.adjustElementOnScroll(ev));
        this.scrollContent.ionScrollEnd.subscribe(async (ev) => this.adjustElementOnScroll(ev));

      } else if(this.scrollContent instanceof HTMLElement) {
        (this.scrollContent as HTMLElement).addEventListener('ionScrollStart', scrollStartFunc);
        (this.scrollContent as HTMLElement).addEventListener('ionScroll',async (ev) => this.adjustElementOnScroll(ev));
        (this.scrollContent as HTMLElement).addEventListener('ionScrollEnd',async (ev) => this.adjustElementOnScroll(ev));
      }
    }
  }

  private adjustElementOnScroll(ev) {
    if (ev) {
      this.domCtrl.write(async () => {
        const el = await this.scrollContent.getScrollElement();
        let scrollTop: number = el.scrollTop > 0 ? el.scrollTop : 0;
        let scrolldiff: number = scrollTop - this.lastScrollPosition;
        this.lastScrollPosition = scrollTop;
        let newValue = this.lastValue + scrolldiff;
        newValue = Math.max(0, Math.min(newValue, this.config.maxValue));
        this.renderer.setStyle(this.element.nativeElement, this.config.cssProperty, `-${newValue}px`);
        this.lastValue = newValue;
      });
    }
  }
}
export interface ScrollHideConfig {
  cssProperty: string;
  maxValue: number;
}

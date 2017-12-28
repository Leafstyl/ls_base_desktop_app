import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResizeService {

  static readonly smallRange: number[] = [240, 500];
  static readonly medRange: number[] = [500, 800];
  static readonly largeRange: number[] = [800, 2400];

  private defaultWidth: number;
  private widthSource: BehaviorSubject<number>;

  randomRange = true;

  width$: Observable<number>;

  constructor() {
    this.defaultWidth = this.getSizeFromRange(ResizeService.largeRange);
    this.widthSource = new BehaviorSubject<number>(this.defaultWidth);
    this.width$ = this.widthSource.asObservable();
  }

  private static getWindowWidth(): number {
    return window.innerWidth - 30;
  }

  private static getRandomInt(range: number[]): number {
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
  }

  setWidth(val: number): void {
    this.widthSource.next(Math.min(val, ResizeService.getWindowWidth()));
  }

  getWidth(): number {
    return this.widthSource.getValue();
  }

  getSizeFromRange(range: number[]): number {
    if (this.randomRange) {
      return ResizeService.getRandomInt(range);
    } else {
      return (range[1] - range[0]) / 2 + range[0];
    }
  }

  setSmall(): void {
    this.setWidth(this.getSizeFromRange(ResizeService.smallRange));
  }

  setMedium(): void {
    this.setWidth(this.getSizeFromRange(ResizeService.medRange));
  }

  setLarge(): void {
    this.setWidth(this.getSizeFromRange(ResizeService.largeRange));
  }

  setFull(): void {
    this.setWidth(ResizeService.getWindowWidth()); // - subtract width of resize grabbers
  }

}

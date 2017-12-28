import {Component, OnInit} from '@angular/core';
import {ComponentInterface} from '../../component.interface';
import {ContentModel} from '../../../core-ds/models/content-model';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit, ComponentInterface {

  data: ContentModel;

  byline = 'Theme colors that are used throughout the Curion Applications.';
  description = 'This is the colors description. Lorem ipsum dolor sit amet, consectetur adipiscing el.';
  referenceUrl = 'http://github.com/foobar';

  demoHtml = `
  <h3>Basic Buttons</h3>
  <div class='button-row'>
    <button mat-button>Basic</button>
    <button mat-button color='primary'>Primary</button>
    <button mat-button color='accent'>Accent</button>
    <button mat-button color='warn'>Warn</button>
    <button mat-button disabled>Disabled</button>
    <a mat-button routerLink='.'>Link</a>
  </div>`;

  demoTs = `
  import {Component} from '@angular/core';
  /**
   * @title Button varieties
   */
  @Component({
    selector: 'button-types-example',
    templateUrl: 'button-types-example.html',
    styleUrls: ['button-types-example.css'],
  })
  export class ButtonTypesExample {}`;

  demoScss = `
  .example-button-row {
    display: flex;
    align-items: center;
    justify-content: space-around;}`;

  constructor() {
  }

  ngOnInit() {
  }

}

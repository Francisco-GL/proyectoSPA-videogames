import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  transform(value: string, url: string): unknown {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }
  constructor( private domSanitizer:DomSanitizer ){ }

}

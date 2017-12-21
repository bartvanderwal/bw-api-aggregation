import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeHtmlEntity',
})
export class DecodeHtmlEntityPipe implements PipeTransform {
  transform(value: string) {
    // Extract all possible html entities - if any.
    const tempElement = document.createElement("div")
    tempElement.innerHTML = value
    return tempElement.innerText
  }
}

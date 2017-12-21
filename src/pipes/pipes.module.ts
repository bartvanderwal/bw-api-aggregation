import { NgModule } from '@angular/core';
import { DecodeHtmlEntityPipe } from './decode-html-entity/decode-html-entity';
@NgModule({
	declarations: [DecodeHtmlEntityPipe],
	imports: [],
	exports: [DecodeHtmlEntityPipe]
})
export class PipesModule {}

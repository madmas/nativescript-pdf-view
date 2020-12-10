import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PdfViewComponent } from './pdf-view.component';
import { PDFViewModule } from '@nativescript/pdf-view/angular';
@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PdfViewComponent }]), PDFViewModule],
	declarations: [PdfViewComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class PdfViewModule {}

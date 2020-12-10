/// <reference path="AndroidPdfViewer.d.ts" />
/// <reference path="references.d.ts" />
import pdfviewer = com.github.barteksc.pdfviewer;
import { PDFViewCommon } from './index.common';
export declare class PDFView extends PDFViewCommon {
	private promise;
	private onLoadHandler;
	get android(): pdfviewer.PDFView;
	set android(value: pdfviewer.PDFView);
	createNativeView(): pdfviewer.PDFView;
	loadPDF(src: string): void;
	private cacheThenLoad;
}

import { Folder, Property, View } from '@nativescript/core';

export declare abstract class PDFViewCommon extends View {
	static loadEvent: string;
	enableAnnotationRendering: boolean;
	src: string;
	protected tempFolder: Folder;
	static notifyOfEvent(eventName: string, pdfViewRef: WeakRef<any>): void;
	abstract loadPDF(src: string): any;
	protected createTempFile(base64data: any): void;
}
export declare const enableAnnotationRenderingProperty: Property<PDFViewCommon, boolean>;
export declare const srcProperty: Property<PDFViewCommon, string>;

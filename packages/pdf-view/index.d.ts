import { PDFViewCommon } from './common';

export declare class PDFView extends PDFViewCommon {
	public loadPDF(src: string): void;

	public static loadEvent: string;
	public static notifyOfEvent(eventName: string, pdfViewRef: WeakRef<PDFViewCommon>): void;
}

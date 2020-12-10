/// <reference path="references.d.ts" />
import { PDFViewCommon } from './common';
export declare class PDFView extends PDFViewCommon {
	private delegate;
	constructor();
	get ios(): WKWebView;
	set ios(value: WKWebView);
	onLoaded(): void;
	onUnloaded(): void;
	loadPDF(src: string): void;
	private init;
	private get mainScreen();
}

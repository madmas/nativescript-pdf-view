import { EventData, Page } from '@nativescript/core';
import { PDFViewModel } from './pdf-view.model';

export function pageLoaded(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new PDFViewModel();
}

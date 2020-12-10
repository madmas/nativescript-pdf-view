import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { PDFView } from 'nativescript-pdf-view';

@NgModule()
export class PDFViewModule {}

// Uncomment this line if the package provides a custom view component
registerElement('PDFView', () => PDFView);

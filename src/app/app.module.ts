
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';

// Import Plugins
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { UiSwitchModule } from 'ngx-ui-switch/src';
import { LaddaModule } from 'angular2-ladda';
import { SortablejsModule } from 'angular-sortablejs';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { TagInputModule } from 'ng2-tag-input';
import { SharedModule } from './shared/shared.module';
import { NgDateRangePickerModule } from 'ng-daterangepicker';

// Import routes
import { routes } from './app.routes';

// Import Services
import { SettingsService } from './_services/settings.service';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { FormBasicComponent } from './pages/form-basic/form-basic.component';
import { FormLayoutsComponent } from './pages/form-layouts/form-layouts.component';
import { FormValidationsComponent } from './pages/form-validations/form-validations.component';
import { PagesProfileComponent } from './pages/pages-profile/pages-profile.component';
import { DrilldownComponent } from './pages/drilldown/drilldown.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		SettingsComponent,

		Error404Component,
		Error500Component,
		FormBasicComponent,
		FormLayoutsComponent,
		FormValidationsComponent,
		PagesProfileComponent,
		DrilldownComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes),
		BsDropdownModule.forRoot(),
		CollapseModule.forRoot(),
		AccordionModule.forRoot(),
		ButtonsModule.forRoot(),
		ModalModule.forRoot(),
		CarouselModule.forRoot(),
		PopoverModule.forRoot(),
		TabsModule.forRoot(),
		TooltipModule.forRoot(),
		UiSwitchModule,
		LaddaModule,
		SortablejsModule,
		SweetAlert2Module,
		ConfirmationPopoverModule.forRoot({
			confirmButtonType: 'danger' // set defaults here
		}),
		NgxDatatableModule,
		SharedModule,
		ReactiveFormsModule,
		MultiselectDropdownModule,
		TagInputModule,
		BrowserAnimationsModule,
		NgDateRangePickerModule
	],
	providers: [
		SettingsService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }

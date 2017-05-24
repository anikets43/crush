import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { TopNavbarComponent } from './top-navbar/top-navbar.component';

import { ColorPrimaryComponent } from './color-primary/color-primary.component';
import { ColorDangerComponent } from './color-danger/color-danger.component';
import { ColorSuccessComponent } from './color-success/color-success.component';
import { ColorWarningComponent } from './color-warning/color-warning.component';
import { ColorInfoComponent } from './color-info/color-info.component';
import { ColorBlackComponent } from './color-black/color-black.component';
import { ColorGrayComponent } from './color-gray/color-gray.component';
import { UiButtonsComponent } from './ui-buttons/ui-buttons.component';
import { UiPanelsComponent } from './ui-panels/ui-panels.component';
import { UiModalsComponent } from './ui-modals/ui-modals.component';
import { UiPageHeadersComponent } from './ui-page-headers/ui-page-headers.component';
import { UiConfirmationComponent } from './ui-confirmation/ui-confirmation.component';
import { UiDropdownMenuComponent } from './ui-dropdown-menu/ui-dropdown-menu.component';
import { UiMediaObjectsComponent } from './ui-media-objects/ui-media-objects.component';
import { BtAccordionsComponent } from './bt-accordions/bt-accordions.component';
import { BtAlertsComponent } from './bt-alerts/bt-alerts.component';
import { BtButtonDropdownComponent } from './bt-button-dropdown/bt-button-dropdown.component';
import { BtButtonGroupsComponent } from './bt-button-groups/bt-button-groups.component';
import { BtButtonsComponent } from './bt-buttons/bt-buttons.component';
import { BtCarouselComponent } from './bt-carousel/bt-carousel.component';
import { BtCodeComponent } from './bt-code/bt-code.component';
import { BtCollapseComponent } from './bt-collapse/bt-collapse.component';
import { BtDropdownsComponent } from './bt-dropdowns/bt-dropdowns.component';
import { BtGridComponent } from './bt-grid/bt-grid.component';
import { BtHelpersComponent } from './bt-helpers/bt-helpers.component';
import { BtLabelsBadgesComponent } from './bt-labels-badges/bt-labels-badges.component';
import { BtPaginationComponent } from './bt-pagination/bt-pagination.component';
import { BtPopoverComponent } from './bt-popover/bt-popover.component';
import { BtTabsComponent } from './bt-tabs/bt-tabs.component';
import { BtTooltipsComponent } from './bt-tooltips/bt-tooltips.component';
import { BtTypographyComponent } from './bt-typography/bt-typography.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { Table10kRowsComponent } from './table-10k-rows/table-10k-rows.component';
import { TableInlineEditComponent } from './table-inline-edit/table-inline-edit.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
@NgModule({
    declarations: [
        TopNavbarComponent,
        ColorPrimaryComponent,
        ColorDangerComponent,
        ColorSuccessComponent,
        ColorWarningComponent,
        ColorInfoComponent,
        ColorBlackComponent,
        ColorGrayComponent,
        UiButtonsComponent,
        UiPanelsComponent,
        UiModalsComponent,
        UiPageHeadersComponent,
        UiConfirmationComponent,
        UiDropdownMenuComponent,
        UiMediaObjectsComponent,
        BtAccordionsComponent,
        BtAlertsComponent,
        BtButtonDropdownComponent,
        BtButtonGroupsComponent,
        BtButtonsComponent,
        BtCarouselComponent,
        BtCodeComponent,
        BtCollapseComponent,
        BtDropdownsComponent,
        BtGridComponent,
        BtHelpersComponent,
        BtLabelsBadgesComponent,
        BtPaginationComponent,
        BtPopoverComponent,
        BtTabsComponent,
        BtTooltipsComponent,
        BtTypographyComponent,
        TableBasicComponent,
        Table10kRowsComponent,
        TableInlineEditComponent,
        TableFilterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule.forRoot(),
        RouterModule,
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
        NgxDatatableModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
        }),
    ],
    exports: [
        TopNavbarComponent,
        ColorPrimaryComponent,
        ColorDangerComponent,
        ColorSuccessComponent,
        ColorWarningComponent,
        ColorInfoComponent,
        ColorBlackComponent,
        ColorGrayComponent,
        UiButtonsComponent,
        UiPanelsComponent,
        UiModalsComponent,
        UiPageHeadersComponent,
        UiConfirmationComponent,
        UiDropdownMenuComponent,
        UiMediaObjectsComponent,
        BtAccordionsComponent,
        BtAlertsComponent,
        BtButtonDropdownComponent,
        BtButtonGroupsComponent,
        BtButtonsComponent,
        BtCarouselComponent,
        BtCodeComponent,
        BtCollapseComponent,
        BtDropdownsComponent,
        BtGridComponent,
        BtHelpersComponent,
        BtLabelsBadgesComponent,
        BtPaginationComponent,
        BtPopoverComponent,
        BtTabsComponent,
        BtTooltipsComponent,
        BtTypographyComponent,
        TableBasicComponent,
        Table10kRowsComponent,
        TableInlineEditComponent,
        TableFilterComponent
    ]
})
export class SharedModule {
    // static forRoot(): ModuleWithProviders {
    //   return {
    //     ngModule: SharedModule
    //   };
    // }
}

import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ColorPrimaryComponent } from './shared/color-primary/color-primary.component';
import { ColorDangerComponent } from './shared/color-danger/color-danger.component';
import { ColorSuccessComponent } from './shared/color-success/color-success.component';
import { ColorWarningComponent } from './shared/color-warning/color-warning.component';
import { ColorInfoComponent } from './shared/color-info/color-info.component';
import { ColorBlackComponent } from './shared/color-black/color-black.component';
import { ColorGrayComponent } from './shared/color-gray/color-gray.component';
import { UiButtonsComponent } from './shared/ui-buttons/ui-buttons.component';
import { UiPanelsComponent } from './shared/ui-panels/ui-panels.component';
import { UiModalsComponent } from './shared/ui-modals/ui-modals.component';
import { UiPageHeadersComponent } from './shared/ui-page-headers/ui-page-headers.component';
import { UiConfirmationComponent } from './shared/ui-confirmation/ui-confirmation.component';
import { UiDropdownMenuComponent } from './shared/ui-dropdown-menu/ui-dropdown-menu.component';
import { UiMediaObjectsComponent } from './shared/ui-media-objects/ui-media-objects.component';
import { BtAccordionsComponent } from './shared/bt-accordions/bt-accordions.component';
import { BtAlertsComponent } from './shared/bt-alerts/bt-alerts.component';
import { BtButtonDropdownComponent } from './shared/bt-button-dropdown/bt-button-dropdown.component';
import { BtButtonGroupsComponent } from './shared/bt-button-groups/bt-button-groups.component';
import { BtButtonsComponent } from './shared/bt-buttons/bt-buttons.component';
import { BtCarouselComponent } from './shared/bt-carousel/bt-carousel.component';
import { BtCodeComponent } from './shared/bt-code/bt-code.component';
import { BtCollapseComponent } from './shared/bt-collapse/bt-collapse.component';
import { BtDropdownsComponent } from './shared/bt-dropdowns/bt-dropdowns.component';
import { BtGridComponent } from './shared/bt-grid/bt-grid.component';
import { BtHelpersComponent } from './shared/bt-helpers/bt-helpers.component';
import { BtLabelsBadgesComponent } from './shared/bt-labels-badges/bt-labels-badges.component';
import { BtPaginationComponent } from './shared/bt-pagination/bt-pagination.component';
import { BtPopoverComponent } from './shared/bt-popover/bt-popover.component';
import { BtTabsComponent } from './shared/bt-tabs/bt-tabs.component';
import { BtTooltipsComponent } from './shared/bt-tooltips/bt-tooltips.component';
import { BtTypographyComponent } from './shared/bt-typography/bt-typography.component';
import { TableBasicComponent } from './shared/table-basic/table-basic.component';
import { Table10kRowsComponent } from './shared/table-10k-rows/table-10k-rows.component';
import { TableInlineEditComponent } from './shared/table-inline-edit/table-inline-edit.component';
import { TableFilterComponent } from './shared/table-filter/table-filter.component';

import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { FormBasicComponent } from './pages/form-basic/form-basic.component';
import { FormLayoutsComponent } from './pages/form-layouts/form-layouts.component';
import { FormValidationsComponent } from './pages/form-validations/form-validations.component';
import { PagesProfileComponent } from './pages/pages-profile/pages-profile.component';

// Routes
export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'color-primary', component: ColorPrimaryComponent },
  { path: 'color-danger', component: ColorDangerComponent },
  { path: 'color-success', component: ColorSuccessComponent },
  { path: 'color-warning', component: ColorWarningComponent },
  { path: 'color-info', component: ColorInfoComponent },
  { path: 'color-black', component: ColorBlackComponent },
  { path: 'color-gray', component: ColorGrayComponent },
  { path: 'ui-buttons', component: UiButtonsComponent },
  { path: 'ui-panels', component: UiPanelsComponent },
  { path: 'ui-modals', component: UiModalsComponent },
  { path: 'ui-page-headers', component: UiPageHeadersComponent },
  { path: 'ui-confirmation', component: UiConfirmationComponent },
  { path: 'ui-dropdown-menu', component: UiDropdownMenuComponent },
  { path: 'ui-media-objects', component: UiMediaObjectsComponent },
  { path: 'bt-accordions', component: BtAccordionsComponent },
  { path: 'bt-alerts', component: BtAlertsComponent },
  { path: 'bt-button-dropdown', component: BtButtonDropdownComponent },
  { path: 'bt-button-groups', component: BtButtonGroupsComponent },
  { path: 'bt-buttons', component: BtButtonsComponent },
  { path: 'bt-carousel', component: BtCarouselComponent },
  { path: 'bt-code', component: BtCodeComponent },
  { path: 'bt-collapse', component: BtCollapseComponent },
  { path: 'bt-dropdowns', component: BtDropdownsComponent },
  { path: 'bt-grid', component: BtGridComponent },
  { path: 'bt-helpers', component: BtHelpersComponent },
  { path: 'bt-labels-badges', component: BtLabelsBadgesComponent },
  { path: 'bt-pagination', component: BtPaginationComponent },
  { path: 'bt-popover', component: BtPopoverComponent },
  { path: 'bt-tabs', component: BtTabsComponent },
  { path: 'bt-tooltips', component: BtTooltipsComponent },
  { path: 'bt-typography', component: BtTypographyComponent },
  { path: 'table-basic', component: TableBasicComponent },
  { path: 'table-10k-rows', component: Table10kRowsComponent },
  { path: 'table-inline-edit', component: TableInlineEditComponent },
  { path: 'table-filter', component: TableFilterComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'error-500', component: Error500Component },
  { path: 'pages-profile', component: PagesProfileComponent },
  { path: 'form-basic', component: FormBasicComponent },
  { path: 'form-layouts', component: FormLayoutsComponent },
  { path: 'form-validations', component: FormValidationsComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/dashboard' }
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/ui/form/input/input.component';
import { CheckboxComponent } from './components/ui/form/checkbox/checkbox.component';
import { RadioComponent } from './components/ui/form/radio/radio.component';
import { SelectComponent } from './components/ui/form/select/select.component';
import { DatePickerComponent } from './components/ui/form/date-picker/date-picker.component';

import { NavbarComponent } from './components/ui/navigation/navbar/navbar.component';
import { SidebarComponent } from './components/ui/navigation/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/ui/navigation/breadcrumb/breadcrumb.component';
import { PaginationComponent } from './components/ui/navigation/pagination/pagination.component';

import { AlertComponent } from './components/ui/feedback/alert/alert.component';
import { ToastNotificationComponent } from './components/ui/feedback/toast-notification/toast-notification.component';
import { SpinnerLoaderComponent } from './components/ui/feedback/spinner-loader/spinner-loader.component';

import { CardComponent } from './components/ui/data-display/card/card.component';
import { TableComponent } from './components/ui/data-display/table/table.component';
import { TabsComponent } from './components/ui/data-display/tabs/tabs.component';
import { AccordionComponent } from './components/ui/data-display/accordion/accordion.component';
import { BadgeComponent } from './components/ui/data-display/badge/badge.component';

import { ModalComponent } from './components/ui/overlay/modal/modal.component';
import { TooltipComponent } from './components/ui/overlay/tooltip/tooltip.component';
import { DropdownComponent } from './components/ui/overlay/dropdown/dropdown.component';

import { SliderComponent } from './components/ui/misc/slider/slider.component';
import { ProgressBarComponent } from './components/ui/misc/progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent,
    DatePickerComponent,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    PaginationComponent,
    AlertComponent,
    ToastNotificationComponent,
    SpinnerLoaderComponent,
    CardComponent,
    TableComponent,
    TabsComponent,
    AccordionComponent,
    BadgeComponent,
    ModalComponent,
    TooltipComponent,
    DropdownComponent,
    SliderComponent,
    ProgressBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  isModalVisible: boolean = false;
  isSidebarVisible: boolean = true;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  closeSidebar() {
    this.isSidebarVisible = false;
  }
}

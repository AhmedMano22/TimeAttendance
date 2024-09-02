import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsRoutingModule } from "./forms-routing.module";
import { FormControlsComponent } from "./form-controls/form-controls.component";
import { FormValidationComponent } from "./form-controls/form-validation/form-validation.component";
import { BaseInputsComponent } from "./form-controls/base-inputs/base-inputs.component";
import { CheckboxRadioComponent } from "./form-controls/checkbox-radio/checkbox-radio.component";
import { InputGroupsComponent } from "./form-controls/input-groups/input-groups.component";
import { MegaOptionsComponent } from "./form-controls/mega-options/mega-options.component";
import { DatepickerComponent } from "./form-widgets/datepicker/datepicker.component";
import { TimepickerComponent } from "./form-widgets/timepicker/timepicker.component";
import { DateTimepickerComponent } from "./form-widgets/date-timepicker/date-timepicker.component";
import { DateRangepickerComponent } from "./form-widgets/date-rangepicker/date-rangepicker.component";
import { TouchspinComponent } from "./form-widgets/touchspin/touchspin.component";
import { Select2Component } from "./form-widgets/select2/select2.component";
import { SwitchComponent } from "./form-widgets/switch/switch.component";
import { TypeaheadComponent } from "./form-widgets/typeahead/typeahead.component";
import { ClipboardComponent } from "./form-widgets/clipboard/clipboard.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CustomStylesComponent } from "./form-controls/form-validation/custom-styles/custom-styles.component";
import { BrowserDefaultsComponent } from "./form-controls/form-validation/browser-defaults/browser-defaults.component";
import { SupportedElementsComponent } from "./form-controls/form-validation/supported-elements/supported-elements.component";
import { TooltipsComponent } from "./form-controls/form-validation/tooltips/tooltips.component";
import { BasicFormControlComponent } from "./form-controls/base-inputs/basic-form-control/basic-form-control.component";
import { BasicHtmlInputControlComponent } from "./form-controls/base-inputs/basic-html-input-control/basic-html-input-control.component";
import { EdgesInputStyleComponent } from "./form-controls/base-inputs/edges-input-style/edges-input-style.component";
import { FlatInputStyleComponent } from "./form-controls/base-inputs/flat-input-style/flat-input-style.component";
import { RaiseInputStyleComponent } from "./form-controls/base-inputs/raise-input-style/raise-input-style.component";
import { SolidInputStyleComponent } from "./form-controls/base-inputs/solid-input-style/solid-input-style.component";
import { InputSizingComponent } from "./form-controls/base-inputs/input-sizing/input-sizing.component";
import { CustomControlsComponent } from "./form-controls/base-inputs/custom-controls/custom-controls.component";
import { CustomRadioComponent } from "./form-controls/checkbox-radio/custom-radio/custom-radio.component";
import { CustomCheckboxComponent } from "./form-controls/checkbox-radio/custom-checkbox/custom-checkbox.component";
import { AnimatedRadioButtonsComponent } from "./form-controls/checkbox-radio/animated-radio-buttons/animated-radio-buttons.component";
import { AnimatedCheckboxButtonsComponent } from "./form-controls/checkbox-radio/animated-checkbox-buttons/animated-checkbox-buttons.component";
import { SquareCheckboxComponent } from "./form-controls/checkbox-radio/square-checkbox/square-checkbox.component";
import { BasicInputGroupsComponent } from "./form-controls/input-groups/basic-input-groups/basic-input-groups.component";
import { BasicInputGroups2Component } from "./form-controls/input-groups/basic-input-groups2/basic-input-groups2.component";
import { DefaultStyleComponent } from "./form-controls/mega-options/default-style/default-style.component";
import { NoBorderComponent } from "./form-controls/mega-options/no-border/no-border.component";
import { SolidBorderStyleComponent } from "./form-controls/mega-options/solid-border-style/solid-border-style.component";
import { OfferBorderStyleComponent } from "./form-controls/mega-options/offer-border-style/offer-border-style.component";
import { InlineStyleComponent } from "./form-controls/mega-options/inline-style/inline-style.component";
import { VerticalStyleComponent } from "./form-controls/mega-options/vertical-style/vertical-style.component";
import { HorizontalComponent } from "./form-controls/mega-options/horizontal/horizontal.component";
import { FormWidgetsComponent } from "./form-widgets/form-widgets.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BasicSwitchComponent } from "./form-widgets/switch/basic-switch/basic-switch.component";
import { BasicColorComponent } from "./form-widgets/switch/basic-color/basic-color.component";
import { SwitchSizingComponent } from "./form-widgets/switch/switch-sizing/switch-sizing.component";
import { SwitchWithIconComponent } from "./form-widgets/switch/switch-with-icon/switch-with-icon.component";
import { SwitchWithColorComponent } from "./form-widgets/switch/switch-with-color/switch-with-color.component";
import { SwitchOutlineComponent } from "./form-widgets/switch/switch-outline/switch-outline.component";
import { SwitchUncheckedOutlineComponent } from "./form-widgets/switch/switch-unchecked-outline/switch-unchecked-outline.component";
import { FormLayoutComponent } from "./form-layout/form-layout.component";
import { DefaultFormsComponent } from "./form-layout/default-forms/default-forms.component";
import { FormWizard1Component } from "./form-layout/form-wizard1/form-wizard1.component";
import { FormWizard2Component } from "./form-layout/form-wizard2/form-wizard2.component";
import { FormWizard3Component } from "./form-layout/form-wizard3/form-wizard3.component";
import { DefaultFormLayoutComponent } from "./form-layout/default-forms/default-form-layout/default-form-layout.component";
import { MegaFormComponent } from "./form-layout/default-forms/mega-form/mega-form.component";
import { HorizontalFormLayoutComponent } from "./form-layout/default-forms/horizontal-form-layout/horizontal-form-layout.component";
import { InlineFormComponent } from "./form-layout/default-forms/inline-form/inline-form.component";
import { ArchwizardModule } from "angular-archwizard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgSelectModule } from "@ng-select/ng-select";
import { ColorVariantComponent } from "./form-widgets/select2/color-variant/color-variant.component";
import { FullColorVariantComponent } from "./form-widgets/select2/full-color-variant/full-color-variant.component";
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import { InputInitiallyEmptyComponent } from "./form-widgets/date-rangepicker/input-initially-empty/input-initially-empty.component";
import { DateRangePickerComponent } from "./form-widgets/date-rangepicker/date-range-picker/date-range-picker.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "@danielmoncada/angular-datetime-picker";
import { DatepickerModule } from "ng2-datepicker";
import { ClipboardModule } from "ngx-clipboard";

@NgModule({
  declarations: [
    FormWidgetsComponent,
    FormControlsComponent,
    FormValidationComponent,
    BaseInputsComponent,
    CheckboxRadioComponent,
    InputGroupsComponent,
    MegaOptionsComponent,
    DatepickerComponent,
    TimepickerComponent,
    DateTimepickerComponent,
    DateRangepickerComponent,
    TouchspinComponent,
    Select2Component,
    SwitchComponent,
    TypeaheadComponent,
    ClipboardComponent,
    CustomStylesComponent,
    BrowserDefaultsComponent,
    SupportedElementsComponent,
    TooltipsComponent,
    BasicFormControlComponent,
    BasicHtmlInputControlComponent,
    EdgesInputStyleComponent,
    FlatInputStyleComponent,
    RaiseInputStyleComponent,
    SolidInputStyleComponent,
    InputSizingComponent,
    CustomControlsComponent,
    CustomRadioComponent,
    CustomCheckboxComponent,
    AnimatedRadioButtonsComponent,
    AnimatedCheckboxButtonsComponent,
    SquareCheckboxComponent,
    BasicInputGroupsComponent,
    BasicInputGroups2Component,
    DefaultStyleComponent,
    NoBorderComponent,
    SolidBorderStyleComponent,
    OfferBorderStyleComponent,
    InlineStyleComponent,
    VerticalStyleComponent,
    HorizontalComponent,
    BasicSwitchComponent,
    BasicColorComponent,
    SwitchSizingComponent,
    SwitchWithIconComponent,
    SwitchWithColorComponent,
    SwitchOutlineComponent,
    SwitchUncheckedOutlineComponent,
    FormLayoutComponent,
    DefaultFormsComponent,
    FormWizard1Component,
    FormWizard2Component,
    FormWizard3Component,
    DefaultFormLayoutComponent,
    MegaFormComponent,
    HorizontalFormLayoutComponent,
    InlineFormComponent,
    ColorVariantComponent,
    FullColorVariantComponent,
    InputInitiallyEmptyComponent,
    DateRangePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    NgbModule,
    ArchwizardModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMatTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DatepickerModule,
    ClipboardModule,
  ],
})
export class FormsAppModule {}

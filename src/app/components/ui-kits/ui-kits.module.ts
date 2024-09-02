import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiKitsRoutingModule } from "./ui-kits-routing.module";
import { TypographyComponent } from "./typography/typography.component";
import { AvatarsComponent } from "./avatars/avatars.component";
import { HelpersClassesComponent } from "./helpers-classes/helpers-classes.component";
import { GridComponent } from "./grid/grid.component";
import { TagAndPillsComponent } from "./tag-and-pills/tag-and-pills.component";
import { ProgressComponent } from "./progress/progress.component";
import { ModalComponent } from "./modal/modal.component";
import { AlertComponent } from "./alert/alert.component";
import { PopoverComponent } from "./popover/popover.component";
import { ToasterComponent } from "./toaster/toaster.component";
import { SpinnersComponent } from "./spinners/spinners.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { AccordingComponent } from "./according/according.component";
import { TabsComponent } from "./tabs/tabs.component";
import { BootstrapTabsComponent } from "./tabs/bootstrap-tabs/bootstrap-tabs.component";
import { LineTabsComponent } from "./tabs/line-tabs/line-tabs.component";
import { ListsComponent } from "./lists/lists.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { ListingTypographyComponent } from "./typography/listing-typography/listing-typography.component";
import { BlockquotesComponent } from "./typography/blockquotes/blockquotes.component";
import { HeadingsComponent } from "./typography/headings/headings.component";
import { DisplayHeadingComponent } from "./typography/display-heading/display-heading.component";
import { GridOptionComponent } from "./grid/grid-option/grid-option.component";
import { GridColumnComponent } from "./grid/grid-column/grid-column.component";
import { VerticalAlignmentComponent } from "./grid/vertical-alignment/vertical-alignment.component";
import { NestingColumnComponent } from "./grid/nesting-column/nesting-column.component";
import { OrderComponent } from "./grid/order/order.component";
import { OffsetComponent } from "./grid/offset/offset.component";
import { RowColumnComponent } from "./grid/row-column/row-column.component";
import { HorizontalAlignmentComponent } from "./grid/horizontal-alignment/horizontal-alignment.component";
import { BasicAccordionComponent } from "./according/basic-accordion/basic-accordion.component";
import { AllCloseAccordionComponent } from "./according/all-close-accordion/all-close-accordion.component";
import { ColorAccordionComponent } from "./according/color-accordion/color-accordion.component";
import { AccordionTitleIconComponent } from "./according/accordion-title-icon/accordion-title-icon.component";
import { IconOpenCloseIconComponent } from "./according/icon-open-close-icon/icon-open-close-icon.component";
import { ColorAlertsComponent } from "./alert/color-alerts/color-alerts.component";
import { AlertWithIconComponent } from "./alert/alert-with-icon/alert-with-icon.component";
import { LinkThemeColorComponent } from "./alert/link-theme-color/link-theme-color.component";
import { DismissingComponent } from "./alert/dismissing/dismissing.component";
import { LinkColorComponent } from "./alert/link-color/link-color.component";
import { DismissingLightComponent } from "./alert/dismissing-light/dismissing-light.component";
import { OutlineAlertsComponent } from "./alert/outline-alerts/outline-alerts.component";
import { OutlineDarkAlertsComponent } from "./alert/outline-dark-alerts/outline-dark-alerts.component";
import { AlertIconOutlineComponent } from "./alert/alert-icon-outline/alert-icon-outline.component";
import { AlertIconInverseComponent } from "./alert/alert-icon-inverse/alert-icon-inverse.component";
import { TextAsActionComponent } from "./alert/text-as-action/text-as-action.component";
import { AdditionalContentComponent } from "./alert/additional-content/additional-content.component";
import { DropdownBottomComponentComponent } from "./dropdown/dropdown-bottom-component/dropdown-bottom-component.component";
import { DefaultListComponent } from "./lists/default-list/default-list.component";
import { FlushStyleComponent } from "./lists/flush-style/flush-style.component";
import { ContextualClassesComponent } from "./lists/contextual-classes/contextual-classes.component";
import { WithBadgesComponent } from "./lists/with-badges/with-badges.component";
import { JavascriptBehaviorComponent } from "./lists/javascript-behavior/javascript-behavior.component";
import { WithIconComponent } from "./lists/with-icon/with-icon.component";
import { LinkButtonComponent } from "./lists/link-button/link-button.component";
import { WithImagesComponent } from "./lists/with-images/with-images.component";
import { WithImagesRoundedComponent } from "./lists/with-images-rouded/with-images-rounded.component";
import { CustomContentComponent } from "./lists/custom-content/custom-content.component";
import { StaticExampleComponent } from "./modal/static-example/static-example.component";
import { BasicModalComponent } from "./modal/basic-modal/basic-modal.component";
import { ProgressBarsComponent } from "./progress/progress-bars/progress-bars.component";
import { BarsAnimatedComponent } from "./progress/bars-animated/bars-animated.component";
import { MultipleBarsComponent } from "./progress/multiple-bars/multiple-bars.component";
import { BarsStripedComponent } from "./progress/bars-striped/bars-striped.component";
import { BasicTabsComponent } from "./tabs/bootstrap-tabs/basic-tabs/basic-tabs.component";
import { TabsButtonLeftAlignComponent } from "./tabs/bootstrap-tabs/tabs-button-left-align/tabs-button-left-align.component";
import { TabsWithIconComponent } from "./tabs/bootstrap-tabs/tabs-with-icon/tabs-with-icon.component";
import { TabsRightAlignComponent } from "./tabs/bootstrap-tabs/tabs-right-align/tabs-right-align.component";
import { TabsVerticalComponent } from "./tabs/bootstrap-tabs/tabs-vertical/tabs-vertical.component";
import { PillTabsComponent } from "./tabs/bootstrap-tabs/pill-tabs/pill-tabs.component";
import { PillTabsWithIconComponent } from "./tabs/bootstrap-tabs/pill-tabs-with-icon/pill-tabs-with-icon.component";
import { PillDarkColorComponent } from "./tabs/bootstrap-tabs/pill-dark-color/pill-dark-color.component";
import { PrimaryColorComponent } from "./tabs/bootstrap-tabs/primary-color/primary-color.component";
import { SimpleMaterialStyleComponent } from "./tabs/line-tabs/simple-material-style/simple-material-style.component";
import { SimpleStyleBottomTabComponent } from "./tabs/line-tabs/simple-style-bottom-tab/simple-style-bottom-tab.component";
import { StyleLeftTabComponent } from "./tabs/line-tabs/style-left-tab/style-left-tab.component";
import { StyleRightTabComponent } from "./tabs/line-tabs/style-right-tab/style-right-tab.component";
import { ColorTabsComponent } from "./tabs/line-tabs/color-tabs/color-tabs.component";
import { MaterialStyleLeftTabComponent } from "./tabs/line-tabs/material-style-left-tab/material-style-left-tab.component";
import { MaterialStyleRightTabComponent } from "./tabs/line-tabs/material-style-right-tab/material-style-right-tab.component";
import { TextElementsComponent } from "./typography/text-elements/text-elements.component";
@NgModule({
  declarations: [
    TypographyComponent,
    AvatarsComponent,
    HelpersClassesComponent,
    GridComponent,
    TagAndPillsComponent,
    ProgressComponent,
    ModalComponent,
    AlertComponent,
    PopoverComponent,
    ToasterComponent,
    SpinnersComponent,
    DropdownComponent,
    AccordingComponent,
    TabsComponent,
    BootstrapTabsComponent,
    LineTabsComponent,
    ListsComponent,
    TooltipComponent,
    ListingTypographyComponent,
    BlockquotesComponent,
    HeadingsComponent,
    DisplayHeadingComponent,
    GridOptionComponent,
    GridColumnComponent,
    VerticalAlignmentComponent,
    NestingColumnComponent,
    OrderComponent,
    OffsetComponent,
    RowColumnComponent,
    HorizontalAlignmentComponent,
    BasicAccordionComponent,
    AllCloseAccordionComponent,
    ColorAccordionComponent,
    AccordionTitleIconComponent,
    IconOpenCloseIconComponent,
    ColorAlertsComponent,
    AlertWithIconComponent,
    LinkThemeColorComponent,
    DismissingComponent,
    LinkColorComponent,
    DismissingLightComponent,
    OutlineAlertsComponent,
    OutlineDarkAlertsComponent,
    AlertIconOutlineComponent,
    AlertIconInverseComponent,
    TextAsActionComponent,
    AdditionalContentComponent,
    DropdownBottomComponentComponent,
    DefaultListComponent,
    FlushStyleComponent,
    ContextualClassesComponent,
    WithBadgesComponent,
    JavascriptBehaviorComponent,
    WithIconComponent,
    LinkButtonComponent,
    WithImagesComponent,
    WithImagesRoundedComponent,
    CustomContentComponent,
    StaticExampleComponent,
    BasicModalComponent,
    ProgressBarsComponent,
    BarsAnimatedComponent,
    MultipleBarsComponent,
    BarsStripedComponent,
    BasicTabsComponent,
    TabsButtonLeftAlignComponent,
    TabsWithIconComponent,
    TabsRightAlignComponent,
    TabsVerticalComponent,
    PillTabsComponent,
    PillTabsWithIconComponent,
    PillDarkColorComponent,
    PrimaryColorComponent,
    SimpleMaterialStyleComponent,
    SimpleStyleBottomTabComponent,
    StyleLeftTabComponent,
    StyleRightTabComponent,
    ColorTabsComponent,
    MaterialStyleLeftTabComponent,
    MaterialStyleRightTabComponent,
    TextElementsComponent,
  ],
  imports: [CommonModule, UiKitsRoutingModule, SharedModule, NgbModule],
})
export class UiKitsModule {}

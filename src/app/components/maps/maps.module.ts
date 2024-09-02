import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MapsRoutingModule } from "./maps-routing.module";
import { MapJsComponent } from "./map-js/map-js.component";
import { SharedModule } from "src/app/shared/shared.module";
import { GoogleMapsModule } from "@angular/google-maps";
import { HttpClientModule } from "@angular/common/http";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LeafletMapComponent } from "./leaflet-map/leaflet-map.component";

@NgModule({
  declarations: [MapJsComponent, LeafletMapComponent],
  imports: [CommonModule, MapsRoutingModule, SharedModule, GoogleMapsModule, HttpClientModule, LeafletModule],
})
export class MapsModule {}

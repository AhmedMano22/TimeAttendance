import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FileManagerComponent } from "./file-manager.component";

var routingAnimation = localStorage.getItem("animate");

const routes: Routes = [
  {
    path: "",
    component: FileManagerComponent,
    data: { animation: [routingAnimation] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileManagerRoutingModule {}

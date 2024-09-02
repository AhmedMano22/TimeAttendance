import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RequestsComponent } from "./requests.component";
import { PendingRequestsComponent } from "./components/pending-requests/pending-requests.component";
import { AddRequestComponent } from "./components/add-request/add-request.component";
import { RequestsListComponent } from "./components/requests-list/requests-list.component";
import { DetailsComponent } from "./components/details/details.component";
import { ReplyComponent } from "./components/reply/reply.component";

const routes: Routes = [
  {
    path: "",
    component: RequestsComponent,
    children: [{ path: "requests-list", component: RequestsListComponent }],
  },
  {
    path: "",
    component: RequestsComponent,
    children: [
      { path: "pending-requests", component: PendingRequestsComponent },
    ],
  },
  {
    path: "",
    component: RequestsComponent,
    children: [{ path: "add", component: AddRequestComponent }],
  },
  {
    path: "",
    component: RequestsComponent,
    children: [{ path: "details/:id", component: DetailsComponent }],
  },
  {
    path: "",
    component: RequestsComponent,
    children: [{ path: "reply/:id", component: ReplyComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsRoutingModule {}

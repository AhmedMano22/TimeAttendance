import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import("../../../components/dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "widgest",
    loadChildren: () => import("../../../components/widgest/widgest.module").then((m) => m.WidgestModule),
  },
  {
    path: "page-layout",
    loadChildren: () => import("../../../components/page-layout/page-layout.module").then((m) => m.PageLayoutModule),
  },
  {
    path: "project",
    loadChildren: () => import("../../../components/project/project.module").then((m) => m.ProjectModule),
  },
  {
    path: "file-manager",
    loadChildren: () => import("../../../components/file-manager/file-manager.module").then((m) => m.FileManagerModule),
  },
  {
    path: "e-commerce",
    loadChildren: () => import("../../../components/e-commerce/e-commerce.module").then((m) => m.ECommerceModule),
  },
  {
    path: "email",
    loadChildren: () => import("../../../components/email/email.module").then((m) => m.EmailModule),
  },
  {
    path: "chat",
    loadChildren: () => import("../../../components/chat/chat.module").then((m) => m.ChatModule),
  },
  {
    path: "users",
    loadChildren: () => import("../../../components/users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "bookmark",
    loadChildren: () => import("../../../components/bookmark/bookmark.module").then((m) => m.BookmarkModule),
  },
  {
    path: "contacts",
    loadChildren: () => import("../../../components/contacts/contacts.module").then((m) => m.ContactsModule),
  },
  {
    path: "task",
    loadChildren: () => import("../../../components/task/task.module").then((m) => m.TaskModule),
  },
  {
    path: "calender",
    loadChildren: () => import("../../../components/calender/calender.module").then((m) => m.CalenderModule),
  },
  {
    path: "social-app",
    loadChildren: () => import("../../../components/social-app/social-app.module").then((m) => m.SocialAppModule),
  },
  {
    path: "to-do",
    loadChildren: () => import("../../../components/to-do/to-do.module").then((m) => m.ToDoModule),
  },
  {
    path: "search-website",
    loadChildren: () => import("../../../components/search-website/search-website.module").then((m) => m.SearchWebsiteModule),
  },
  {
    path: "forms",
    loadChildren: () => import("../../../components/forms/forms.module").then((m) => m.FormsAppModule),
  },
  {
    path: "tables",
    loadChildren: () => import("../../../components/tables/tables.module").then((m) => m.TablesModule),
  },
  {
    path: "ui-kits",
    loadChildren: () => import("../../../components/ui-kits/ui-kits.module").then((m) => m.UiKitsModule),
  },
  {
    path: "bonus-ui",
    loadChildren: () => import("../../../components/bonus-ui/bonus-ui.module").then((m) => m.BonusUiModule),
  },
  {
    path: "icon",
    loadChildren: () => import("../../../components/icon/icon.module").then((m) => m.IconModule),
  },
  {
    path: "buttons",
    loadChildren: () => import("../../../components/buttons/buttons.module").then((m) => m.ButtonsModule),
  },
  {
    path: "charts",
    loadChildren: () => import("../../../components/charts/charts.module").then((m) => m.ChartsModule),
  },
  {
    path: "sample-page",
    loadChildren: () => import("../../../components/sample-page/sample-page.module").then((m) => m.SamplePageModule),
  },
  {
    path: "gallery",
    loadChildren: () => import("../../../components/all-gallery/all-gallery.module").then((m) => m.AllGalleryModule),
  },
  {
    path: "blog",
    loadChildren: () => import("../../../components/blog/blog.module").then((m) => m.BlogModule),
  },
  {
    path: "faq",
    loadChildren: () => import("../../../components/faq/faq.module").then((m) => m.FaqModule),
  },
  {
    path: "job-search",
    loadChildren: () => import("../../../components/job-search/job-search.module").then((m) => m.JobSearchModule),
  },
  {
    path: "learning",
    loadChildren: () => import("../../../components/learning/learning.module").then((m) => m.LearningModule),
  },
  {
    path: "maps",
    loadChildren: () => import("../../../components/maps/maps.module").then((m) => m.MapsModule),
  },
  {
    path: "editors",
    loadChildren: () => import("../../../components/editors/editors.module").then((m) => m.EditorsModule),
  },
  {
    path: "knowledgebases",
    loadChildren: () => import("../../../components/knowledgebases/knowledgebases.module").then((m) => m.KnowledgebasesModule),
  },
  {
    path: "support-ticket",
    loadChildren: () => import("../../../components/support-ticket/support-ticket.module").then((m) => m.SupportTicketModule),
  },
];

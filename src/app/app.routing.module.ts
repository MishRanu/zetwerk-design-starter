import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";
import { ButtonsComponent } from "./components/buttons/buttons.component";

export const APP_ROUTES: Routes = [
  {
    path: "buttons",
    component: ButtonsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { TaskComponent } from "./task/task.component";
import { TaskEditComponent } from "./task/edit/task-edit.component";


export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard",    component: DashboardComponent },
    { path: "statistics",   component: StatisticsComponent },
    { path: "task",         component: TaskComponent },
    { path: "task/:id",     component: TaskEditComponent },
    { path: "task/new",     component: TaskEditComponent }
];

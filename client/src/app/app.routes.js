"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("./dashboard/dashboard.component");
var statistics_component_1 = require("./statistics/statistics.component");
var task_component_1 = require("./task/task.component");
var task_edit_component_1 = require("./task/edit/task-edit.component");
exports.routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "statistics", component: statistics_component_1.StatisticsComponent },
    { path: "task", component: task_component_1.TaskComponent },
    { path: "task/:id", component: task_edit_component_1.TaskEditComponent },
    { path: "task/new", component: task_edit_component_1.TaskEditComponent }
];
//# sourceMappingURL=app.routes.js.map
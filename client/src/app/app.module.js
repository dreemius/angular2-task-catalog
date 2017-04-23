"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
//import {MdInputModule}    from '@angular/material';
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var statistics_component_1 = require("./statistics/statistics.component");
var task_component_1 = require("./task/task.component");
var task_edit_component_1 = require("./task/edit/task-edit.component");
var app_component_1 = require("./app.component");
var statistics_service_1 = require("./statistics/statistics.service");
var task_service_1 = require("./task/task.service");
var app_service_1 = require("./app.service");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            material_1.MaterialModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            router_1.RouterModule.forRoot(app_routes_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            task_component_1.TaskComponent,
            task_edit_component_1.TaskEditComponent,
            statistics_component_1.StatisticsComponent
        ],
        providers: [statistics_service_1.StatisticsService, task_service_1.TaskService, app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
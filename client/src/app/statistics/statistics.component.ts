import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StatisticsService } from "./statistics.service";
import { Statistics } from "../models/task.interface";

@Component({
    moduleId: module.id,
    /*selector: 'statistics',*/
    //template: 'this is just small template',
    templateUrl: 'statistics.component.html',
    interpolation: ['@@','@@'],
    //styles: [".mat-card-title{color:red}"],
    styleUrls: ["statistics.component.css"],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [StatisticsService]
})

export class StatisticsComponent implements OnInit {
    isLoaded: Boolean = false;
    statistics: Statistics;
    
    constructor (
        private statisticsService: StatisticsService
    ) { }

    ngOnInit() {
        this.statisticsService.getStatistics().subscribe(values => {
            this.statistics = values;
            this.isLoaded = true;
        },
        error => console.log(error))
     }
}
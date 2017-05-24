import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    value: any;
    options: NgDateRangePickerOptions;
    optionsModel: number[];
    dateOptions = [
        { id: 1, value: 'Day' },
        { id: 2, value: 'This Week' },
        { id: 3, value: 'This Month' },
        { id: 4, value: 'This Year' },
        { id: 5, value: 'Yesterday' },
        { id: 6, value: 'Last Week' },
        { id: 7, value: 'Last Month' },
        { id: 8, value: 'Last Year' }
    ];
    yardList: Array<any>;
    items = [
        { id: 1, name: 'Yard A' },
        { id: 2, name: 'Yard B' },
        { id: 3, name: 'Yard C' },
        { id: 4, name: 'Yard D' },
        { id: 5, name: 'Yard E' },
        { id: 6, name: 'Yard F' }
    ];
    myOptions: IMultiSelectOption[];
    mySettings: IMultiSelectSettings;
    myTexts: IMultiSelectTexts;
    constructor() {
        this.options = {
            theme: 'default',
            range: 'tw',
            dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'From', 'End'],
            dateFormat: 'yMd',
            outputFormat: 'DD/MM/YYYY',
            startOfWeek: 1
        };
    }

    ngOnInit() {
        this.myOptions = [
            { id: 1, name: 'Yard A' },
            { id: 2, name: 'Yard B' },
            { id: 3, name: 'Yard C' },
            { id: 4, name: 'Yard D' },
            { id: 5, name: 'Yard E' },
            { id: 6, name: 'Yard F' },
        ]
        // this.myOptions = [
        //     { id: 1, name: 'Yard A' },
        //     { id: 2, name: 'Yard B' },
        //     { id: 3, name: 'Yard C' },
        //     { id: 4, name: 'Yard D' },
        //     { id: 5, name: 'Yard E' },
        //     { id: 6, name: 'Yard F' },
        // ];

        // Settings configuration
        this.mySettings = {
            showCheckAll: true,
            showUncheckAll: true,
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            displayAllSelectedText: false
        };

        // Text configuration
        this.myTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            defaultTitle: 'Select Yard(s)',
            allSelected: 'All selected',
        };
    }

    onChange() {
        console.log(this.optionsModel);
    }

    onYardAdd(event: any) {

    }

    onYardRemove(event: any) {

    }

    ngOnDestroy() {

    }

}

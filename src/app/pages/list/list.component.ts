import { Component, OnInit } from '@angular/core';

Component({
    selector: 'list',
    templateUrl: 'app/pages/list/list.component.html',
    styleUrls: ['app/pages/list/list-common.css', 'app/pages/list/list.css']
})

export class ListComponent implements OnInit {

    public groceryList = [];

    public ngOnInit () {
        this.groceryList.push({ name: 'Apples' })
        this.groceryList.push({ name: 'Bananas' })
        this.groceryList.push({ name: 'Oranges' })
    }

 }
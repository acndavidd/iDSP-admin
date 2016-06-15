import {Injectable} from 'angular2/core';

@Injectable ()
export class SortService {
    
    sortby;

    sort(tableData: any, header:string) {
        // if sortby undefined, declare sortby as array
        // else insert to sortby array
        if(this.sortby === undefined) {
            this.sortby = [header];
        }else {
            this.sortby.push(header);
        }

        // define sort by asc or dsc
        if(this.sortby[header] === undefined) {
            this.sortby[header] = true;
        }else {
            this.sortby[header] = !this.sortby[header];
        }

        // start sorting
        if(this.sortby[header]) {
            tableData.sort((a, b) => {
                if(a[header] > b[header]) {
                    return 1;
                }else if(a[header] < b[header]) {
                    return -1;
                }else {
                    return 0;
                }
            });
        }else {
            tableData.sort((a, b) => {
                if(a[header] > b[header]) {
                    return -1;
                }else if(a[header] < b[header]) {
                    return 1;
                }else {
                    return 0;
                }
            });
        }
    }
}
export class SortService {
    
    sortby = {
        asc: true
    };

    sort(tableData: any, header:string) {
        if(this.sortby.asc) {
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
        this.sortby.asc = !this.sortby.asc;
    }
}
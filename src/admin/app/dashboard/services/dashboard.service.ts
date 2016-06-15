import {Injectable} from 'angular2/core';

@Injectable ()
export class DashboardService {
    vSalesOrderData = [
        {
            OrderNo: '12345',
            OrderCreationDate: '2016-05-18 13:00',
            DSPName: 'Surya Santoso',
            DSPMIN: '9999000001',
            RetailerName: 'Gloria Cell',
            TotalAmount: '2,000 ₱',
            TransferLoad: '500 ₱',
            PhysicalOrder: '1,500 ₱',
        },
        {
            OrderNo: '12346',
            OrderCreationDate: '2016-05-18 14:00',
            DSPName: 'Surya Santoso',
            DSPMIN: '9999000001',
            RetailerName: 'Bird Cell ',
            TotalAmount: '2,000 ₱',
            TransferLoad: '1,000 ₱',
            PhysicalOrder: '1,000 ₱',
        },
        {
            OrderNo: '12347',
            OrderCreationDate: '2016-05-18 15:00',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
            RetailerName: 'Rose Cell',
            TotalAmount: '5,500 ₱',
            TransferLoad: '2,000 ₱',
            PhysicalOrder: '3,500 ₱',
        },
        {
            OrderNo: '12348',
            OrderCreationDate: '2016-05-18 16:00',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
            RetailerName: 'ABC Cell ',
            TotalAmount: '4,000 ₱',
            TransferLoad: '1,500 ₱',
            PhysicalOrder: '2,500 ₱',
        },
        {
            OrderNo: '12349',
            OrderCreationDate: '2016-05-18 17:00',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
            RetailerName: 'DEF Cell ',
            TotalAmount: '4,500 ₱',
            TransferLoad: '2,500 ₱',
            PhysicalOrder: '1,500 ₱',
        }
    ];

    vCollectionAmountData = [
        {
            OrderNo: '12345',
            Date: '2016-05-18 13:00',
            Amount: 3000,
            RetailerName: 'Gloria Cell',
            RetailerSMARTMIN: '9999000014',
            RetailerSUNMIN: '9999000016',
            DSPName: 'Surya Santoso',
            DSPMIN: '9999000001',
        },
        {
            OrderNo: '12346',
            Date: '2016-05-18 14:00',
            Amount: 4000,
            RetailerName: 'Bird Cell ',
            RetailerSMARTMIN: '9999000018',
            RetailerSUNMIN: '9999000024',
            DSPName: 'Surya Santoso',
            DSPMIN: '9999000001',
        },
        {
            OrderNo: '12347',
            Date: '2016-05-18 15:00',
            Amount: 7000,
            RetailerName: 'Rose Cell',
            RetailerSMARTMIN: '9999000020',
            RetailerSUNMIN: '9999000027',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
        },
        {
            OrderNo: '12348',
            Date: '2016-05-18 16:00',
            Amount: 10000,
            RetailerName: 'ABC Cell ',
            RetailerSMARTMIN: '9999000022',
            RetailerSUNMIN: '9999000029',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
        },
        {
            OrderNo: '12349',
            Date: '2016-05-18 17:00',
            Amount: 2500,
            RetailerName: 'DEF Cell ',
            RetailerSMARTMIN: '9999000024',
            RetailerSUNMIN: '9999000030',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
        }
    ];

    getSalesOrderList() {
        return this.vSalesOrderData;
    }

    getCollectionAmountList() {
        return this.vCollectionAmountData;
    }
}
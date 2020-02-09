/* -------------------
- JSON input example (options):
    self.Options = {
        Title: '',
        Levels: 3, --- 3 max
        SubArrayName: '',
        OrderBy: '',
        SingularEntityName: '',
        Legend:{
                    FirstLevel: 'TYPE',
                    SecondLevel: 'SUBTYPE',
                    ThirdLevel: 'SUB-SUBTYPE'
                },
        Columns: [{
            Title: '',
            IsObject: false, --- if the property to show in an object
            ObjectName: ''
            Prefix: '',
            Property: '',
            PropertyToOrder: '',
            Order: '',
            Classes: ''
        }],
        ZeroLevelButtons: {
            Add: true
        }
        FirstLevelButtons: {
            Add: true,
            Edit: true,
            Enable: true
        },
        SecondLevelButtons: {
            Add: true,
            Edit: true,
            Enable: true
        },
        ThirdLevelButtons: {
            Edit: true,
            Enable: true
        }
    };

- Button functions:
    - addClickFunction({event: '', entity: '', parentEntity: '', index: ''})
    - editClickFunction({event: '', entity: '', parentEntity: '', index: ''})
    - enableClickFunction({entity: ''})
    - backClickFunction()

- Table promise  
    - promise

- Array to fill the table
    - entityArray
------------------- */

'use strict';

angular.
    module('multiLevelTable').
    component('multiLevelTable', {
        templateUrl: 'App/General/MultiLevelTable/multi-level-table.template.html',
        controller: ['$loader', 'moment', MultiLevelListController],
        bindings: {
            addClickFunction: '&',
            editClickFunction: '&',
            enableClickFunction: '&',
            backClickFunction: '&',
            promise: '<',
            options: '<',
            entityArray: '=',
            pagination: '<?',
            showPagination: '<?',
            showSearch: '<?'
        }
    });

function MultiLevelListController($loader, moment) {
    var self = this;

    self.moment = moment;
    self.$doCheck = function () {
        if (!self.pagination && self.entityArray) {
            self.pagination = {
                limit: 10,
                page: 1,
                limitOptions: [10, 20, 30],
                currentPage: 1,
                totalRecords: self.entityArray.length,
                pageSizeAsDefault: { name: '10', value: '10' }
            }

            self.totalPages = Math.ceil(self.pagination.totalRecords / self.pagination.limit);
        }
    }
    self.$onInit = function () {
        if (self.pagination && self.pagination.limit)
            self.totalPages = Math.ceil(self.pagination.totalRecords / self.pagination.limit);
    };
    self.previousPage = function () {
        self.pagination.currentPage--;
        self.pagination.pageFunction(self.pagination.currentPage);
        if (self.pagination && self.pagination.limit)
            self.totalPages = Math.ceil(self.pagination.totalRecords / self.pagination.limit);
    }

    self.nextPage = function () {
        self.pagination.currentPage++;
        self.pagination.pageFunction(self.pagination.currentPage);
        if (self.pagination && self.pagination.limit)
            self.totalPages = Math.ceil(self.pagination.totalRecords / self.pagination.limit);
    }
    self.setPage = function (obj) {
        self.pagination.currentPage = obj;
        if (self.pagination && self.pagination.limit)
            self.totalPages = Math.ceil(self.pagination.totalRecords / self.pagination.limit);
    }
    
    /* --- VARIABLES --- */
    /* --- ./VARIABLES --- */

    /* PROCEDURES */
    /* ./PROCEDURES */
};
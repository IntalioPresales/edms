'use strict';
// Class definition

var KTDatatableDataLocalDemo = function () {
    // Private functions

    // demo initializer
    var demo = function () {
        var documents = [
            { "RecordID": 1, "OrderID": "0374-5070", "document": "Floor 1.dwg", "Country": "Lebanon", "Author": "Shadi Zaher", "Project": "Big Dig", "ShipName": "Rempel Inc", "ShipAddress": "60310 Schiller Center", "CompanyEmail": "cdodman0@wsj.com", "CompanyAgent": "Cordi Dodman", "CompanyName": "Kris-Wehner", "Currency": "CNY", "Notes": "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus", "Department": "Kids", "Website": "tripadvisor.com", "Latitude": 39.952319, "Longitude": 119.598195, "ShipDate": "8/27/2017", "PaymentDate": "2016-09-15 22:18:06", "TimeZone": "Asia/Chongqing", "TotalPayment": "$336309.10", "Status": 6, "Type": 2, "Actions": null },
            { "RecordID": 2, "OrderID": "63868-257", "document": "Floor 2.dwg", "Country": "Germany", "Author": "Mazen Farah", "Project": "Lebanon Routes", "ShipName": "Muller, Leannon and McKenzie", "ShipAddress": "26734 Mitchell Drive", "CompanyEmail": "kscritch1@google.es", "CompanyAgent": "Katrinka Scritch", "CompanyName": "Stanton, Friesen and Grant", "Currency": "PHP", "Notes": "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur", "Department": "Tools", "Website": "elpais.com", "Latitude": 13.8503992, "Longitude": 123.7585154, "ShipDate": "9/3/2017", "PaymentDate": "2016-09-05 16:27:07", "TimeZone": "Asia/Manila", "TotalPayment": "$786612.37", "Status": 1, "Type": 2, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "document": "Roof.dwg", "Country": "Lebanon", "Author": "Hasan Fomyat", "Project": "Metro", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "document": "Bed Rooms.dwg", "Country": "UAE", "Author": "Elida Sharaf", "Project": "Residential buildings", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "document": "Policies.doc", "Country": "tunisia", "Author": "Samer Mando", "Project": "Airport", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "document": "Expenses.xlx", "Country": "France", "Author": "Steve Karam", "Project": "Airport", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null }
        ]

        var projects = [
            { "RecordID": 1, "OrderID": "0374-5070", "document": "Floor 1.dwg", "Country": "Lebanon", "Author": "Shadi Zaher", "Project": "Big Dig", "ShipName": "Rempel Inc", "ShipAddress": "60310 Schiller Center", "CompanyEmail": "cdodman0@wsj.com", "CompanyAgent": "Cordi Dodman", "CompanyName": "Kris-Wehner", "Currency": "CNY", "Notes": "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus", "Department": "Kids", "Website": "tripadvisor.com", "Latitude": 39.952319, "Longitude": 119.598195, "ShipDate": "8/27/2017", "PaymentDate": "2016-09-15 22:18:06", "TimeZone": "Asia/Chongqing", "TotalPayment": "$336309.10", "Status": 6, "Type": 2, "Actions": null },
            { "RecordID": 2, "OrderID": "63868-257", "document": "Floor 2.dwg", "Country": "Germany", "Author": "Mazen Farah", "Project": "Lebanon Routes", "ShipName": "Muller, Leannon and McKenzie", "ShipAddress": "26734 Mitchell Drive", "CompanyEmail": "kscritch1@google.es", "CompanyAgent": "Katrinka Scritch", "CompanyName": "Stanton, Friesen and Grant", "Currency": "PHP", "Notes": "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur", "Department": "Tools", "Website": "elpais.com", "Latitude": 13.8503992, "Longitude": 123.7585154, "ShipDate": "9/3/2017", "PaymentDate": "2016-09-05 16:27:07", "TimeZone": "Asia/Manila", "TotalPayment": "$786612.37", "Status": 1, "Type": 2, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "document": "Roof.dwg", "Country": "Lebanon", "Author": "Hasan Fomyat", "Project": "Metro", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "document": "Bed Rooms.dwg", "Country": "UAE", "Author": "Elida Sharaf", "Project": "Residential buildings", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "document": "Policies.doc", "Country": "tunisia", "Author": "Samer Mando", "Project": "Airport", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "document": "Expenses.xlx", "Country": "France", "Author": "Steve Karam", "Project": "Airport", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null }
        ]


        var employees = [
            { "RecordID": 1, "OrderID": "0374-5070",  "name": "Sebastian West", "occupation": "Agricultural Engineer",  "Country": "Lebanon", "Author": "Shadi Zaher", "Project": "Big Dig", "ShipName": "Rempel Inc", "ShipAddress": "60310 Schiller Center", "CompanyEmail": "cdodman0@wsj.com", "CompanyAgent": "Cordi Dodman", "CompanyName": "Kris-Wehner", "Currency": "CNY", "Notes": "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus", "Department": "Kids", "Website": "tripadvisor.com", "Latitude": 39.952319, "Longitude": 119.598195, "ShipDate": "8/27/2017", "PaymentDate": "2016-09-15 22:18:06", "TimeZone": "Asia/Chongqing", "TotalPayment": "$336309.10", "Status": 6, "Type": 2, "Actions": null },
            { "RecordID": 2, "OrderID": "63868-257",  "name": "Pansy Hardy",    "occupation": "Architects",     "Country": "Germany", "Author": "Mazen Farah", "Project": "Lebanon Routes", "ShipName": "Muller, Leannon and McKenzie", "ShipAddress": "26734 Mitchell Drive", "CompanyEmail": "kscritch1@google.es", "CompanyAgent": "Katrinka Scritch", "CompanyName": "Stanton, Friesen and Grant", "Currency": "PHP", "Notes": "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur", "Department": "Tools", "Website": "elpais.com", "Latitude": 13.8503992, "Longitude": 123.7585154, "ShipDate": "9/3/2017", "PaymentDate": "2016-09-05 16:27:07", "TimeZone": "Asia/Manila", "TotalPayment": "$786612.37", "Status": 1, "Type": 2, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "name": "Darcy Collins",  "occupation": "Civil Engineering Technician",   "Country": "Lebanon", "Author": "Hasan Fomyat", "Project": "Metro", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "name": "Adrian Burns ",  "occupation": "Civil Engineers",   "Country": "UAE", "Author": "Elida Sharaf", "Project": "Residential buildings", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "name": "Darren Marrow",  "occupation": "Landscape Architect",   "Country": "tunisia", "Author": "Samer Mando", "Project": "Airport", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "name": "Simona Oliver",  "occupation": "Petroleum Engineer",   "Country": "France", "Author": "Steve Karam", "Project": "Airport", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null }
        ]

        var events = [
            { "RecordID": 1, "OrderID": "0374-5070", "name": "Call Contractor", "Country": "Lebanon", "Author": "Shadi Zaher", "Project": "Big Dig", "ShipName": "Rempel Inc", "ShipAddress": "60310 Schiller Center", "CompanyEmail": "cdodman0@wsj.com", "CompanyAgent": "Cordi Dodman", "CompanyName": "Kris-Wehner", "Currency": "CNY", "Notes": "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus", "Department": "Kids", "Website": "tripadvisor.com", "Latitude": 39.952319, "Longitude": 119.598195, "ShipDate": "8/27/2017", "PaymentDate": "2016-09-15 22:18:06", "TimeZone": "Asia/Chongqing", "TotalPayment": "$336309.10", "Status": 6, "Type": 2, "Actions": null },
            { "RecordID": 2, "OrderID": "63868-257", "name": "Meeting", "Country": "Germany", "Author": "Mazen Farah", "Project": "Lebanon Routes", "ShipName": "Muller, Leannon and McKenzie", "ShipAddress": "26734 Mitchell Drive", "CompanyEmail": "kscritch1@google.es", "CompanyAgent": "Katrinka Scritch", "CompanyName": "Stanton, Friesen and Grant", "Currency": "PHP", "Notes": "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur", "Department": "Tools", "Website": "elpais.com", "Latitude": 13.8503992, "Longitude": 123.7585154, "ShipDate": "9/3/2017", "PaymentDate": "2016-09-05 16:27:07", "TimeZone": "Asia/Manila", "TotalPayment": "$786612.37", "Status": 1, "Type": 2, "Actions": null },
            { "RecordID": 3, "OrderID": "49288-0815", "name": "Inspection", "Country": "Lebanon", "Author": "Hasan Fomyat", "Project": "Metro", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 4, "OrderID": "49288-0815", "name": "Put the roof on", "Country": "UAE", "Author": "Elida Sharaf", "Project": "Residential buildings", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 5, "OrderID": "49288-0815", "name": "Fit insulation", "Country": "tunisia", "Author": "Samer Mando", "Project": "Airport", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null },
            { "RecordID": 6, "OrderID": "49288-0815", "name": "Mount the windows", "Country": "France", "Author": "Steve Karam", "Project": "Airport", "ShipName": "Fahey, Rosenbaum and Leannon", "ShipAddress": "9 Daystar Center", "CompanyEmail": "neberlein2@google.ca", "CompanyAgent": "Nevin Eberlein", "CompanyName": "Cartwright, Hilpert and Hartmann", "Currency": "PYG", "Notes": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris", "Department": "Electronics", "Website": "bing.com", "Latitude": -24.4436327, "Longitude": -56.9014072, "ShipDate": "4/23/2016", "PaymentDate": "2016-01-01 08:03:07", "TimeZone": "America/Asuncion", "TotalPayment": "$216102.85", "Status": 5, "Type": 1, "Actions": null }
        ]



        var datatable = $('#kt_datatable_events').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: events,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [
                {
                    field: 'OrderID',
                    title: 'ID',
                }, {
                    field: 'name',
                    title: 'Event',
                    template: function (row) {
                        return row.name;
                    },
                }, {
                    field: 'ShipDate',
                    title: 'Date',
                    type: 'date',
                    format: 'MM/DD/YYYY',
                },

                {
                    field: 'Author',
                    title: 'Author',
                },
                {
                    field: 'Country',
                    title: 'Location',
                    template: function (row) {
                        return row.Country;
                    },
                }, {
                    field: 'Actions',
                    title: 'Actions',
                    sortable: false,
                    width: 125,
                    overflow: 'visible',
                    autoHide: false,
                    template: function () {
                        return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
	                                <span class="svg-icon svg-icon-md">\
	                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                            <rect x="0" y="0" width="24" height="24"/>\
	                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
	                                        </g>\
	                                    </svg>\
	                                </span>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
	                                <ul class="navi flex-column navi-hover py-2">\
	                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
	                                        Choose an action:\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-print"></i></span>\
	                                            <span class="navi-text">Print</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-copy"></i></span>\
	                                            <span class="navi-text">Copy</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\
	                                            <span class="navi-text">Excel</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\
	                                            <span class="navi-text">CSV</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\
	                                            <span class="navi-text">PDF</span>\
	                                        </a>\
	                                    </li>\
	                                </ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
							</a>\
						';
                    },
                }],
        });

        var datatable_emp = $('#kt_datatable_employees').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: employees,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [
                //     {
                //     field: 'OrderID',
                //     title: 'ID',
                // }, 
                {
                    field: 'name',
                    title: 'Name',
                    // overflow: 'visible',
                    template: function (data) {
                        var number = KTUtil.getRandomInt(1, 14);
                        var user_img = '100_' + number + '.jpg';

                        var output = '';
                        if (number > 8) {
                            output = '<div class="d-flex align-items-center" style="">\
                            <div class="symbol symbol-40 symbol-sm flex-shrink-0">\
                                <img class="" src="assets/media/users/' + user_img + '" alt="photo">\
                            </div>\
                            <div class="ml-4">\
                                <div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + data.name + '</div>\
                                <a href="#" class="text-muted font-weight-bold text-hover-primary">' + data.CompanyEmail + '</a>\
                            </div>\
                        </div>';
                        }
                        else {
                            var stateNo = KTUtil.getRandomInt(0, 7);
                            var states = [
                                'success',
                                'primary',
                                'danger',
                                'success',
                                'warning',
                                'dark',
                                'primary',
                                'info'];
                            var state = states[stateNo];

                            output = '<div class="d-flex align-items-center" style="">\
                            <div class="symbol symbol-40 symbol-light-'+ state + ' flex-shrink-0">\
                                <span class="symbol-label font-size-h4 font-weight-bold">' + data.name.substring(0, 1) + '</span>\
                            </div>\
                            <div class="ml-4">\
                                <div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + data.name + '</div>\
                                <a href="#" class="text-muted font-weight-bold text-hover-primary">' + data.CompanyEmail + '</a>\
                            </div>\
                        </div>';
                        }

                        return output;
                    },
                }, 
                {
                    field: 'ShipDate',
                    title: 'Created',
                    type: 'date',
                    format: 'MM/DD/YYYY',
                }, {
                    field: 'occupation',
                    title: 'Occupation',
                    template: function (row) {
                        return row.occupation;
                    },
                },
                {
                    field: 'Country',
                    title: 'Country',
                    template: function (row) {
                        return row.Country;
                    },
                }, {
                    field: 'Status',
                    title: 'Status',
                    // callback function support for column rendering
                    template: function (row) {
                        var status = {
                            1: {
                                'title': 'Activated',
                                'class': ' label-light-primary'
                            },
                            2: {
                                'title': 'Deactivated',
                                'class': ' label-light-info'
                            },
                            3: {
                                'title': 'Blacklisted',
                                'class': ' label-light-danger'
                            },
                            4: {
                                'title': 'Activated',
                                'class': ' label-light-primary'
                            },
                            5: {
                                'title': 'Activated',
                                'class': ' label-light-primary'
                            },
                            6: {
                                'title': 'Deactivated',
                                'class': ' label-light-info'
                            },
                            7: {
                                'title': 'Blacklisted',
                                'class': ' label-light-danger'
                            },
                        };
                        return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                    },
                }, {
                    field: 'Actions',
                    title: 'Actions',
                    sortable: false,
                    width: 125,
                    overflow: 'visible',
                    autoHide: false,
                    template: function () {
                        return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
	                                <span class="svg-icon svg-icon-md">\
	                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                            <rect x="0" y="0" width="24" height="24"/>\
	                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
	                                        </g>\
	                                    </svg>\
	                                </span>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
	                                <ul class="navi flex-column navi-hover py-2">\
	                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
	                                        Choose an action:\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-print"></i></span>\
	                                            <span class="navi-text">Print</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-copy"></i></span>\
	                                            <span class="navi-text">Copy</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\
	                                            <span class="navi-text">Excel</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\
	                                            <span class="navi-text">CSV</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\
	                                            <span class="navi-text">PDF</span>\
	                                        </a>\
	                                    </li>\
	                                </ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
							</a>\
						';
                    },
                }],
        });


        var datatable_doc = $('#kt_datatable_documents').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: documents,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'RecordID',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                selector: {
                    class: ''
                },
                textAlign: 'center',
            }, {
                field: 'OrderID',
                title: 'ID',
            }, {
                field: 'document',
                title: 'Docuemnt',
                template: function (row) {
                    return row.document;
                },
            }, {
                field: 'ShipDate',
                title: 'Created',
                type: 'date',
                format: 'MM/DD/YYYY',
            }, {
                field: 'Author',
                title: 'Author',
            },
            {
                field: 'Country',
                title: 'Country',
                template: function (row) {
                    return row.Country;
                },
            },
            {
                field: 'Project',
                title: 'Project',
                template: function (row) {
                    return row.Project;
                },
            },

            // {
            //     field: 'Status',
            //     title: 'Status',
            //     // callback function support for column rendering
            //     template: function (row) {
            //         var status = {
            //             1: {
            //                 'title': 'Pending',
            //                 'class': ' label-light-warning'
            //             },
            //             2: {
            //                 'title': 'Delivered',
            //                 'class': ' label-light-success'
            //             },
            //             3: {
            //                 'title': 'Canceled',
            //                 'class': ' label-light-danger'
            //             },
            //             4: {
            //                 'title': 'Completed',
            //                 'class': ' label-light-info'
            //             },
            //             5: {
            //                 'title': 'In-Progress',
            //                 'class': ' label-light-primary'
            //             },
            //             6: {
            //                 'title': 'Completed',
            //                 'class': ' label-light-success'
            //             },
            //             7: {
            //                 'title': 'Delivered',
            //                 'class': ' label-light-success'
            //             },
            //         };
            //         return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
            //     },
            // },
            {
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function () {
                    return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
	                                <span class="svg-icon svg-icon-md">\
	                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                            <rect x="0" y="0" width="24" height="24"/>\
	                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
	                                        </g>\
	                                    </svg>\
	                                </span>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
	                                <ul class="navi flex-column navi-hover py-2">\
	                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
	                                        Choose an action:\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-print"></i></span>\
	                                            <span class="navi-text">Print</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-copy"></i></span>\
	                                            <span class="navi-text">Copy</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\
	                                            <span class="navi-text">Excel</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\
	                                            <span class="navi-text">CSV</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\
	                                            <span class="navi-text">PDF</span>\
	                                        </a>\
	                                    </li>\
	                                </ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
							</a>\
						';
                },
            }],
        });


        var datatable_proj = $('#kt_datatable_projects').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: projects,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'OrderID',
                title: 'ID',
            },
            {
                field: 'Project',
                title: 'Project',
                template: function (row) {
                    return row.Project;
                },
            },
            {
                field: 'ShipDate',
                title: 'Created',
                type: 'date',
                format: 'MM/DD/YYYY',
            }, {
                field: 'Author',
                title: 'Author',
            },
            {
                field: 'Country',
                title: 'Country',
                template: function (row) {
                    return row.Country;
                },
            },

            {
                field: 'Status',
                title: 'Status',
                // callback function support for column rendering
                template: function (row) {
                    var status = {
                        1: {
                            'title': 'Pending',
                            'class': ' label-light-warning'
                        },
                        2: {
                            'title': 'Delivered',
                            'class': ' label-light-success'
                        },
                        3: {
                            'title': 'Canceled',
                            'class': ' label-light-danger'
                        },
                        4: {
                            'title': 'Completed',
                            'class': ' label-light-info'
                        },
                        5: {
                            'title': 'In-Progress',
                            'class': ' label-light-primary'
                        },
                        6: {
                            'title': 'Completed',
                            'class': ' label-light-success'
                        },
                        7: {
                            'title': 'Delivered',
                            'class': ' label-light-success'
                        },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
            },
            {
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function () {
                    return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
	                                <span class="svg-icon svg-icon-md">\
	                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                            <rect x="0" y="0" width="24" height="24"/>\
	                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
	                                        </g>\
	                                    </svg>\
	                                </span>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
	                                <ul class="navi flex-column navi-hover py-2">\
	                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
	                                        Choose an action:\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-print"></i></span>\
	                                            <span class="navi-text">Print</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-copy"></i></span>\
	                                            <span class="navi-text">Copy</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\
	                                            <span class="navi-text">Excel</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\
	                                            <span class="navi-text">CSV</span>\
	                                        </a>\
	                                    </li>\
	                                    <li class="navi-item">\
	                                        <a href="#" class="navi-link">\
	                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\
	                                            <span class="navi-text">PDF</span>\
	                                        </a>\
	                                    </li>\
	                                </ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\
	                            <span class="svg-icon svg-icon-md">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
							</a>\
						';
                },
            }],
        });



        $('#kt_datatable_search_status').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_type').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Type');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();

        $(".nav-link").click(function () {
            datatable_proj.reload()
            datatable_doc.reload()
            datatable_emp.reload()
            datatable.reload()
        })

        $("#search_btn").click(function () {
            datatable_proj.reload()
            datatable_doc.reload()
            datatable_emp.reload()
            datatable.reload()
        })
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            demo();
        },
    };
}();



jQuery(document).ready(function () {
    KTDatatableDataLocalDemo.init();
});


d3.queue()
.defer(d3.csv, "https://raw.githubusercontent.com/sitrucp/canada_google_mobility_report_data/master/google_mobility_Canada_data.csv")
.await(function(error, cases, mortalities, hr_lookup) {
    //everthing else below is in d3.queue scope

    // date_full,province,category,value,date

    // summarize cases and mortalities counts overall
    var case_total = cases.length;
    var mort_total = mortalities.length;
    var div = document.getElementById('header');
    div.innerHTML += 'Canada total: cases: ' + case_total.toLocaleString() + ' mortalities: ' + mort_total.toLocaleString();


//CREATE TABLE=================================
    // generate data table below map
    // sort table first
    covid_data.sort((a,b) => a.province.localeCompare(b.province) || a.authority_report_health_region.localeCompare(b.authority_report_health_region));

    //let table_data = covid_data;
    let table_data = covid_data.map(x => ({ 
        "Province": x.province,
        "Health Authority Region Name": x.authority_report_health_region,
        "Statscan Region Name": x.statscan_arcgis_health_region,
        "Case Count": x.case_count,
        "Mortality Count": x.mort_count
    }));
    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }
        function generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
    let table = document.querySelector("table");
    let data = Object.keys(table_data[0]);
    generateTableHead(table, data);
    generateTable(table, table_data);

});
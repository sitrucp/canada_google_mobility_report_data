<strong>Canada Provinces & Territories Google Community Mobility Report Data Visualizations</strong>

Google is providing this location history visit & length of stay change compared to baseline  data for covid-19 related analysis as proxy to recommended "stay at home" adherence. As of April 18, the data availble spans period from Feb 15 to Apr 11 2020. 

Data is available as csv file format at <a href="https://www.google.com/covid19/mobility/">Google Community Mobility Report webpage</a>. 

Users can download csv file or use page feature to filter for specific country or country sub regions eg state or provinces, etc.

The csv data was transformed using Excel Power Query. The Excel files and their M Code are provided here. The Excel file has Pivot Table and Chart combos that can be used to slice and dice global data by date, country, sub region 1 & 2 and category. Another ivot Table and Chart is setup as a heatmap visualization of values by date for each province and territory.

In addition, a separate D3.js heatmap visualization was created for 12 Canadian Provinces and Territories was created using slightly modified code from <a href="https://github.com/datasciencecampus/google-mobility-reports-data">https://github.com/datasciencecampus/google-mobility-reports-data</a> that datasciencecampus used to create this <a href="https://onsvisual.github.io/google-mobility-map/heatmap/">heatmap comparing categories of 6 countries</a>.

The D3.js visualization can be seen <a href=" https://sitrucp.github.io/canada_google_mobility_report_data/">here</a>

Screenshot of D3.js visualization
![Alt text](/screenshot_heatmap.jpg?raw=true "Screenshot of D3.js heatmap")

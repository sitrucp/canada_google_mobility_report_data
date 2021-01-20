# Canada Provinces & Territories Google Community Mobility Report Data Visualizations

Google is providing this location history visit & length of stay change compared to baseline  data for covid-19 related analysis as proxy to recommended "stay at home" adherence. As of April 18, the data availble spans period from Feb 15 to Apr 11 2020. 

Data is available as csv file format at <a href="https://www.google.com/covid19/mobility/">Google Community Mobility Report webpage</a>. Google provides a csv file with global data or site visitor can filter for specific country or country sub regions eg state or provinces, etc and download resulting PDF format.

## Excel / Power Query

For this heatmap visualizaiton the global csv data was transformed using Excel Power Query. The Excel files and Power Query M Code are in the repository. The Excel file has two Pivot Table and Chart combos:

1) One to use for analytical purposes to slice and dice global data by date, country, sub region 1 & 2 and category.

2) Another provides data for heatmap visualization of changes by date for each province and territory.

**Screenshot of Excel visualization**

![Alt text](/Excel_screenshot_heatmap.jpg?raw=true)

## D3.js

In addition a separate analysis presents changes by date for each of the 12 Canadian Provinces and Territories in a <a href="https://sitrucp.github.io/covid_canada_mobility_google">https://sitrucp.github.io/covid_canada_mobility_google</a>.

The D3.js visualization was created using code from <a href="https://github.com/ONSvisual/google-mobility-map">ONSvisual - https://github.com/ONSvisual/google-mobility-map</a>.

**Screenshot of D3.js visualization**

![Alt text](/D3js_screenshot_heatmap.jpg?raw=true)



<strong>Google Community Mobility Report - Canada Province & Territories</strong>
Location history visit & length of stay change compared to baseline 

This data was obtained from <a href="https://www.google.com/covid19/mobility/">Google Community Mobility Report</a> webpage. Page was set to filter for "Canada" which results in PDF file. PDF with summary section for all of Canada followed by separate sections for each Canadian province and territory.

The entire PDF text was copied (eg ctrl-a on PDF page) and pasted (ctrl-v) into blank text file. All lines of text, except those relevant to each Canadian province and territory, were deleted . 

The resulting text file was data source for Excel Power Query data connection that uses a variety of Power Query transformations to render text into tabular format including columns for date of report, province/territory name, and mobility report category and value. Power Query M code has been copied out to text file from the Excel file's Power Query.

This transformed data was then used to generate Excel Pivot Table and Charts to visualize mobility report data by province/territory and report date.

As new Canada Google Community Mobility Reports are available, additional report text can be appended to the existing data to do trend and comparative analysis.

Example PDF text copied and pasted for Alberta. The Power Query transformation moved rows to columns and filled down province and category names to create complete dataset:

Alberta
Retail & recreation
-57% compared to baseline
Grocery & pharmacy
-33% compared to baseline
Parks
-51% compared to baseline
Transit stations
-69% compared to baseline
Workplace
-43% compared to baseline
Residential
+14% compared to baseline
British Columbia
Retail & recreation
-53% compared to baseline
Grocery & pharmacy
-30% compared to baseline
Parks
+31% compared to baseline
Transit stations
-61% compared to baseline
Workplace
-47% compared to baseline
Residential
+13% compared to baseline
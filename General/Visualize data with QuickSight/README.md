<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Visualize data with QuickSight

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-analytics-quicksight)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-analytics-quicksight_6c7f7ef0)

---

## Introducing Today's Project!

In this project, I will demonstrate how to use Amazon QuickSight to anaylze data. I'm doing this project to learn cloud data services for data analytics.

### Tools and concepts

Services I used were Amazon S3 and Amazon QuickSight. Key concepts I learnt were manifest.json , data visualization techniques using filters and how to perform a data refresh.

### Project reflection

This project took me approximately two hours to complete. The most challenging part was to make sure to update your manifest.json file when you want to do a data refresh. The most rewarding part of the project was to generate the pdf with the dashboards and visualize all the results.

After this project, I plan to work on security projects next.

---

## Upload project files into S3

S3 is used in this project to store two files, which are 'netflix_tiles.csv' which contains information about netflix movies and shows and a 'manifest.json' file which contains info about the structure and formatting of the CSV file.

I edited the manifest.json file by adding my S3 bucket address. It’s important to edit this file because it will tell QuickSight where to find the files to anaylze. 

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-analytics-quicksight_3c3cd85a)

---

## Create QuickSight account

Creating a QuickSight account costs 0 $ for a 30 day trial but make sure to uncheck the add on "Add Pixel Perfect Reports" otherwise you will be charged instantly.

Creating an account took me about 5 minutes including adding S3 bucket permissions.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-analytics-quicksight_f4ab4214)

---

## Download the Dataset

I connected the S3 bucket to QuickSight by visiting the Datasets page. There were so many options for data sources we could connect to !

The manifest.json file was important in this step because it contained the S3 URI and would tell QuickSight how to understand the data and show it in charts and graphs.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-analytics-quicksight_6f874996)

---

## My first visualization

To create visualizations on QuickSight, I clicked on data fields or labels eg 'release years' and QuickSights will create the type of visuals we want. We can also drag data lables into section like 'group ' to determine how the graph should treat the variable.

The chart displays a breakdown of the top 20 years based on the number of releases, using the Release_Year field from the dataset. It highlights which years had the highest volume of movie and show releases, providing insight into trends over time.

I created this graph by dragging and dropping the 'release_year' data label and changed the type of chart as a donut chart.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-analytics-quicksight_aff3aad7)

---

## Using filters

Filters are useful for  narrowing down our data to the subset of data we are interested in. 

This visualization shows a breakdown of TV shows and movies that fall under one of the following categories: "Action & Adventure," "Thrillers," and "TV Comedies." A filter was applied to include only titles released in 2015 or later, providing a focused view of recent content trends within these popular genres.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-analytics-quicksight_c32248c5)

---

## Setting up a dashboard

As a finishing touch, I updated the titles of the charts in my dashboard so they are easily readible.

Did you know you could export your dashboard as PDFs too? I did this by clicking the Publish icon and generate PDF.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-analytics-quicksight_6c7f7ef0)

---

## Refreshing source data

In this extension of the project, I downloaded a new version of the dataset to replace the original, which contained a significant number of missing values in the country of origin field. Analyzing incomplete data can lead to inaccurate insights and biased conclusions, so working with a cleaner dataset ensures more reliable and meaningful analysis.

Once I downloaded new data, I had to update my S3 bucket because QuickSight needed access to the new data. I also uploaded a new manifest.json file that it pointed to the new dataset.

I initally couldn't see my updated data in QuickSight, so I had to visit the dataset page and perform a full refresh of my data.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-analytics-quicksight_86415f4e3)

---

---

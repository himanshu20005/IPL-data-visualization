# IPL Data Visualization

## ABOUT THE PROJECT

This application is designed to **graphically represent** the data from past IPL matches. The data set is taken from [kaggle](https://www.kaggle.com/saurav9786/indian-premier-league-match-analysis). The displayed result contains the win count on the Dashboard number of times a team has won from 2008 to 2017.
It includes date wise details on teams played, location, win, Player of the match etc.


To make this application, Below **libraries** are used :
- react-chartjs-2 : to display the graphical components
- react-bootstrap : For adding react-bootstrap cards to display match details
- react-fontawesome : For adding icons
- react-router-dom : For routing
- react-router-bootstrap : For routing

**Extra components**
- **Google sheets API** v3 is used to retrieve the IPL data which is taken from `Kaggle` and stored in `Google Spreadsheet`.
- **Caching** is implemented to temporarily store the retrieved data in `browser's local storage`. This cached data resets in `48 hours`.
- The results of ongoing IPL 2020 matches are displayed using **iframe** under View Yearly Result secion. The iframe reference is taken from [crictimes](https://www.crictimes.org)

From the **Bonus section**, the below features are created -
- The application is somewhat responsive
- The application is a progressive web app
	
Here is the **GitHub repository** : [IPL-data-visualization](https://github.com/himanshu20005/IPL-data-visualization/)

The application is **deployed** on vercel and the link is [https://ipl-data-visualization.vercel.app/](https://ipl-data-visualization.vercel.app/) 

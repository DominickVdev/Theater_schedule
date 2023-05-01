"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author:Dominick Vera 
   Date: 04/10/2023 

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// Set the Date displayed in the Calendar
let thisDay = new Date();

// Write the Calendar table to the element with the id of the "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Definition of the function that generates the calendar table 
function createCalendar(calDate) {
   let calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate)
   calendarHTML += "</table>";
   // return statement that hands dat off to the script
   return calendarHTML;
} // end of createCalendar()

// Definition of the Function to write the Calendar caption 
function calCaption(calDate) {
    //monthName array contains the list of month names
   let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   // Determine the numeric value of the current Month 
   let thisMonth = calDate.getMonth();

   // Determine the Current Year of the date given
   let thisYear = calDate.getFullYear();

   // Use those variables to Write the table Caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "<caption>";
} // end of calCaption() function

// Definition of a Function to write a table row of weekday abbreviations
function calWeekdayRow() {
   // Array of weekday abbreviations
   let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   let rowHTML = "<tr>";

   // look through the dayName array
   for (let i = 0; i < dayName.length; i++) { rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
   } // end of loop
   rowHTML += "</tr>";
   // send the rowHTML data that this functions built back to the rest of the script 
   return rowHTML;
}  // end of the calWeekdayRow() function

// Definition of the Function to calculate the number of days in the month  
function daysInMonth(calDate) { 
   // Array of days in each month 
   let dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

   // Extract the four digit year and month values 
   let thisYear = calDate.getFullYear(); 
   let thisMonth = calDate.getMonth(); 

   // revise the days in February for leap years 
   if(thisYear % 4 === 0){
      if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
         dayCount[1] = 29;
      }   
   }
   // Return the number of days for the current month
      return dayCount[thisMonth]; 
} // End of the DdaysInMonth() function 

// Definition of the Function to write table rows for each day of the month 
function calDays(calDate) {
   // Determine the starting dy of the month
   let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   let weekDay = day.getDay();
   // Write blank cells preceding the starting day
   let htmlCode = "<tr>";
   for (let i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }
   // write cells for each day of the month 
   let totalDays = daysInMonth(calDate);
   let highlightDay = calDate.getDate();

   for (let i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();
      // the loop must decide to end the <tr> when it's saturday and start a new <tr> 
      if (weekDay === 0) htmlCode += "<tr>";
     
      if (i === highlightDay) {
         htmlCode += "<td  class='calendar_dates' id ='calendar_today'>" + i + dayEvent[i] + "</td>";
      } else {
         htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
      }
      if (weekDay === 6) htmlCode += "</tr>";
   }
return htmlCode;
}
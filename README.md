# YouTube-Data-into-Google-Sheets
YouTube videos views/likes/comments count directly into google sheets with the help of YouTube API &amp; sheets app script.

# YouTube Video Statistics to Google Sheets

This script retrieves YouTube video statistics (views, likes, comments, and title) and writes them to a Google Sheet. It uses the YouTube Data API and the Google Sheets API to accomplish this. It expects the video Id's in column A of the active sheet.

## Prerequisites

•A Google account

•A Google Developers Console project with the YouTube Data API and Google Sheets API enabled

•A Google Sheet with a list of video Id's in column A

•A valid API Key

## Getting Started

1.Create a project in the Google Developers Console and enable the YouTube Data API and Google Sheets API.

2.Create credentials (e.g. API key) to access the APIs.

3.Add your video Id's in column A of the google sheet

4.In the Google Sheet, Go to the menu Tools -> Script editor

5.Replace the API_KEY in the code with your own API key

6.Save the code

7.In the Script editor, Go to the menu Run -> getYoutube to run the function

## Direct Method without using private API key 

•The function will write the title of the video in column B, view count in column C, like count in column D and comment count in column E for all the videos whose Id's are present in column A.

This script uses the YouTube Data API to retrieve the statistics for a specific video, specified by the videoId variable. It uses the map function to extract the video Id's from the active sheet, then makes a GET request to the API and then parses the response to retrieve the statistics. Finally, it writes the title of the video in column B, view count in column C, like count in column D and comment count in column E for all the videos whose Id's are present in column A.

Keep in mind that the YouTube Data API has a quota limit, so you may need to keep an eye on your usage to avoid exceeding the limit.

(Special thanks to Aryan Irani for this direct method) 

### By starring this repository, you'll be able to stay updated on any new features and improvements we make, and you'll also be showing your support for our project. We appreciate your interest and hope you find our tool useful. 

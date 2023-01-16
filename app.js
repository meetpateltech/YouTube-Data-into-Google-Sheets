function transferStatistics() {
  // Step 1: Retrieve the statistics from the YouTube Data API
  var videoId = "VIDEO_ID"; // replace with the video ID
  var apiKey = "API_KEY"; // replace with your API key
  var url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoId + "&key=" + apiKey + "&part=statistics";
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  var statistics = data.items[0].statistics;
  
  // Step 2: Update the sheet with the retrieved statistics
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([videoId, statistics.viewCount, statistics.likeCount, statistics.commentCount]);
}

function getYoutube() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange(2, 1, sheet.getLastRow() - 1);
  var vids = range.getValues();
  
  var maxIdsPerRequest = 50;
  
  for (var i = 0; i < vids.length; i += maxIdsPerRequest) {
    var videoIdChunk = vids.slice(i, i + maxIdsPerRequest).map(function(row) {
      return row[0].trim(); // Assume the video ID is in the first column and trim spaces
    }).filter(function(id) {
      return id !== ''; // Filter out any empty strings
    });

    if (videoIdChunk.length > 0) {
      var stats_vids = YouTube.Videos.list("snippet,statistics", {id: videoIdChunk.join(',')});

      var details = stats_vids.items.map(function(s){return [s.snippet.title];});
      sheet.getRange(i + 2, 2, details.length, details[0].length).setValues(details);
      
      var final_stats = stats_vids.items.map(function(res){ 
        return [
          res.statistics.viewCount,
          res.statistics.likeCount,
          res.statistics.commentCount
        ];
      });
      sheet.getRange(i + 2, 3, final_stats.length, final_stats[0].length).setValues(final_stats);
    }
  }
  
  Logger.log("Stats have been added for all videos");
}

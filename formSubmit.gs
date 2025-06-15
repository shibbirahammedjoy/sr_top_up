
function doPost(e) {
  var sheet = SpreadsheetApp.openById("10fyMQOUoaEUrTYnERs-b45yJvF4qVvQ8tECDRCaJQ0U");
  var ws = sheet.getSheetByName("Sheet1");
  var data = [new Date(), e.parameter.gameId, e.parameter.package];
  ws.appendRow(data);
  return ContentService.createTextOutput("Success");
}

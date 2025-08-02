var zeropad = function (num) {
  return ((num < 10) ? '0' : '') + num;
};
var iso8601 = function (date) {
  return date.getUTCFullYear()
    + "-" + zeropad(date.getUTCMonth()+1)
    + "-" + zeropad(date.getUTCDate())
    + "T" + zeropad(date.getUTCHours())
    + ":" + zeropad(date.getUTCMinutes())
    + ":" + zeropad(date.getUTCSeconds()) + "Z";
};

function prepareDynamicDates() {
  $('time.loaded').attr("datetime", iso8601(new Date()));
  $('time.modified').attr("datetime", iso8601(new Date(document.lastModified)));
}

function loadNumbers() {
  jQuery.timeago.settings.strings.numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
}
function unloadNumbers() {
  jQuery.timeago.settings.strings.numbers = [];
}

function loadCutoffSetting() {
  jQuery.timeago.settings.cutoff = 7*24*60*60*1000;
}

function unloadCutoffSetting() {
  jQuery.timeago.settings.cutoff = 0;
}

function setupDisposal() {
  jQuery.timeago.settings.refreshMillis = 50;
  $('abbr.disposal').attr("title", iso8601(new Date())).timeago();
}

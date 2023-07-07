// jshint esversion:6

module.exports.getDate=getDate;

function getDate(){
  const today=new Date();

  const options={weekday:"long",day:"numeric",month:"long"};
  const day=today.toLocaleDateString("en-US",options);
  return day;
}
module.exports.getDay=getDay;
function getDay(){
  const today=new Date();

  const options={weekday:"long"};
  const day=today.toLocaleDateString("en-US",options);
  return day;
}
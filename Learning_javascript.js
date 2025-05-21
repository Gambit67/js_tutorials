/* This checks if my guests are invited for the party or not.   */

var invitedFriends=["James","Chioma","Anthony"];
var checkName=prompt("Enter your name if you're invited");

upper=checkName.slice(0,1);
upper=upper.toUpperCase();
var lower=checkName.slice(1,checkName.length);
lower=lower.toLowerCase();

if (invitedFriends.includes(upper+lower)) {
    alert(upper+lower+" Yay you're invited")
}else{
    alert(upper+lower+" sorry you're not invited")
}

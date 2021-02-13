/*------------ Begins -------------*/

/* 
* Module: Background Script
*/

// Objective Description: how to get the name and last name of a full name

var grScReqItem = new GlideRecord('sc_req_item'); // Example
if (grScReqItem.get('YOURsysIDrecord')) {

var fullName = grScReqItem.variables.lucas.toString();

var arr = fullName.split(" ");

firstName = arr[0];
lastName = arr[arr.length-1];

gs.log(firstName);
gs.log(lastName);

}

/*------------ END -------------*/

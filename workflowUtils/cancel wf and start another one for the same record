
/*------------ Begins -------------*/

/* 
* Module: Background Script or Xplore
*/


// How to cancel a WF and Start another one for the same record

var gr = new GlideRecord(“yourTable”); // Access your table.
gr.addQuery(“sys_id”, “45ae539e4f73fb4487418d9f9310c7fc”); // Performs record lookup
gr.query();
if (gr.next()) {

//cancel workflow.
var oldWorkflow = new Workflow();
oldWorkflow.cancel(gr);

//start new workflow
var newWorkflow = new Workflow();
var operation = ‘insert’;

// Determines which Workflow will change (WF record sys_id, not WF version)
var context = newWorkflow.startFlow(‘93522c0cdbcf5f00b3cd73e1ba9619e1’, gr, operation);
gs.addInfoMessage(“New Workflow created successfully! “ + gr.number);

}

/* ---------  END --------- */

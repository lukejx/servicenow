/*------------ Begins -------------*/

/* 
* Module: Business Rule
* Name: Update Problem Record
* Table: Incident
* Advanced: true
* When: After
* Update: true
* Filter Condition: Problem is not empty
*/

// Updating problem record with incident comments
var gr = new GlideRecord("problem");
if (gr.get(current.getValue('problem_id'))) {
    gr.work_notes = 'Incident Number ' + current.number + ' - ' + current.work_notes.getJournalEntry(1);
    gr.update();
}

gs.addInfoMessage('Problem updated with Work Notes');


/*------------ END -------------*/
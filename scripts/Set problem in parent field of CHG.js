/*------------ Begins -------------*/

/* 
 * Module: Business Rule
 * Name: Set problem in parent field of CHG
 * Table: problem
 * When: before
 * Update = True
 * Condition: Change request is not empty
 * Purpose: By default, when we create a change from a problem, it does not relate the change to that problem in the change record. This script sets the problem number (origin of the change) in the Parent field of the created change.
 */

(function executeRule(current, previous /*null when async*/ ) {

    var problemNumber = current.getUniqueValue(); // Get sys_id of current problem record

    var grCR = new GlideRecord('change_request');
    if (grCR.get(current.rfc)) {
        grCR.setValue('parent', problemNumber);
        grCR.update(); // TESTE LUCAS A
    }

})(current, previous);

/*------------ END -------------*/
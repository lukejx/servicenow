/*------------ Begins -------------*/

/* 
 * Module: UI ACTION
 * Name: pdfGenerator (It's up to you)
 * Table: whatever_you_want
 * Show Insert: It's up to you
 * Show update: It's up to you
 * Client: true
 * List v2 Compatible: true
 * Form button: true
 * Onclick: exportPDF()
 */

// Script

function exportPDF() {
    var sysparm_table = g_form.getTableName();
    var sysparm_sys_id = g_form.getUniqueValue().toString();
    var instanceName='https://yourInstanceName.service-now.com/';
    var url = instanceName+sysparm_table + '.do?PDF&sys_id=' + sysparm_sys_id;
    g_navigation.openPopup(url);
    }

/*------------ END -------------*/
/*------------ Begins Client Script-------------*/

/* 
 * Module: Client Script
 * Name: mandatoryAttachment
 * Table: yourChoice
 * Global: true
 * UI Type: All
 * Type: onSubmit
 */

function onSubmit() {
    var ord_id = gel('sysparm_item_guid').value;
    var ga = new GlideAjax('ValidateOrderAttachment');
    ga.addParam('sysparm_name', 'getCatalogItemAttachmentCount');
    ga.addParam('sysparm_sys_id', ord_id);
    ga.getXMLWait();
    var number_of_attachments = ga.getAnswer();
    if (number_of_attachments > 0) {
        alert('Thank you for attaching a file');
        return true;
    } else {
        alert('Attachment is mandatory');
        return false;
    }
}

/*------------ END -------------*/

/*------------ Begins Script Include-------------*/

var ValidateOrderAttachment = Class.create();
ValidateOrderAttachment.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    getCatalogItemAttachmentCount: function () {
        var gr = new GlideRecord('sys_attachment');
        gr.addQuery('table_sys_id', this.getParameter('sysparm_sys_id'));
        //	gr.addQuery('table_name', 'sc_cart_item');
        gr.query();
        var count = 0;
        while (gr.next()) {
            count++;
        }
        return count;
    },
});

/*------------ END -------------*/
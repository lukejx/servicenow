/*------------ Begins -------------*/

/* 
 * Module: Client Script
 * Name: hideCommonVariables
 * Global: true
 * UI Type: All
 * Type: onLoad
 */

function onLoad() {
    //Hide variables common to the Order Guide and included Items.

    var item = $("current_item");
    var guide = $("sysparm_guide");

    if (item != null && guide != null && item.value == guide.value)
        return;

    g_form.setVisible('delivery_option', false);
    g_form.setVisible('location', false);
    g_form.setVisible('shipping_address', false);
}

/*------------ END -------------*/
/*------------ Begins Script Include-------------*/

var generatorRITM = Class.create();
generatorRITM.prototype = {
	initialize: function() {},
	
	/**SNDOC
	@name generateCart
	@description Generate RITMs by Cart API

	@param {object} [record] - 1a RITM Generated

	@example
	new gerarRITM().generateCart(current)

	@returns {object} current record
	*/

	/**SNDOC
	@name generateCart
	@description Generate RITMs by Cart API

	@param {json} [validationItems] - Grid with values of multi-row variable set

	@example
	[{"equipamentos":"Exemplo1","quantidade":"12"},{"equipamentos":"Exemplo2","quantidade":"50"}]

	@returns {object} current value of multi-row variable
	*/
	
	generateCart: function(record) {
		
		var requestsGenerated = [];
		var validationItems = JSON.parse(record.variables.equipment_request); // (equipment_request is the name of your mrvs)
		for (i in validationItems) {
			
			var cart = new Cart();
			var item = cart.addItem(gs.getProperty('itemLayoutSalaPosicaoTrabalho'));
			cart.setVariable(item, "planned_change_date", record.variables.planned_change_date);
			cart.setVariable(item, "place_origin", record.variables.place_origin);
			cart.setVariable(item, "place_destination", record.variables.place_destination);
			cart.setVariable(item, "contact_phone", record.variables.contact_phone);
			cart.setVariable(item, "attachment", record.variables.attachment);
			cart.setVariable(item, "descricao_detalhada", record.variables.descricao_detalhada);
			
			var order = cart.placeOrder().getUniqueValue() + '';
			requestsGenerated.push(order);
			var ritm = new GlideRecord("sc_req_item");
			if (ritm.get("request", order)) {
				var mr = ritm.variables.equipment_request;
				var newRow = mr.addRow();
				newRow.equipments = validationItems[i].equipments + '';
				newRow.action = validationItems[i].action + '';
				newRow.quantity = validationItems[i].quantity + '';
				ritm.setValue('opened_by', record.opened_by);
				ritm.setValue('u_requested_for', record.u_requested_for);
				ritm.setValue('request', record.request);
				//ritm.setValue('description', 'Equipamento: ' + validationItems[i].equipments + '' + '\n Ação: ' + validationItems[i].action + '' + '\n Quantidade: ' + validationItems[i].quantity + '');
				ritm.update();
			}
		}
			return requestsGenerated;
	},
	type: 'generatorRITM'
};

/*------------ END -------------*/
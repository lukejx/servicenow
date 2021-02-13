var gerarRITM = Class.create();
gerarRITM.prototype = {
	initialize: function() {},

	generateCart: function(record) {
		var validationItems = JSON.parse(record.variables.teste_gerar_ritms);

		//gs.info(validationItems[1].quantidade);
		for (i in validationItems) {
			var quant = parseInt(validationItems[i].quantidade);
			//gs.info(quant);
			for (y = 0; y < quant; y++) {
				//gs.info('number :'+i+ '---'  + 1);
				//validationItems[i].quantidade = quantidade = '1';

				var cart = new Cart();
				var item = cart.addItem('3162c8d42f81201058ad59a72799b608');
				//cart.setVariable(item, 'teste_gerar_ritms', '[{' + validationItems[i] + '}]');
				//cart.setVariable(item, 'teste_gerar_ritms', [{"equipamentos":"Teste","quantidade":"12"},{"equipamentos":"Rainer","quantidade":"50"}]);
				var order = cart.placeOrder().getUniqueValue() + '';
				var ritm = new GlideRecord("sc_req_item");
				if (ritm.get("request", order)) {
					var mr = ritm.variables.teste_gerar_ritms;
					var newRow = mr.addRow();
					newRow.equipamentos = validationItems[i].equipamentos+'';
					newRow.quantidade = "1";
					ritm.setValue('request', record.request);
					//ritm.setValue('parent', record.request);
					ritm.update();
				}

			}
		}

	},

	type: 'gerarRITM'
};



-> Esse acima gera RITMS para cada linha de acordo com um campo quantidade

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
		var validationItems = JSON.parse(record.variables.equipment_request);
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
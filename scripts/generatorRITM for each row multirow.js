/*------------ Begins Script Include-------------*/
/*--------------------- v1-----------------------*/
var gerarRITM = Class.create();
gerarRITM.prototype = {
	initialize: function() {},

	generateCart: function(record) {
		var validationItems = JSON.parse(record.variables.teste_gerar_ritms);

		for (i in validationItems) {
			//var quant = parseInt(validationItems[i].quantidade);

			//for (y = 0; y < quant; y++) {

				var cart = new Cart();
				var item = cart.addItem('3162c8d42f81201058ad59a72799b608');
				var order = cart.placeOrder().getUniqueValue() + '';
				var ritm = new GlideRecord("sc_req_item");
				if (ritm.get("request", order)) {
					var mr = ritm.variables.teste_gerar_ritms;
					var newRow = mr.addRow();
					newRow.equipamentos = validationItems[i].equipamentos+'';
					newRow.quantidade = validationItems[i].quantidade+'';
					ritm.setValue('request', record.request);
					ritm.setValue('description', 'Equipamento: '+validationItems[i].equipamentos+''+'\n Quantidade: '+validationItems[i].quantidade+'' );
					ritm.update();
				}

			//}
		}

	},
	
	type: 'gerarRITM'
};
/*------------ END V1-------------*/

/*------------ Begins Script Include-------------*/
/*--------------------- v2-----------------------*/
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

/*------------ END V2-------------*/
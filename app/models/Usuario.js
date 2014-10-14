exports.definition = {
	config: {
		columns: {
		    "IdUsuario": "integer",
		    "Mail": "text",
		    "Nombre": "text",
		    "Telefono": "text",
		    "IdIdentity": "text",
		    "RecibeNotificaciones": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Usuario"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};
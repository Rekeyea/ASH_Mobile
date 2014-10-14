exports.definition = {
	config: {
		columns: {
		    "IdPublicacion": "integer",
		    "IdComentario": "integer",
		    "IdUsuario": "integer",
		    "Visto": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Visto"
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
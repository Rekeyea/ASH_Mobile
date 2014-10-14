exports.definition = {
	config: {
		columns: {
		    "IdPublicacion": "integer",
		    "Titulo": "text",
		    "Descripcion": "text",
		    "Ubicacion_X": "text",
		    "Ubicacion_Y": "text",
		    "Fecha": "text",
		    "Tipo": "integer",
		    "Foto": "text",
		    "CantDenuncias": "integer",
		    "IdUsuario": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Publicacion"
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
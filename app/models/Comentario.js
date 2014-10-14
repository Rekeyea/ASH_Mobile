exports.definition = {
	config: {
		columns: {
		    "IdComentario": "integer",
		    "Foto": "text",
		    "Descripcion": "text",
		    "CantDenuncias": "integer",
		    "Ubicacion_X": "text",
		    "Ubicacion_Y": "text",
		    "Fecha": "text",
		    "IdPublicacion": "integer",
		    "IdUsuario": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Comentario"
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
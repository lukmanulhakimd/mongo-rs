db.createRole(
   {
     role: "schema_rw",
     privileges: [
       { resource: { db: "dev01", collection: "_schema" }, actions: [ "find", "insert", "update", "createIndex", "dropIndex", "listIndexes" ] }
     ],
     roles: []
   }
)

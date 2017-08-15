use admin
db.createRole(
   {
     role: "diagnosticRole",
     privileges: [
       { resource: { cluster: true }, actions: [ "connPoolStats", "dbStats", "diagLogging", "getCmdLineOpts", "getLog", "hostInfo", "listDatabases", "netstat", "serverStatus", "top", "validate" ] },
       { resource: { db: "dev01", collection: "" }, actions: [ "collStats", "dbHash", "dbStats", "listCollections", "listIndexes", "validate" ] }
     ],
     roles: []
   }
)

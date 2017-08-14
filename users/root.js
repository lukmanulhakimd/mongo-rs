db.getSiblingDB("admin").createUser(
  {
    "user" : "root",
    "pwd" : "bismillah",
    roles: [ { "role" : "root", "db" : "admin" } ]
  }
)

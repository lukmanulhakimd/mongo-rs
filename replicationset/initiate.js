rs.initiate(
  {
    _id : "dev01-cluster-1",
    members: [
      { _id : 0, host : "10.0.65.101:27017" },
      { _id : 1, host : "10.0.65.102:27017" },
      { _id : 1, host : "10.0.65.102:27017" }
    ]
  }
)

rs.initiate(
  {
    _id : "dev01-cluster-1",
    "members" : [
    {
        "_id" : 0,
        "host" : "10.0.65.101:27017",
        "priority" : 30
    },
    {
        "_id" : 1,
        "host" : "10.0.65.102:27017",
        "priority" : 20
    }, 
    {
       "_id" : 2,
        "host" : "10.0.65.103:27017",
        "priority" : 10
    }
    ]
  }
)

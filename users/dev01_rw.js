use dev01
db.createUser(
  {
    user: "dev01",
    pwd: " <password>",
    roles:
    [
      {
        role: "readWrite",
        db: "dev01"
      }
    ]
  })

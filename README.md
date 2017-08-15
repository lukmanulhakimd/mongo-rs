# mongo-rs
MongoDB replication set cluster on dev01.

To execute javascript commands targeting the mongodb cluster you can use this command.
```
mongo <primaryIP>/admin -u <user> -p <password> < commands.js
```

To import example dataset, you can do the following.
```
wget https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json
mongoimport primer-dataset.json -h 10.0.65.101 -u root -p bismillah --authenticationDatabase admin --authenticationMechanism MONGODB-CR --db dev01 --collection restaurants
```

You can also follow ansible roles and playbook [https://github.com/lukmanulhakimd/ansible_dev01](https://github.com/lukmanulhakimd/ansible_dev01).

JWT AUTH AND AUTHORISATION - III - ONLY BACKEND
Create a blogging application (Only backend)
Implement Authentication

Hash the passwords before storing in DB
Use JWT token, have expiry time as 1 minute
Implement Refresh token, have its expiry time as 3 minutes
CRUD Operations

An authenticated user should be able to create a blog
All authenticated users should be able to read all blogs
Establish relationship so that an authenticated user should be able to update or delete only their blog.
An authenticated moderator should be able to remove/delete any blog.
Authorisation

There should be two roles - "User" and "Moderator"
Default role when no role is passed while registering should be - "User"
User should be able to do all the user CRUD operations
Moderator should be able to delete any blog (you can have a separate endpoint for this)
Blacklisting

Have an endpoint for logout and implement it by blacklisting the token.
Store blacklisted tokens in a separate collection in DB
Deployment

Deploy your backend on any platform like cylic/railway/render etc.
Code Quality

Commit regularly
Follow all good coding practices
store sensitive info in .env
follow MVC Structure
Use MongoDB Atlas and not your local MongoDB
<!-- 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 -->

BANK BALANCE - AGGREGATION
Find the Bank Balance
There are two collections called "users" and "transactions".
The users collection has these fields :
_id,
name,
profession,
salary
The transactions collection has these fields :
_id
user_id (the id of the user who made the transaction)
type ( this could be "deposit" or "withdraw" )
amount
Write an aggregation pipeline that calculates the total bank balance for each user(sum of all deposits minus sum of all withdrawals) and sort in the descending order of the total bank balance.
Example :
Users collection

    {
      "_id": ObjectId("618c4f101f0c7a000d936e9c"),
      "name": "Aman",
      "profession": "Software developer",
      "salary": 50000
    },
    {
      "_id": ObjectId("618c4fe51f0c7a000d936e9d"),
      "name": "Albert",
      "profession": "Director",
      "salary": 100000
    }
Transactions collection

{
  "_id": ObjectId("618c50d41f0c7a000d936e9e"),
  "user_id": ObjectId("618c4f101f0c7a000d936e9c"),
  "type": "withdraw",
  "amount": 20
},
{
  "_id": ObjectId("618c51c11f0c7a000d936e9f"),
  "user_id": ObjectId("618c4f101f0c7a000d936e9c"),
  "type": "deposit",
  "amount": 50
},
{
  "_id": ObjectId("618c529e1f0c7a000d936ea0"),
  "user_id": ObjectId("618c4fe51f0c7a000d936e9d"),
  "type": "deposit",
  "amount": 30
},
{
  "_id": ObjectId("618c538c1f0c7a000d936ea1"),
  "user_id": ObjectId("618c4fe51f0c7a000d936e9d"),
  "type": "withdraw",
  "amount": 10
},
{
  "_id": ObjectId("618c545b1f0c7a000d936ea2"),
  "user_id": ObjectId("618c4f101f0c7a000d936e9c"),
  "type": "deposit",
  "amount": 20
}
The output should be

[
  { "_id": "Aman", "totalBalance": 50 },
  { "_id": "Albert", "totalBalance": 20 }
]

Hint : You may also need to use or explore the following operators

$group, $unwind, $project, $sum, $cond, $addFields, $sort etc
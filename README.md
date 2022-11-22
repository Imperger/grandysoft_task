# Deploy 

`docker compose up` for a predefined data set.

`docker compose -f docker-compose.yml -f docker-compose.rand.yml up` for a random data set.

# API

Entry url: `http://localhost:3000`

`/users`

`/users/:id/friends?order_by={id|firstname|gender}&order_type={asc|desc}`

`/max-following`

`/not-following`

# Data sets

All sets have 200 randomly generated users, but different follower sets.

## Predefined


| followerId | followingId |
|------------|-------------|
| 1          |     2       |
| 1          |     3       |
| 1          |     4       | 
| 1          |     5       | 
| 3          |     1       | 
| 4          |     1       | 


## Random

Up to 150 random links per user.

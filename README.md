Name of Project: Molosan

Documentation of your API:
/api/users POST = 'Client must have api token. Endpoint that allows the client to create an account and have it saved on the database. Body must include password, username, fullname, email, description'
/api/auth/login POST = 'Client must have api token. Endpoint that is used to login. User must send username and password for endpoint to process correctly. And the credentials must be run through the database, specifically realtors table'

/api/realtors GET = 'Client must have api token. Endpoint responds to the user with all of the realtors in the realtors table'
/api/realtors/:realtor_id GET = 'Client must have api token. Endpoint responds with specific realtor. The client must send the id of the desired realtor in the request'

/api/farmHouses GET = 'Client must have api token. Endpoint responds to the user with all of the farm houses in the farmhouse table. Anyone can make this request'
/api/farmHouses POST = 'Client must have api token. Endpoint allows for client to upload a farm house. Client must send address, description, price, rooms, bathrooms, and size of house. Client will automatically send the current realtor id. Only realtors can upload a farm house'

/api/farmHouses:farmHouseId GET = 'Client must have api token. Endpoint allows for data on a specific farm house. The client must send the id of the desired farm house. Anyone can make this request'
/api/farmHouses:farmHouseId DELETE = 'Client must have api token. Endpoint allows for deletion of a specific farm house. The client must send the id of the desired farm house. Anyone can make this request'
/api/farmHouses:farmHouseId PATCH = 'Client must have api token. Endpoint allows for updating of a specific farm house. The client must send the id of the desired farm house. Anyone can make this request'

Live app: https://farm-house-capstone-client-k5092n3d1.vercel.app/

Screenshots: 
https://user-images.githubusercontent.com/26450419/91245919-a580be80-e71c-11ea-892b-b485ad703365.png
https://user-images.githubusercontent.com/26450419/91245938-b5000780-e71c-11ea-8b60-f3b61fce13b0.png
https://user-images.githubusercontent.com/26450419/91246020-e7aa0000-e71c-11ea-9b0e-7d5e023a350c.png
https://user-images.githubusercontent.com/26450419/91245963-c3e6ba00-e71c-11ea-87e8-9bc26d3ad547.png
https://user-images.githubusercontent.com/26450419/91245981-cea14f00-e71c-11ea-9533-175eb074a1e2.png
https://user-images.githubusercontent.com/26450419/91246001-db25a780-e71c-11ea-9554-ef2cb18c99c4.png

Summary: 
This website allows for users to view Farm Houses. Moreover, realtors are able to add their listings to this website for potential buyers.

Technology used: 
React, CSS, Node, Express, and PostgreSQL

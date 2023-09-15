Endpoints

1. Create a New Person
   Endpoint: POST /api/persons
   Description: Create a new person in the database.
   Request Format:
   Content-Type: application/json
   Body:

````json

{
  "name": "John Doe",
  "age": 30,
  "phoneNumber": "123-456-7890"
}
```
Response Format:
Status Code: 201 Created
Body:

```json

{
  "_id": "unique_id",
  "name": "John Doe",
  "age": 30,
  "phoneNumber": "123-456-7890"
}
```
1. Fetch Person Details by Name
Endpoint: GET /api/persons/:name
Description: Retrieve details of a person by their name.
Request Format: No request body required.
Response Format:
Status Code: 200 OK
Body:

```json
{
  "_id": "unique_id",
  "name": "John Doe",
  "age": 30,
  "phoneNumber": "123-456-7890"
}
```
3. Update Person Details by Name
Endpoint: PUT /api/persons/:name
Description: Modify details of an existing person by their name.
Request Format:
Content-Type: application/json
Body (example to update age and phone number):

```json

{
  "age": 35,
  "phoneNumber": "987-654-3210"
}
```
Response Format:
Status Code: 200 OK
Body:

```json

{
  "_id": "unique_id",
  "name": "John Doe",
  "age": 35,
  "phoneNumber": "987-654-3210"
}
```
4. Delete a Person by Name
Endpoint: DELETE /api/persons/:name
Description: Remove a person from the database by their name.
Request Format: No request body required.
Response Format:
Status Code: 200 OK
Body:

```json
{
  "_id": "unique_id",
  "name": "John Doe",
  "age": 35,
  "phoneNumber": "987-654-3210"
}
```
Sample Usage
Here are some sample API requests and expected responses:

Create a New Person
Request:

http
POST /api/persons
Content-Type: application/json

```json
{
  "name": "Alice Smith",
  "age": 25,
  "phoneNumber": "555-123-4567"
}
```

Response:


```json
{
  "_id": "unique_id",
  "name": "Alice Smith",
  "age": 25,
  "phoneNumber": "555-123-4567"
}
```

Fetch Person Details by Name
Request:

http
GET /api/persons/Alice%20Smith

Response:


```json
{
  "_id": "unique_id",
  "name": "Alice Smith",
  "age": 25,
  "phoneNumber": "555-123-4567"
}
```


Update Person Details by Name
Request:

http
PUT /api/persons/Alice%20Smith
Content-Type: application/json

```json
{
  "age": 30,
  "phoneNumber": "555-987-6543"
}
```


Response:


```json
{
  "_id": "unique_id",
  "name": "Alice Smith",
  "age": 30,
  "phoneNumber": "555-987-6543"
}
```

Delete a Person by Name
Request:

http
DELETE /api/persons/Alice%20Smith

Response:


```json
{
  "_id": "unique_id",
  "name": "Alice Smith",
  "age": 30,
  "phoneNumber": "555-987-6543"
}
```

````

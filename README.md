# Intern-Project-Backend

The project is hosted on a Microsoft Azure app service. Below is the main link for the hosted project :point_down:
https://internprojectapp.azurewebsites.net

## Login Implemenation

This endpoint handles the login of only registered users.

### Login Url [POST]
https://internprojectapp.azurewebsites.net/api/users/login

### Headers
```javascript
{
    "Content-Type": "application/json"
}
```

### Request Body Sample
```javascript
{
    email: "dbackson1@gmail.com"
    password: "password1234@"
}
```

***all the above request body forms are required***

### Successful response :point_down:
**status code: 200**
```javascript
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWJkZGE3N2Q4MDZhZjExMzgxYWMxZiIsImVtYWlsIjoiZGJhY2tzb24xQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3MTQxOSwiZXhwIjoxNjY5NTYzNDE5fQ.67yXlTg0zhH6h4gAUEL2DqZ8V7lzPC2VuBXJZ2q3j24"
}
```
### Error response :point_down:
**status code: 400**
```javascript
{
    "message": "Invalid Email address!"
}
```
```javascript
{
    "message": "Invalid Password!"
}
```

## Sign Up Implementation

This endpoint handles the singup of new users. Already existing users will be thrown an error.

### Sign Up Url [POST]
https://internprojectapp.azurewebsites.net/api/users/signup

### Headers
```javascript
{
    "Content-Type": "application/json"
}
```

### Request Body Sample
```javascript
{
    name: "Degraft Backson"
    email: "dbackson1@gmail.com"
    password: "password1234@"
    confirm_password: "password1234@"
}
```

***all the above request body forms are required***

### Successful response :point_down:
**status code: 200**
```javascript
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWMwYWI5YzYzYTNhYzdhZTE1NDEyNyIsImVtYWlsIjoiZGJhY2tzb24yQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3NjQ0MSwiZXhwIjoxNjY3MDYyODQxfQ.v9n0DjA-bjylCZmyBUa8zL2fFZ3143MQ1JqDuoBWoEg"
}
```
### Error response :point_down:
**status code: 400**
```javascript
{
    "message": "user already exist!"
}
```

## Add New Player Implementation

This endpoint is responsible for adding or uploading a new player to the database.

### upload new player Url [POST]
https://internprojectapp.azurewebsites.net/api/users/add-new-player

### Headers
```javascript
{
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWMwYWI5YzYzYTNhYzdhZTE1NDEyNyIsImVtYWlsIjoiZGJhY2tzb24yQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3NjQ0MSwiZXhwIjoxNjY3MDYyODQxfQ.v9n0DjA-bjylCZmyBUa8zL2fFZ3143MQ1JqDuoBWoEg"
}
```

### Request Body Sample
```javascript
{
    name: "Jordan Ayew",
    age: 28,
    position: "FW"
}
```

***all the above request body forms are required***

### Successful response :point_down:
**status code: 200**
```javascript
{
    "message": "Player has been uploaded successfully."
}
```
### Error response :point_down:
**status code: 400**
```javascript
{
    "message": "You have already uploaded this player!"
}
```
```javascript
{
    "message": "Player upload failed!"
}
```

## Delete Player Implementation

This endpoint is responsible for deleting a specific player.

### delete player Url [PUT]
https://internprojectapp.azurewebsites.net/api/users/delete-player/:id

***the **:id** represents the id of the particular player to be deleted***

### Headers
```javascript
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWMwYWI5YzYzYTNhYzdhZTE1NDEyNyIsImVtYWlsIjoiZGJhY2tzb24yQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3NjQ0MSwiZXhwIjoxNjY3MDYyODQxfQ.v9n0DjA-bjylCZmyBUa8zL2fFZ3143MQ1JqDuoBWoEg"
}
```

### Request Body
***No Request body is needed for this api***

### Successful response :point_down:
**status code: 200**
```javascript
{
    "message": "Player has been successfully deleted!"
}
```
### Error response :point_down:
**status code: 400**
```javascript
{
    "message": "Player delete failed!"
}
```

## Edit Player Implementation

This endpoint patches the details of an already uploaded player.

### edit player Url [PUT]
https://internprojectapp.azurewebsites.net/api/users/edit-player/:id

***the **:id** represents the id of the particular player***

### Headers
```javascript
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWMwYWI5YzYzYTNhYzdhZTE1NDEyNyIsImVtYWlsIjoiZGJhY2tzb24yQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3NjQ0MSwiZXhwIjoxNjY3MDYyODQxfQ.v9n0DjA-bjylCZmyBUa8zL2fFZ3143MQ1JqDuoBWoEg"
}
```

### Request Body Sample
```javascript
{
    name: "Dede Ayew",
    age: 29,
    position: "FW"

}
```

***any of the request body forms can be ignored i.e. It is not compulsory to provide all***

### Successful response :point_down:
**status code: 200**
```javascript
{
    "message": "Player has been successfully updated."
}
```
### Error response :point_down:
**status code: 400**
```javascript
{
    "message": "Player update failed!"
}
```

## Logout Implementation

This endpoint will logout the user and will invalidate the old jwt token.

### logout Url [POST]
https://internprojectapp.azurewebsites.net/api/users/logout

### Headers
```javascript
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWMwYWI5YzYzYTNhYzdhZTE1NDEyNyIsImVtYWlsIjoiZGJhY2tzb24yQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3NjQ0MSwiZXhwIjoxNjY3MDYyODQxfQ.v9n0DjA-bjylCZmyBUa8zL2fFZ3143MQ1JqDuoBWoEg"
}
```

### Request Body
***no request body is needed for this api***

### Successful response :point_down:
**status code: 200**
```javascript
{
    "message": "You have been logged out."
}
```
### Error response :point_down:
**status code: 400**
```javascript
{
    "message": "Log out failed!"
}
```
## THE BELOW ENDPOINT WAS NOT INCLUDED IN THE ASSIGNMENT
## Get all Players Implementation

This endpoint returns all players uploaded by a specific user.

### get all players Url [GET]
https://internprojectapp.azurewebsites.net/api/users/get-players

### Headers
```javascript
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWMwYWI5YzYzYTNhYzdhZTE1NDEyNyIsImVtYWlsIjoiZGJhY2tzb24yQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3NjQ0MSwiZXhwIjoxNjY3MDYyODQxfQ.v9n0DjA-bjylCZmyBUa8zL2fFZ3143MQ1JqDuoBWoEg"
}
```

### Request Body
***no request body is needed for this api***

### Successful response :point_down:
**status code: 200**
```javascript
[
    {
        "_id": "635c1d75af03a7ad0710da9f",
        "name": "Dede Ayew",
        "age": 27,
        "position": "FW",
        "user_id": "635bdda77d806af11381ac1f",
        "createdAt": "2022-10-28T18:20:37.012Z",
        "updatedAt": "2022-10-28T18:20:37.012Z",
        "__v": 0
    },
    {
        "_id": "635c1d9caf03a7ad0710daa5",
        "name": "Christian Atsu",
        "age": 27,
        "position": "FW",
        "user_id": "635bdda77d806af11381ac1f",
        "createdAt": "2022-10-28T18:21:16.217Z",
        "updatedAt": "2022-10-28T18:21:16.217Z",
        "__v": 0
    }

]
```
### Error response :point_down:
***No error response was made for this endpoint.***

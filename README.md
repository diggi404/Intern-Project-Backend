# Intern-Project-Backend

The project is hosted on a Microsoft Azure app service. Below is the main link for the hosted project :point_down:
https://internprojectapp.azurewebsites.net

## Login Implemenation

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

### upload new player Url [POST]
https://internprojectapp.azurewebsites.net/api/users/add-new-player

### Headers
```javascript
{
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWMwYWI5YzYzYTNhYzdhZTE1NDEyNyIsImVtYWlsIjoiZGJhY2tzb24yQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3NjQ0MSwiZXhwIjoxNjY3MDYyODQxfQ.v9n0DjA-bjylCZmyBUa8zL2fFZ3143MQ1JqDuoBWoEg"
}
```

### Request Body
```javascript
{
    name: "Jordan Ayew",
    age: 28,
    position: "FW"
}
```

***all the above request body forms are required***

### Successful response :point_down:
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

### edit player Url [PUT]
https://internprojectapp.azurewebsites.net/api/users/edit-player/:id

***the **:id** represents the id of the particular player***

### Headers
```javascript
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWMwYWI5YzYzYTNhYzdhZTE1NDEyNyIsImVtYWlsIjoiZGJhY2tzb24yQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk3NjQ0MSwiZXhwIjoxNjY3MDYyODQxfQ.v9n0DjA-bjylCZmyBUa8zL2fFZ3143MQ1JqDuoBWoEg"
}
```

### Request Body
```javascript
{
    name: "Dede Ayew",
    age: 29,
    position: "FW"

}
```

***any of the request body forms can be ignored i.e. It is not compulsory to provide all***

### Successful response :point_down:
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
```javascript
{
    "message": "Player has been uploaded successfully."
}
```
### Error response :point_down:
**status code: 400**
```javascript
{
    "message": "You have been logged out."
}
```
```javascript
{
    "message": "Log out failed!"
}
```

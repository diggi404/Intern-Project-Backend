# Intern-Project-Backend

The project is hosted on a Microsoft Azure app service. Below is the main link for the hosted project :point_down:
https://internprojectapp.azurewebsites.net

## Login Implemenation

### Login Url [POST]
https://internprojectapp.azurewebsites.net/api/users/login

### Headers
```javascript
Content-Type: "application/json"
```

### Request Body
**email [string]**, **password [string, min:8, max:35]**

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
Content-Type: "application/json"
```

### Request Body
**name [string]**, **email [string]**, **password [string]**, **comfirm_password [string]**

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
Content-Type: "application/json"
```

### Request Body
**name [string]**, **age [integer]**, **position [string]**

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

***the **:id** represents the id of the particular player***

### Headers
```javascript
Content-Type: "application/json"
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
Content-Type: "application/json"
```

### Request Body
**name [string]**, **age [integer]**, **position [string]**

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
Content-Type: "application/json"
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

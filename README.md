# Intern-Project-Backend

The project is hosted on a Microsoft Azure app service. Below is the link for the hosted project :point_down:


## Login Implemenation

### Login Url [POST]
https://internprojectapp.azurewebsites.net/api/users/login

### Headers
```javascript
Content-Type: "application/json"
```

### Request Body
**email [string]**, **password [string, min:8, max:35]**

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

### Sign Up Request Body
**name [string]**,**email [string]**, **password [string]**, **comfirm_password [string]**

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
    "message": "users already exist!"
}
```

This project consists of 5 APIs to make work easier for receptionalist. Below are list of API with endpoints, parameters and expected response.

1. Signup: 
> Endpoint: localhost:8000/auth/signup
> Request Type: POST
> Parameters: {
    email: "email@address.com",
    password: "password"
}
> Response:  "user": {
        "_id": "5e23f6d04fd1c30784206360",
        "email": "email@address.com",
        "password": "$2a$10$.muZRH7lJmHT4SWqtXSqt.uuCZ0bFZPrGVjzyxtJDttjBPVmYM.Ia",
        "createdDate": "2020-01-19T06:27:28.209Z",
        "__v": 0
    }

2. Login: 
> Endpoint: localhost:8000/auth/login
> Request Type: POST
> Parameters: {
    email: "email@address.com",
    password: "password"
}
> Response:  "user": {
        "_id": "5e23f6d04fd1c30784206360",
        "email": "email@address.com",
        "createdDate": "2020-01-19T06:27:28.209Z",
        "__v": 0,
        "token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGFkZHJlc3MuY29tIiwiaWF0IjoxNTc5NDE1MzAzfQ.XTF-YlkZ74zpC45a_zTwi---WlQW9gr-oQQciYG6y40"
    }

3. Check Availabilty of Rooms between specific date
> Endpoint: localhost:8000/checkRoomAvailability
> Request Type: GET
> Parameters: {
    roomName: "Single Room",
    startDate: "Sun Jan 25 2020 00:00:00 GMT+0530",
    endDate: "Tue Jan 28 2020 23:59:59 GMT+0530"
}
> Headers: {
    authorization: "bearer GENERATED_TOKEN"
}
> Response:  { "data": "Room is available" }

4. Book Rooms between specific date
> Endpoint: localhost:8000/bookRoom
> Request Type: POST
> Parameters: {
	"guestName": "Aayush Patidar",
    "idProof": "Aadhar Card",
    "idProofNumber": "111122223333",
    "startDate": "Sun Jan 25 2020 00:00:00 GMT+0530",
    "endDate": "Tue Jan 28 2020 00:00:00 GMT+0530",
    "roomName": "Single Room"
}
> Headers: {
    authorization: "bearer GENERATED_TOKEN"
}
> Response:  { "data": {
        "isCancelled": false,
        "_id": "5e23ee0f06ed1f26d83afa6a",
        "guestName": "Aayush Patidar",
        "idProof": "Aadhar Card",
        "idProofNumber": "111122223333",
        "startDate": "2020-01-25T18:30:00.000Z",
        "endDate": "2020-01-28T18:30:00.000Z",
        "roomName": "Single Room",
        "createdDate": "2020-01-19T05:50:07.766Z",
        "updatedDate": "2020-01-19T05:50:07.766Z",
        "__v": 0
    }
}

5. Cancel the booking by booking ID
> Endpoint: localhost:8000/checkRoomAvailability
> Request Type: PUT
> Parameters: {
    id: ObjectId("id")
}
> Headers: {
    authorization: "bearer GENERATED_TOKEN"
}
> Response:  { "data": {
        "isCancelled": true,
        "_id": "5e23eda006ed1f26d83afa69",
        "guestName": "Aayush Patidar",
        "idProof": "Aadhar Card",
        "idProofNumber": "111122223333",
        "startDate": "2020-01-29T18:30:00.000Z",
        "endDate": "2020-01-29T18:30:00.000Z",
        "roomName": "Single Room",
        "createdDate": "2020-01-19T05:48:16.575Z",
        "updatedDate": "2020-01-19T05:48:16.575Z",
        "__v": 0
    }
}
This project consists of 5 APIs to make work easier for receptionalist. Below are list of API with Endpoints, Parameters and expected Response.

- Signup:
**Endpoint:**  localhost:8000/auth/signup <br/>
**Request Type:** POST <br/>
**Parameters:** ```{
    email: "email@address.com",
    password: "password"
}``` <br/>
**Response:**  ``` {
        "_id": "5e23f6d04fd1c30784206360",
        "email": "email@address.com",
        "password": "$2a$10$.muZRH7lJmHT4SWqtXSqt.uuCZ0bFZPrGVjzyxtJDttjBPVmYM.Ia",
        "createdDate": "2020-01-19T06:27:28.209Z",
        "__v": 0
}``` <br/>

- Login: <br/>
**Endpoint**: localhost:8000/auth/login <br/>
**Request Type**: POST <br/>
**Parameters**: ```{
    email: "email@address.com",
    password: "password"
}``` <br/>
**Response**: ``` {
        "_id": "5e23f6d04fd1c30784206360",
        "email": "email@address.com",
        "createdDate": "2020-01-19T06:27:28.209Z",
        "__v": 0,
        "token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGFkZHJlc3MuY29tIiwiaWF0IjoxNTc5NDE1MzAzfQ.XTF-YlkZ74zpC45a_zTwi---WlQW9gr-oQQciYG6y40"
}``` <br/>

- Create the room entry to make the room available for booking (Needs to be run first)
**Endpoint**: localhost:8000/createRoomEntry <br/>
**Request Type**: POST <br/>
**Parameters**: ```{
    roomName: "Single Room",
    totalRooms: 10
}```<br/>
**Response**:  ```{ 
        "data": "Room entry created successfully" 
    }``` <br/>

- Check Availabilty of Rooms between specific date <br/>
**Endpoint**: localhost:8000/checkRoomAvailability <br/>
**Request Type**: GET <br/>
**Parameters**: ```{
    roomName: "Single Room",
    startDate: "Sun Jan 25 2020 00:00:00 GMT+0530",
    endDate: "Tue Jan 28 2020 23:59:59 GMT+0530"
}```<br/>
**Headers**: ```{
    authorization: "bearer GENERATED_TOKEN"
}``` <br/>
**Response**:  ```{ 
        "data": "Room is available" 
    }``` <br/>

- Book Rooms between specific date <br/>
**Endpoint**: localhost:8000/bookRoom <br/>
**Request Type**: POST <br/>
**Parameters**: ```{
	"guestName": "Aayush Patidar",
    "idProof": "Aadhar Card",
    "idProofNumber": "111122223333",
    "startDate": "2020-02-01T00:00:00.000Z",
    "endDate": "2020-02-03T23:59:59.000Z",
    "roomName": "Single Room"
}``` <br/>
**Headers**: ```{
    authorization: "bearer GENERATED_TOKEN"
}``` <br/>
**Response**: ``` {
        "isCancelled": false,
        "_id": "5e23ee0f06ed1f26d83afa6a",
        "guestName": "Aayush Patidar",
        "idProof": "Aadhar Card",
        "idProofNumber": "111122223333",
        "startDate": "2020-02-01T00:00:00.000Z",
        "endDate": "2020-02-03T23:59:59.000Z",
        "roomName": "Single Room",
        "createdDate": "2020-01-19T05:50:07.766Z",
        "updatedDate": "2020-01-19T05:50:07.766Z",
        "__v": 0
}``` <br/>

- Cancel the booking by booking ID <br/>
**Endpoint**: localhost:8000/checkRoomAvailability <br/>
**Request Type**: PUT <br/>
**Parameters**: ```{
    id: ObjectId("id")
}``` <br/>
**Headers**: ```{
    authorization: "bearer GENERATED_TOKEN"
}``` <br/>
**Response**: ``` {
        "data": "Booking is cancelled successfully"
}``` <br/>
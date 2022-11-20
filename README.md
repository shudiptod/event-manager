## Event Manager

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode: auto restarting server after file changes 
$ yarn start:dev

# production mode
$ yarn start:prod
```

---
## Database 
- MySQL
- Name: `event_manager`
- PORT: `3306`
- host: `localhost`
- username: `root`
- password: `root`

### NB: Database is configured at src/app.module.ts

--- 
## Endpoints 

[ 1 ]  Event List API, where we can get all active events with pagination.
- Endpoint : `/events/active`
- Method: `GET`
- Query Parameters: 
  +  per_page
  + current_page


- Example: http://localhost:3000/events/active?per_page=2&current_page=3

- Response: 
```bash
{
  "events": [
    {
      "id": "15",
      "title": "Demo Event 6",
      "start_at": "2023-11-06T18:59:01.000Z",
      "end_at": "2023-11-29T18:59:01.000Z"
    }
  ],
  "pagination": {
    "total": 5,
    "total_pages": 3,
    "per_page": 2,
    "current_page": 3
  }
}
```
[ 2 ] Event Details API, where we can get single event information  

- Endpoint : `/events/:id`
- Method: `GET`

- Example: http://localhost:3000/events/8

- Response: 
```bash
{
  "id": "8",
  "title": "Bangla Seminar",
  "start_at": "2022-11-07T00:59:01.000Z",
  "end_at": "2022-11-10T00:59:01.000Z",
  "total_workshops": 3
}
```

[ 3 ] Workshop List API, where we can get all the active workshops of a single event  

- Endpoint : `/events/:id/workshops/active`
- Method: `GET`

- Example: http://localhost:3000/events/11/workshops/active

- Response: 
```bash
{
  "id": "11",
  "title": "Demo Event 2",
  "start_at": "2023-11-06T18:59:01.000Z",
  "end_at": "2023-11-29T18:59:01.000Z",
  "workshops": [
    {
      "id": "6",
      "title": "Demo Workshop 1",
      "description": "This is a demo workshop",
      "start_at": "2023-11-07T18:59:01.000Z",
      "end_at": "2023-11-08T18:59:01.000Z"
    },
    {
      "id": "7",
      "title": "Demo Workshop 12",
      "description": "This is a demo workshop",
      "start_at": "2023-11-07T18:59:01.000Z",
      "end_at": "2023-11-08T18:59:01.000Z"
    },
    {
      "id": "8",
      "title": "Demo Workshop 2",
      "description": "This is a demo workshop",
      "start_at": "2023-11-07T18:59:01.000Z",
      "end_at": "2023-11-08T18:59:01.000Z"
    }
  ]
}
```
[ 4 ] Workshop Details API, where we can get single workshop information  

- Endpoint : `/workshops/:id`
- Method: `GET`

- Example: http://localhost:3000/workshops/2

- Response: 
```bash
{
"id": "2",
"title": "IELTS Listening Workshop",
"description": "An important part of your IELTS writing mark includes idea organization, easy-to-understand language, and standard writing conventions. Your writing needs to be clearly written and follow a certain style. More specifically, you need well-written paragraphs to get a higher IELTS mark.",
"start_at": "2022-11-07T00:59:01.000Z",
"end_at": "2022-11-10T00:59:01.000Z",
"total_reservations": 6
}
```

[ 5 ] A workshop reservation API  

- Endpoint : `/reservations`
- Method: `POST`
- Example: http://localhost:3000/reservations
- Body:
```bash
{
  "workshop_id":3,
  "name":"New User",
  "email":"new@mail.com"
}
```
- Response: 
```bash
{
  "name": "New User",
  "email": "new@mail.com",
  "workshop": {
    "id": "3",
    "title": "Bangla Shahitto",
    "description": "Bangla amader matrivasha",
    "start_at": "2022-11-07T18:59:01.000Z",
    "end_at": "2022-11-07T19:59:01.000Z"
  },
  "event": {
    "id": "8",
    "title": "Bangla Seminar",
    "start_at": "2022-11-07T00:59:01.000Z",
    "end_at": "2022-11-10T00:59:01.000Z"
  },
  "id": "13"
}
```

## Stay in touch

- Author - [Shudipta Das](https://www.linkedin.com/in/shudipta-das-8645241a9/)

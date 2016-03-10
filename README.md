# encore-api

Node server for communicating between devices and persisting the images.

## Technology

```
Server: Node.js
Communication: HTTP via Express
Persistance layer: MongoDB via MongoLabs with Mongoose ORM
Message queueing: RabbitMQ via CloudAMQP
Email: Sendgrid
```

## Experience mapped to tech | software

| User experiences:                 | Tech / Software                            |
|-----------------------------------|--------------------------------------------|
| User steps into 'recording booth' |                                            |
| Prompt to start experience        | A/V                                        |
| Instructional video               | ^same                                      |
| Browse artists                    | Large touch screen, web client             |
| Artist info and photo             | ^same                                      |
| User strikes a pose               |                                            |
| Camera takes a photo              | HTML5 Web Cam API                          |
| Add filter                        | HTML5 Canvas filters                       |
| Add doodle                        | HTML5 Canvas drawing                       |
| Add graphics                      | ^same                                      |
| Prompted to write a memory        |                                            |
| Write a memory                    | HTML5 Canvas drawing                       |
| Send photo to email               | Client sends photos to server              |
|                                   | Stored on AWS                              |
|                                   | Emailed via SendGrid                       |
| Share on social media             | Facebook and Twitter APIs                  |
| Send to display wall              | Server sends photo to 'display' web client |
| Thank you                         |                                            |
| System resets                     |                                            |


## Client data flow

Clients:
* Client A: First client where people explore and select the artist as well as input their name for the experience.
* Client B: Photo taking client inside the recording booth
* Client(s) C: One of X number of iPad apps (web canvas or native if necessary) for editing photos and sending/sharing.

```
A1. Get artists                  GET /artists
A2. Create user & Select artist  POST /users -> publish nextTaker

B1. Take nextTaker               POST /publish/taker -> consume nextTaker
B2. Persist photo                POST /users/:id/photos
  * repeat as needed until they get booted (X number of photos? X number of seconds/minutes?)
B3. Boot current user            POST /publish/editor -> publish nextEditor

C1. Consume nextEditor in queue  POST /consume/editor -> consume nextEditor
C2. Share photos with friends    POST /share/email
C3. Repeat C1.
```

## Data schema

```
User
  uid: MongooseUID
  name: String
  email: String
  photos: [uid, ... ]

Photo
  uid: MongooseUID
  url: String
  artist: MongooseUID
  filters: Object

Artist
  uid: MongooseUID
  name: String
  genre: [ String ]
  description: String
  artifacts: [ { name, location, description } ]
```


## API

### `GET /artists`

Response body:
```
[
  {
    name: String,
    genre: String
    description: String
    artifacts: [
      {
        name: String,
        description: String,
        location: String,
      },
      ...
    ]
  },
  ...
]
```

### `POST /users`

Request body:
```
{
  name: String,
  artistId: MongooseUID,
}
```

### `POST /user/:id/photos`

### `POST /publish/taker`

### `POST /publish/editor`

### `POST /consume/taker`

### `POST /consume/editor`

### `POST /share/email`

Later add `/insta`, `/twitter`, `/fb`, etc.

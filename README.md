# Flight Notification System - Backend

This project is a backend service for managing flight information and notifying users of any changes in schedule, status, or gate of arrival or departure.
It is built using Node.js with Express, and includes features such as email notifications via Gmail's SMTP and real-time notifications using Socket.IO.

## Features
- **Email Notifications**: Send emails to users notifying them of any changes in their flight details using Nodemailer.
- **Real-time Notifications**: Use Socket.IO to emit notifications to users about changes in flight status or schedule, which can be listened to by the frontend.
- **Flight Information Management**: Manage and update flight details such as schedule, status, and gate information by using the API's provided.

## TechStack Used
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for Node.js. Fast, unopinionated, minimalist web framework for Node.js.
- **Nodemailer**: Module for sending emails using SMTP.
- **Socket.IO**: Library for real-time web applications, enabling real-time, bidirectional communication between web clients and servers.
  
## Prerequisites

- Node.js and npm installed on your machine.
- Environment variables configured (see code).

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Pushkar808/flightStatus.git
   cd flightStatus
   ```
   
2. **Pull & Checkout to Frontend Branch**:
    ```bash
    git pull origin
    git checkout frontend
   ```
    
3. **Installing Required Packages**:

   ```bash
   npm install
   ```
   
4. **Starting the Server**:

   ```bash
   node index.js
   ```
   OR
   ```bash
   npx nodemon index.js
   ```
   
### Note
For frontend code checkout to "frontend" branch of this repo
   
### Contact
For questions or support, please contact pushkargupta808@gmail.com.

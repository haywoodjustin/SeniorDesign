# Senior Design Project 
## Angular Spotify Companion App 

### Team Members:
- Justin Haywood (haywoojn@mail.uc.edu)
- Lina Kaval (kavalla@mail.uc.edu)
- Samantha Shaw (shaws8@mail.uc.edu)
---
Table of Contents
1. [Team names and Project Abstract](ProjectDeliverables/AboutProject)
2. Project Description
### Description 
Mobile web app development with Spotify API, to create a "party mode" community queue for everyone to add songs. Think along the lines of a jukebox that everyone has access to on their phones. This app will allow people to request songs and the host of the session will be able to play songs based on the queue that builds up. 

3. [User Stories and Design Diagrams](ProjectDeliverables/AssignmentFour)
- User Stories
- Design Diagrams: Level 0, Level 1 and Level 2 
- Description of the Diagrams: including conventions and a brief description of the purpose of each component.
4. [Project Tasks and Timeline](ProjectDeliverables/AssignmentSix)
- Task List
- Timeline
- Effort Matrix
5. [PPT Slideshow (includes ABET Concerns)](https://youtu.be/RsNCSI8AXmc)
6. [Self-Assessment Essays](ProjectDeliverables/AssignmentThree/)
7. [Professional Biographies](ProjectDeliverables/AboutProject/TeamMemberBios)
9. [Budget](ProjectDeliverables/AssignmentSeven)
- expenses to date or statement that there have not been any.
- show monetary value of donated items and donation sources.
10. Appendix
include appropriate references, citations, links to code repositories, and meeting notes.
there should be evidence justifying 45 hours of effort for each team member.


--- 

## Running the App as a Dev as of 10/12/2022 
Currently the development process has required the use of a local Json database to test UI components such as searching for songs to add to the queue and storing the songs being added to the queue. The steps below describe how to start using your machine as a local mock API with basic CRUD operations. 

### Setting up the Database to Run Locally 
1. Run this command on a command prompt to install the Json server globally 

    `$ npm install -g json-server`

2. There is a file named "db.json" located in the backend folder that this server will read off of 
3. The file is filled with songs from this site: https://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/017.html. **Http requests coming from the app are expecting to recieve song objects with this structure.**
    - Note entering the data may result in gross looking Json. Navigate to https://jsonformatter.org/json-pretty-print (or your preferred Json pretty printer) and get the Json in an easier to read format. 
4. Now we will run the server. In your VScode instance open a new terminal. Navigate to the BackEnd directory and enter this command: 

    `$ json-server --watch db.json`

5. To test that the server is running open a browser window and navigate to **localhost:3000**
6. Navigate to localhost:3000/**songs** to make sure you can view the song data 
    - Note: following the same structure as the "songs" directory, you can add directories that are reachable through REST requests by adding more objects to the db.json file. 
7. Now that the database is configured and running correctly you can start using the app. When you are done make sure the go to the terminal running the databse and **enter ctrl + C to stop the server.** 
    - Note that the command in step 4 will need to be ran everytime to start the server and use the app.
8. Link to full instructions and more information on the capabilities of the Json server here: https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d 

# Senior Design Project 
## Angular Spotify Companion App 

### Team Members:
- Justin Haywood (haywoojn@mail.uc.edu)
- Lina Kaval (kavalla@mail.uc.edu)
- Samantha Shaw (shaws8@mail.uc.edu)

### Description 
Mobile web app development with Spotify API, to create a "party mode" community queue for everyone to add songs. Think along the lines of a jukebox that everyone has access to on their phones. This app will allow people to request songs and the host of the session will be able to play songs based on the queue that builds up. 

--- 

## Running the App as a Dev as of 10/10/2022 
Currently the development process has required the use of a local Json database to test UI components such as searching for songs to add to the queue and storing the songs being added to the queue. The steps below describe how to start using your machine as a local mock API with basic CRUD operations. 

### Setting up the Database to Run Locally 
1. Run this command on a command prompt to install the Json server globally 

    `$ npm install -g json-server`

2. Create a file named **db.json** locally for the server to watch. 
3. Fill the file you created with songs from this site: https://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/017.html. **Http requests coming from the app are expecting to recieve song objects with this structure.**
    - Note entering the data may result in gross looking Json. Navigate to https://jsonformatter.org/json-pretty-print (or your preferred Json pretty printer) and get the Json in an easier to read format. 
4. Now we will run the server. Open a VScode instance using the root directory of db.json as your root folder. Open a terminal in VScode and run this command:

    `$ json-server --watch db.json`

5. To test that the server is running open a browser window and navigate to **localhost:3000**
6. Navigate to localhost:3000/**songs** to make sure you can view the song data 
7. Now that the database is configured and running correctly you can start using the app. When you are done make sure the go to the terminal running the databse and **enter ctrl + C to stop the server.** 
    - Note that the command in step 4 will need to be ran everytime to start the server and use the app.
8. Link to full instructions and more information on the capabilities of the Json server here: https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d 

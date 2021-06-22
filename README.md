# Mistplay Backend Challenge
## Summary
Welcome to the Fallout Shelter Underground Vault, where you act as the Overseer with the ability to:
 * Retrieve information regarding each dweller in the Vault
 * Allow dwellers to enter the Vault
 * Retrieve all information regarding a specific dweller by providing their user ID
 * Query the Vault for dwellers that match a specific search filter (i.e: haircolor, eyecolor, age, name)
 * Move time forward to retrieve a search result with dwellers and their updated ages 
 
Please follow along to setup the environment and run the application. 


## Installation and Setup
* Be sure to install...
  * Visual Studio Code
  * Node.js
  * Postman

* Visual Studio Code and Node.js Setup

  * Once you have installed the above, clone this repository to your machine
  * Unzip the cloned repository and open the project folder with Visual Studio Code
  * Open the terminal and run the following command: "npm install" and "npm install express"
 
* Postman Setup
  
  * Sign up or sign into Postman
  * Select your workspace then click on the Collection tab
  * Click on the "+" to open a new tab where you are able to send and receive requests
  * Click on "Body" to view where dweller json data is to be provided
  * Fill out the URL fieldbox with "localhost:5000", as we will be using port 5000
  

## Running the Application
* Within your Visual Studio Code terminal, run the following command: "npm start"
* You should see the following message in your terminal:
  
                                              Server running on port: http://localhost:5000

                                              App has started.

* Now that your app is running, open your browser and enter the following URL into the search: http://localhost:5000
* You should see the following within your browser:

                                              [] 
                                              
* You have received an empty JSON response since there are 0 dwellers in the Underground Vault, look below for the API methods and JSON responses that are possible within this app:
  
  * Get list of dwellers: 
  
      API Method: GET
      
      URL: localhost:5000/dwellers
      
      Ex: localhost:5000/dwellers
      
      
      ![image](https://user-images.githubusercontent.com/24356539/122839143-751a9a00-d2c5-11eb-9d8c-4794ef53c663.png)

      
  * Add a dweller to the Vault: 
  
      API Method: POST
      
      URL: localhost:5000/dwellers
      
      Ex: localhost:5000/dwellers
      
      ![image](https://user-images.githubusercontent.com/24356539/122839097-63d18d80-d2c5-11eb-978e-cbcfb502b361.png)

      
      
  * Get dweller information after providing a userID: 
  
      API Method: GET
      
      URL: localhost:5000/dwellers/userID/"paste userID here"
      
      Ex: localhost:5000/dwellers/userID/1f98cd5a-6e65-4605-a10a-3dccfa814614

      ![image](https://user-images.githubusercontent.com/24356539/122839209-94192c00-d2c5-11eb-95df-0025a93f233e.png)

      
      
  * Get list of dwellers after performing a search query: 
  
      API Method: GET
      
      URL: localhost:5000/dwellers/search?"search filter goes here"="filter parameter goes here"
      
      Note: You can use "&" within the url to do a search with multiple filters
      
      List of Filters:
      
        * name
        
        * haircolor
        
        * eyecolor
        
        * age

        * agelt (less than the specified age)
        
        * agegt (greater than the specified age)
        
      Ex: localhost:5000/dwellers/search?name="sam"&haircolor="blue"&agegt=30
      
      ![image](https://user-images.githubusercontent.com/24356539/122839418-fd00a400-d2c5-11eb-8bff-f009e253f8ac.png)
      
      
      
   * Move time forward, leading to aging dwellers: 
  
      API Method: GET
      
      URL: localhost:5000/dwellers/addyears/"add number of years forward here"
      
      Ex: localhost:5000/dwellers/addyears/5
      
      ![image](https://user-images.githubusercontent.com/24356539/122839595-5537a600-d2c6-11eb-974a-0970a7541f1d.png)


      
     
## If this project was a paid service, how would clients use it?
Key use cases for this project as a paid service would be:

  * Monitoring the number of dwellers in the Underground Vault at any given time

  * Allowing new dwellers to enter the Underground Vault

  * Retrieving information regarding a particular dweller (via their user ID)

  * Retrieving a list of dwellers that match a particular profile (using search filters)

  * Retrieving a list of dwellers that would remain alive after a specified amount of years have gone by 
 
 All the information the client (Overseer) would be able to gather through API requests can give them an edge to make sound decisions in adding new dwellers to the vault, and monitoring the existing dwellers within the vault.

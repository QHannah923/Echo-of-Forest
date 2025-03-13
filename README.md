# 7180-Team-Seven

## Project Name
Echoes of the Forest

## Overview
"Echoes of the Forest" is an interactive educational game designed for children aged 7-12. The game was conceptualized as a way to foster curiosity and learning about birds in a fun, engaging manner. It aims to teach players about various bird species, their feeding habits, and their natural habitats through an interactive,exploratory experience.

## How to view
There is one way to access our project: Use the [T25-Seven team's UQ Zone website URL](https://deco1800teams-t25-seven.uqcloud.net).

## Features
- Food hunt – Players navigate through a lush forest environment, clicking on different areas to reveal food for the bird and collect it into the inventory. After finding all the feed they are taken to the next scenerio where they have to find the bird.

- Bird Discovery - Environmental cues like rustling leaves or moving grass guide players, making exploration more intuitive and engaging. Players have to screen on the screen and find the hidden bird. The hidden birds have actually been placed based on their real world habitat.

- Bird Songs & Information – Once the bird is clicked, it sings its unique song, sourced from real bird databases. A pop-up panel provides detailed information about the bird’s species, behaviors, and habitat, enhancing both the educational and immersive experience.

- Feeding Mechanics – After this players must choose and drag the correct food (insects, seeds, etc.) from their inventory to feed it as a reward for it's song. The feed is based on each bird’s actual dietary needs, reinforcing learning through play.

## Code Structure
### 1. index
- **HTML Location**:[index.html](/var/www/htdocs/index.html)<br>
- **Background design**
Used **jungle-background and shrub** images to create the theme atmosphere.

- **Title Display**
Displays the main title of the game: ‘Echoes of the Forest’.

- **Start button**
Provides a button that, when clicked, jumps to the **feed.html** page to start the game adventure.

- **Retro Style Fonts**
Enhance your game's visuals with retro style fonts via Google Fonts.

- **CSS Location**:[index.css](/var/www/htdocs/index.css)<br>
- Styled the index.html interface.

- **JavaScript Location**:[script.js](/var/www/htdocs/js/script.js)<br>
1. **Button click event**
When the user clicks on the **"Start the Adventure ’** button: it goes to the feed.html screen.

- **Description**: This is the site's start screen. This is where the user can choose to enter and start the **Echoes of the Forest** game.

### 2. feed
- **HTML Location**:[feed.html](/var/www/htdocs/feed.html)<br>

1. **Game Rule Modal Window**
- The Modal window (gameRulesModal) is used to display the game rules and descriptions, and to instruct the player on how to start the game. 
- The player can close the rules modal by clicking the close button (#closeBtn) on the page.

2. **Background music playback and control** 1.
- button control background music play/pause: click the button to switch the music playing state, the icon switch between ‘play’ and ‘pause’. 
- JavaScript use togglePlayPause() function to achieve play/pause control.

3. **Background and game elements rendering** 1.
- Use pictures to set the background elements such as sky, mountains, grass, trees, pond, etc. to give the interface a more natural landscape feel.
- Hidden food elements in trees and clouds, player can click on specific area to find these food.

3. **Hidden Food Elements (Feed Items)**
- Hidden food images (e.g. ‘berry’, ‘fish’, ‘frog’, ‘plant’, etc.) are hidden in their initial state by the class name hidden
- The player needs to find and unlock these food items by exploring specific areas (e.g. trees, clouds or grass).

4. **Collection box in Sidebar** 
- the left sidebar displays a ‘Feed’ counter that keeps track of the number of food items the player has found, with a goal of finding 10 food items. 
- Whenever the player finds a food item, they can add it to the collection box.

5. **Explore Interactive Logic
- Clouds and trees contain elements that can be clicked on or explored by the player. Clicking on them reveals specific food items, e.g. clicking on a pond may reveal fish and algae. Through these explorations, the player is able to find all the food and unlock the next step after completing the quest.

6. **Navigation Buttons***
The ‘Find Birds’ button (nextPageButton) is hidden in the initial screen and is displayed when the player completes the quest (after finding all the feeds), prompting the player to go to the next step.

- **CSS Location**:[feed.css](/var/www/htdocs/feed.css)<br>
- Styling for the feed.html interface.

- **JavaScript Location**:
1. [rule.js](/var/www/htdocs/js/rule.js)<br>
1. **Automatically display the game rules popup when the page is loading**
- use window.onload event listener to execute the code when the whole page is loaded.
- make sure the game rules popup is displayed on page load by modal.style.display = ‘flex’.

2. **Ways to close the popup**
- close button (#closeBtn): when user clicks the ‘close’ button, closeBtn.onclick will be executed, and modal.style.display = ‘display: none’ to hide the popup.

2. [pond.js](/var/www/htdocs/js/pond.js)<br>

1. **Item display and collection**
- Click on specific elements (e.g. flowers, ponds, etc.) to display hidden food or animals such as nectar, frogs, fish, etc.
- Collected items move to Collectible Boxes and update the number of collected items.

2. **Dynamic State Switching**.
- Each time you click on an item, it will switch the display state of the item (show or hide).
- Prevents repeated clicks on the same item by tracking whether it has been shown or collected via a state variable.

3. **Event Binding and Responding** 
- Bind click events to different game elements (e.g. grass, trees, clouds, etc.) to display or move items according to user interactions.
- Support showing frogs, fish, birds, etc. by clicking on ponds or clouds.

4. **User Feedback and Counting**.
- update the collection count as the user collects items, showing the current progress.
- check if all necessary items have been displayed when the element stops animating.

3. [stop.js](/var/www/htdocs/js/stop.js)<br>

1. **Click on an element to show or hide an item**
- User clicking on different elements (e.g. tree, pond, flower, etc.) will toggle the display state of related items (e.g. frog, fish, seed, etc.).

2. **Animation Management**
- After an item has been fully displayed, the element's ‘shaking’ animation stops, prompting the user to complete that part of the exploration.

3. **Status tracking**
- Use variables to track the display state of each item to ensure that the item's visibility state is correctly updated during the interaction.

4. **Toggle function**
- The toggleItem function generalises the logic of showing and hiding items to avoid duplicate code.

5. **Exploration progress control**
- The check function (checkPondItemsShown) is used to stop the animation of the corresponding element when all related items have been discovered.

4. [button.js](/var/www/htdocs/js/button.js)<br>

1. **Collected items**
- When the user clicks on feed (feed) items on the page, add the ‘collected’ class to them to indicate that they have been collected.

2. **Checking collection progress**
- Each time a feed item is clicked, it checks to see if all items have been collected. If all items are collected, the ‘Next Page’ button will be displayed.

3. **Page navigation**
- When clicking the ‘find birds’ button, the user will be redirected to the birds.html page.

- **Description**: This is the feed interface-the food for the birds. At the very beginning, a pop-up window with the game description and rules will automatically appear as a way to inform the user how to proceed. We choose a representative feed for each bird, and the user needs to wiggle the hints to find the hidden feed and collect it into the storage box on the left side by clicking on the feed. Once all the feeds have been collected, a button to go to the next interface (birds) appears to change the interface.

### 3. birds
- **HTML Location**: [birds.html](/var/www/htdocs/birds.html)<br>

1. **Matching and displaying bird information**
- user can drag different food to the corresponding bird to feed, through drag-and-drop (drag-and-drop) to achieve the interaction.
- If the feeding is correct, the system will update the score and play the success sound effect; if it is wrong, the failure sound effect will be played.
- When the score reaches 10, a ‘Congratulations pop-up’ will be shown to indicate that all birds have been fed correctly.

2. **Dynamic Bird and Plant Display** 
- Click on the pond or reeds to show hidden birds.
- Birds will be switched from hidden to visible by setting the Click event.

3. **Popup Window Showing Birds Information** 
- when the user clicks on the bird, the application will call the API and extract the information about the bird from the returned data, then display it in the popup window.

4. **Page Layout and Decoration** **Page Layout and Decoration** 
- the page includes interactive elements of background images (e.g. sky, mountains, grass, etc.), trees, birds, and leaves.
- users can click on leaves or other elements on the page and show or hide content.
- a restart button is provided, which the user can click to restart the game and jump to the feed.html page.

5. **Audio Controls and Interactive Hints**
- the page contains audio controls that play corresponding sound effects on success or failure.
- Users can turn off the sound button to control the state of the audio playback.
- A task-prompt layer appears when the page first loads, directing the user to click on the page to find all the birds.

6. **Score Tracking and Progress Feedback**
- for each bird the user feeds, the score is updated and the current progress is shown in the left sidebar (Score: X/10).
- When all birds have been fed correctly, a congratulations popup will appear to inform the user that the game was completed successfully.

7. **Restart and Page Navigation**. 
- there is a restart button (with refresh icon) on the top right corner of the page, when clicked, it will refresh and jump to the feed.html page.

- **CSS Location**: [bird.css](/var/www/htdocs/bird.css)<br>
- Styled the interface of birds.html.

- **JavaScript Location**: 

1. [storage.js](/var/www/htdocs/js/storage.js)<br>

1. **Fetching data from API or loading data from the cache**
First check if there is cached data in the browser's sessionStorage. If there is cached data, it will be parsed from the cache and displayed directly. If there is no cached data, call the API via fetch() method to get the bird data and store it to sessionStorage.

2. **Cache Function**
Use sessionStorage to store the data temporarily in the browser to avoid repeated API requests after page refresh, optimising loading speed and user experience.

3. **Call PHP proxy file**
The code gets information about the bird from the backend or a third-party API by calling the api.php proxy file.

4. **Error Handling**
If fetching data fails, the catch() method catches the error and outputs an error message on the console.

2. [birds.js](/var/www/htdocs/js/birds.js)<br>
1. **Click events for interface elements** 
- When trees6 is clicked, the hidden birds (birds4) are displayed. 

2. **Get audio link via API** 
- The API (data.gov.au) is called to get the audio data and extract the audio link for each bird. 
- Different birds use different rowNumber to get the corresponding audio link from the dataset.

3. **Bird Audio Playback Controls** 
- Bind a click event to each bird to trigger the playback of the specified audio clip. Example:
Click Canary (bird4) to play its corresponding audio clip.
Click on Pied Butcherbird (bird5) to play another audio clip.

4. **Logic for playing audio**
- Use the playAudio() function to play the audio, and specify the start time and end time of the audio to implement timed playback: after loading metadata, playback starts at the specified time. Use setTimeout() to stop the audio playback timer.

5. **Audio control buttons**
- Close Audio button (closeAudioBtn) can pause the currently playing audio and change the text of the button to ‘Sound paused’.

6. **API Error Handling**
If the API request fails or there is an error parsing the data, the code will output an error message on the console.

3. [feed.js](/var/www/htdocs/js/feed.js)<br>
When the user clicks on #leaf-container, this code causes all the leaves in the container to shake. After removing and reinserting the shake class, the animation will restart.

- **Description**: In this interface, the user firstly needs to find out the hidden bird. Secondly, when clicking on the bird, pop up bird information pop-up and sound will appear at the same time. Users can learn and understand about birds. After that, you can drag the feed in the storage box to the bird to eat, so that you can play the game and learn the knowledge of bird food at the same time.

### 4. API Integration
- **PHP Location**: [api.php](/var/www/htdocs/api.php)<br>
- **Description**: This PHP file manages API calls to retrieve bird information from external sources, such as Wikipedia. It handles data fetching and formatting to display bird details and dietary information on the game interface.

## Authors
- **Xinyi Liao**
- **Shiyue Zhang**
- **Weiting Wang**
- **Sadhika Sahoo**
- **Qianhui Huang**

## Acknowledgments
- Thanks to [Starfall ABC](https://www.starfall.com/h/abcs/) English learning website for project inspiration 
- Thanks to [Australian Government](https://data.gov.au/data/dataset/bird-songs-online) for providing a public database of bird sounds 
- Thanks to [Wikipedia](https://www.wikipedia.org/) for the bird information. 

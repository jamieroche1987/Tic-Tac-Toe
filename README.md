# PORTFOLIO PROJECT - 2

## TIC TAC TOE

## SITE PURPOSE

Tic Tac Toe is a website designed to play the classic game of noughts and crosses
[Here is a link to the final project](https://jamieroche1987.github.io/tic-tac-toe/)

### FINAL DESIGN

![Final project image](/assets/images/testing/amiresponsive.png) Am i Responsive(https://amiresponsive.co.uk/)

### INITIAL IDEA CONCEPT

- My initial idea for the project was to create a game of Tic Tac Toe that can be played with friends and family
- I wanted to make the website to stand out with the colors used.
- I also wanted their to be a score board to keep track of who is winning the most games.
- My target audience is anyone who has an interest in playing tic tac toe with others

* The Features I wanted the project to have are:

  - To make the site easy read
  - Have a players score board
  - Look appealing with the color scheme
  - The user that wins the game starts the next game.
  - Have a pop up message at the end of the game with a button feature to start a new game.

## UX/UI

- The game was created to show my knowledge of JAVASCRIPT including, HTML and CSS
- To provide users with a game that is easy to play and fun
- The user is able to interact with buttons to play the game
- Any interactive buttons should be clear and obvious as to what they do

Site Goals:

- To showcase my skills in JAVASCRIPT, HTML and CSS
- To provide users with an easy to play game
- To provide users with rules on how to play the game
- To make the game easily accessible

## USER STORIES

- As a user, i want to have a rules section so that i can undertand how the game works.-
- As a user, I want the game to be colourful and fun
- As a user, I want to see obvious and clear buttons to play the game
- As a user, I want to see a score board to see who wins the most games

## WIREFRAMES

Wireframes for mobile and desktop can be seen below:

- Wireframe for Game Board Page desktop

  ![wireframes](/assets/images/wireframes/wiremaindesktop.png)

- Wireframe for Game Board Page mobile

  ![wireframes](/assets/images/wireframes/wiremainmobile.png)

- Wireframe for Winning Pop Up message desktop

  ![wireframes](/assets/images/wireframes/wirepopupdesktop.png)

- Wireframe for Winning Pop Up message mobile

  ![wireframes](/assets/images/wireframes/wirepopupmobile.png)

## FEATURES

The Game consists of:

- A heading of TIC TAC TOE

  ![heading](/assets/images/testing/heading.png)

- A section explaining the rules of the game located underneath the heading.

  ![rules](/assets/images/testing/rules.png)

- A page with a 9 empty boxes that when clicked will display an X or and O depending on whose players turn it is.
- On the right of the game is the Score board to keep track of how many games Player X or Player O has won. (everyone time a player wins the score of the winning player will increase by 1)
  ![gameboard](/assets/images/testing/gameboard.png)

- At the bottom of the page is a restart game button which will clear the game board so the game can restart.

  ![restart](/assets/images/testing/restart.png)

- When the games ends with someone winning or the game being drawn a pop up message will appear as seen below.

  ![popup](/assets/images/testing/message.png)

- When the buttons are hovered over they brighten up to make the user aware they are on that button.

* FUTURE FEATURES:

  - I would add a feature that would allow the user to play on their own against a computer.
  - Another feature would be adding a time so each player only has a certain amount of time per move.
  - I would add a feature to stop the first turn of each player being able to select the middle field on the game board.
  - I would add a feature to allow the user to type in their own name instead of the Player X or Player O names.

* COLOR SCHEME

  - I have used various colors that will draw the users to the key elements of the site

  - The background color #2832C2
    ![Background](/assets/images/testing/backgroundblue.png)

  - The Heading and Rules title color #F5F5F5
    ![Heading](/assets/images/testing/headingcolor.png)

  - The game board, background of the score board and restart button color

    ![Game board](/assets/images/testing/gameboard.png)

  - The pop up message has a new game button which is colored #250645 with the text color #466289. It also has a winning message text color #ffd700

    ![popup message](/assets/images/testing/popupbackground.png)
    ![Popup message text](/assets/images/testing/popuptext.png)
    ![Winning text](/assets/images/testing/winningtext.png)

* TYPOGRAPHY

The fonts used for my website are 'Special-Elite' and 'Permanent Marker'. Special Elite is used for all the text and i have used the Permanent Marker for the X and O's on the game board. The font is imported from Google Fonts

![Special elite](/assets/images/testing/specialelite.png)

![Permenent marker](/assets/images/testing/permenentmarker.png)

## TESTING

- As a user, i want to have a rules section so that i can undertand how the game works.

  - Upon loading the Game, you will see a the heading indicating what the game is. Underneath the heading is the rules section which outlines how to play the game. The game board is standing out with its coloring which help the user locate where to play the game. Outcome: `Fulfilled.`

- As a user, I want the game to be colourful and fun:

  - I have used various colors to help show the user the different parts to the game. Using a brighter color for the key elements helps the user navigate around the site. Outcome: `Fulfilled.`

- As a user, I want to see obvious and clear buttons to play the game.

  - I included a restart button at the bottom of the page which will clear all the game board fields. I have also added a new game button on the pop up message which when clicked will restart the game while also increases the score board for the winning player. Outcome: `Fulfilled.`

- As a user, I want to see a score board to see who wins the most games:

  - I included a scoreboard on the right hand side of the game board( on the desktop) which has the scores of the players X and O. It will increase by 1 on the player X or O winning. Outcome: `Fulfilled.`

## DEVICES

- I have tested responsiveness and functionality on the following devices and browsers:

  - Android:

    - Samsung Galaxy Tab A

  - Apple:

    - Ipad mini
    - Iphone 14

  - Desktops/laptops:

    - HP Pavillion Laptop

  - Browsers:

    - Chrome
    - Firefox

## Validators

- I ran all of my code through css-validator and html-validator, and I was given the error of Parse.
- I have since corrected these error and run the validators again and have found no errors. [CSS screenshot](/assets/images/testing/cssvalidator.png) and [HTML screenshot](assets/images/testing/htmlvalidator.png)

- See [HERE](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjamieroche1987.github.io%2Ftic-tac-toe%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) for the full report on CSS Validator
- See [HERE](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjamieroche1987.github.io%2Ftic-tac-toe%2F) for the game page report on HTML Validator\_

- I ran all of my Javascript code through JSHint, No errors found
  See [HERE](assets/images/testing/jsvalidator.png) for JSHint Report

## Lighthouse

- I ran the webpage page live through Chrome Lighthouse and received the following results

![Main Page](/assets/images/testing/lighthouse.png)

## Accessibility

- The Website has been through wave.webaim.org for accessibility testing.
- Found here: https://wave.webaim.org/report#/https://jamieroche1987.github.io/tic-tac-toe/

## SOLVED BUGS AND ERRORS

- I had one error of Parse Error when i ran through the CSS validator which i have since corrected.

## UNSOLVED BUGS OR ERRORS

- There are no errors reporting on the my site

## FUNCTIONALITY

- Pages all load correctly on all device screen sizes
- Each button box has been hovered over to show the difference of brightness when over it
- Each field button has been clicked to confirm an X or O appears when clicked on
- The restart button has been clicked on to confirm it clears all the fields on the game board
- The new game button has been clicked to clear the pop up message and start a new game.
- The game has been played an won multiple times to show that the X and O score board increase on a player winning the game.

# TECHNOLOGIES USED

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS#CSS_3)
- [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)

## PROGRAMS USED

- The project uses [Github](https://github.com/) for utilising git version control
- The project was debugged using [Google Chrome Development tools](https://developer.chrome.co
  m/docs/devtools/)
- The project was tested for responsiveness at different screen sizes using [Am-I-Responsive](http://ami.responsivedesign.is)
- The project's wireframes were designed in [Balsamiq](https://balsamiq.com/wireframes/)
- The project utilised [Favicon](https://favicon.io/) to create the Favicon to the appropriate format

# DEPLOYMENT

## REMOTE DEPLOYMENT:

(Assuming you have already cloned or forked)

- This Game was deployed using GitHub Pages with the following the steps:

1. Click on the `Settings` icon at the top of page in the navigation bar
2. Scroll down until you see `Github Pages`
3. There will be a message box saying `Check it out here` Click on the link to take you to the next page
4. Here you will be greated with a form, `Choose the repository` `Tic-Tac-Toe`
5. Choose the branch in the drop down box, in this case `MAIN`
6. Choose the directory in the next drop down box, in this case `Root`
7. Then click `Save`
8. It may take a few moments for the game to publish, but once live, the box at the top of the page with the site name will turn green and have a `Green` tick to the left of the link to the live page
9. Another way to find the live page is to navigate to settings, on the left menu click on `pages` and this will get you to the same point

- These commands were used for version control during project:

  - git add `example filename` - to add files before committing
  - git commit -m `"example message"` - to commit changes to the local repository
  - git push - to push all committed changes to the GitHub repository
  - git branch - to see which branch currently working on
  - git pull - to pull all code into main branch once the feature branch had been merged and deleted
  - git status - to see if the branch currently working on is upto date or if the are any unstaged

## HOW TO CREATE A BRANCH/TAG OF MAIN:

If you need to `BRANCH` off of the main repository:

1. If you have not already, login in to [GitHub](www.github.com) and go to https://github.com/jamieroche1987/tic-tac-toe
2. On the left side of the screen underneath the nav links, click the drop down box `Main`
3. Inside the box you will see `Create new branch/tag`
4. Inside the text box, enter the new branch or tag name i.e., `Features`
5. Below the Branches Tags tab, you will see `Create branch: Features from "main"`
6. Click on `Create branch: Features from "main"` and you will be taken to the new branch page you just called `Features`

## HOW TO FORK A REPOSITORY:

If you need to `FORK` a repository:

1. If you have not already, login in to [GitHub](www.github.com) and go to https://github.com/jamieroche1987/tic-tac-toe
2. In the top right corner, click `Fork`
3. The next page will be the forked version of https://github.com/jamieroche1987/tic-tac-toe but in your own repository

## HOW TO CLONE A REPOSITORY:

If you need to make a clone of this repository:

1. Fork the repository https://github.com/jamieroche1987/tic-tac-toe using the steps above
2. Above the file list, click `Code` (Usually green at the top right of the code window)
3. Choose if you want to clone using HTTPS, SSH or GitHub CLI, then click the copy button to the right
4. Open Git Bash
5. Change the directory to where you want your clone to go (your own github)
6. Type `git clone` and then paste the URL you copied in step 4
7. Press `Enter` to create your clone

## HOW TO MAKE A LOCAL CLONE

If you need to make a local clone:

1. If you have not already, login in to [GitHub](www.github.com) and go to https://github.com/jamieroche1987/tic-tac-toe
2. Under the repository name, above the list of files, click `Code`
3. Here you will have two options, `Clone` or `Download` the repository
4. You should close the repository using HTTPS, clicking on the icon to copy the link
5. At this point, you can launch the `Gitpod workspace` or choose your own directory
6. Open Git Bash
7. Change the current working directory to the new location of where you want the cloned directory to be
8. Type git clone and then paste the URL you copied in step 4
9. Press Enter,
   to create your local clone to your chosen directory

## CREDITS

- [Stackoverflow](https://stackoverflow.com/search?q=tic+tac+toe+javascript) This was very useful for finding out different elements i wanted to have on my website. Things such as the restart button, adding a pop up message with new game button answers i found here.

- Everybody on slack for pointing me to [W3Schools](https://www.w3schools.com/) for more indepth guides to the correct syntax and uses of Functions in JAVASCRIPT

- Code Institute's Love Maths walkthrough project

## ACKNOWLEDGEMENTS

- My partner Runa Brandes who has taken the time to look and advice me on the areas that need improving or amending. Also putting up with my stress levels when things have got tough when doing this project. Thank you Runa for your contiuned support.

- My Mentor Alex for his brilliant advice on my code, whether my code is right or wrong also for his excellent input in to how to correct my javascript.

- Folarin for his amazing input and help when i was struggling to work out why my Javascript wasnt working as i intended to.

- The Code Institute Slack community who have been there to help and give suggestions and feedback.

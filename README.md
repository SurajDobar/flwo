# flwo 🕹️

**A retro-style party game arcade built for local group fun.**



flwo is a collection of party games designed with a minimalist, monochrome pixel aesthetic. The flagship game, "Mr. White," is a "pass-and-play" experience perfect for lunch breaks or hangouts.

🔗 Play Live: https://flwo.netlify.app/
>click to watch demo video on yt 👇

<a href ="https://youtu.be/bUj3fYWDf9Y"> <img src="https://raw.githubusercontent.com/SurajDobar/flwo/refs/heads/main/flwomainpage.png"></a>



## 🎮 Game Modes

🕵️ Mr. White (Social Deduction)



A game of bluffing and intuition for 3+ players.

The Setup: Every player receives a secret word. Most get the same word (e.g., "Pizza"), but one person (Mr. White) gets a slightly different word (e.g., "Burger").

The Goal:

Civilians: Find the person with the different word.

Mr. White: Blend in and figure out the Civilians' word without getting caught.

The Twist: It's purely "Pass and Play"—no internet required for friends in the same room.

## ✨ Key Features

Retro Pixel UI: A clean, high-contrast black & white aesthetic inspired by old-school arcades.

Custom Animations: Hand-coded JavaScript scrolling text engine (no simple CSS marquees here!).

Single Page Application (SPA): Seamless transitions between menus and game phases using React Router and conditional rendering.

Custom Word Packs: Players can add their own inside jokes or specific words to the game pool.

Leaderboard: Tracks player wins across multiple rounds in a single session.

## 🛠️ Tech Stack

Frontend: React.js (Vite)

Styling: Tailwind CSS

Routing: React Router DOM / Custom State Management

Deployment: Netlify

## 🚀 Run Locally

Want to inspect the code or modify the rules?


1. Clone the repository
``` 
git clone [https://github.com/SurajDobar/flwo.git](https://github.com/SurajDobar/flwo.git)

cd flwo
```

2. Install dependencies
```
npm install
```

3. Start the server
```
npm run dev
```

  
## 🚧 Status

Current Version: Beta 1

This project was built in 6 days as a challenge to master React logic, State Management, and Routing from scratch.

Known Improvements: Optimizing the "Custom Words" persistence and adding mobile-specific touch gestures.

Upcoming: Backend integration for real-time online play.

Made with ❤️ by Suraj Dobar

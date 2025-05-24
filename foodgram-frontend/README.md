# FoodGram App

FoodGram is a mobile application built using React Native and Expo that allows users to:

- Register and log in securely
- Upload and view recipes with video support
- Like/favorite videos
- Comment on recipes
- Upload profile pictures
- Receive push notifications
- Use Google/Apple login

## Project Structure
```
foodgram-frontend/
├── App.js
├── app.json
├── babel.config.js
├── assets/
│   ├── icons/
│   │   └── icon.png
│   └── splash.png
├── client/
│   ├── api/
│   │   └── api.js
│   ├── components/
│   │   ├── RecipeCard.js
│   │   └── VideoPlayer.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── screens/
│   │   ├── ChangePasswordScreen.js
│   │   ├── ChangeUsernameScreen.js
│   │   ├── EditRecipeScreen.js
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── RecipeFeedScreen.js
│   │   ├── RegisterScreen.js
│   │   └── UploadRecipeScreen.js
│   └── utils/
│       └── notifications.js
├── package.json
├── app.json
└── README.md
```

## Setup
1. Install dependencies: `npm install`
2. Start the app: `npx expo start`

## Notes
- Replace API URLs with your backend endpoint.
- Ensure your backend is configured to handle push tokens and authentication properly.
```

# FoodGram

FoodGram is a visual-centric mobile and web platform for food lovers to explore restaurants, share recipes, watch food vlogs, and interact with a vibrant community — all in one app.

---

## Project Structure

foodgram/
├── foodgram-backend/ # Node.js + Express + MongoDB backend
├── foodgram-frontend/ # React Native frontend app
└── README.md

yaml

---

## Features (MVP)

- User Authentication (Register/Login)
- Restaurant & Café Discovery with images and location
- Recipe Videos (short-form) with upload and listing
- User Profiles and follow system
- Push Notifications (Expo)
- Like/Favorite videos
- Profile Picture Upload
- Google & Apple Login (planned for future)
- Map integration (Google Maps/Apple Maps)

---

## Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- AWS S3 for media storage
- JWT Authentication
- Expo Push Notifications API integration

### Frontend
- React Native with Expo
- React Navigation
- AsyncStorage for local token persistence
- Expo Notifications
- Image Picker
- Axios for API calls

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)
- AWS S3 bucket (for media)
- Expo CLI (`npm install -g expo-cli`)

---

### Backend Setup

1. Navigate to backend folder:
   ```bash
   cd foodgram-backend
Install dependencies:

bash
npm install
Create .env file with variables:

env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
Run the backend server:

bash
npm start
Frontend Setup
Navigate to frontend folder:

bash
cd foodgram-frontend
Install dependencies:

bash
npm install
Configure API base URL in your API utility files (localhost or your deployed backend URL)

Run the Expo app:

bash
expo start
Deployment
Backend can be deployed on platforms like Heroku or AWS Elastic Beanstalk.

Frontend Expo app can be built and submitted to App Store / Play Store using EAS build.

Web version can be deployed on Netlify or Vercel.

Postman Collection
(Include link or instructions here to import Postman API testing collection)

Contributing
Feel free to open issues or submit pull requests for improvements or bug fixes.

License
MIT License © [Hanu Koshti]

Contact
For questions or support, contact: hanukoshti@gmail.com

Happy cooking with FoodGram! 🍽️🍕🍜

---

If you want, I can also generate a simple **`package.json`** or any setup scripts next.  
Just ask!


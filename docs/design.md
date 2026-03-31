# CineMatch - Design Document

## 1. Overview
**CineMatch** is a web application that helps users decide what movie to woatch together by swiping (like/dislike) on movies. When two users both like the same movie, a **match** is created.

## 2. Problem Statement
Choosing a movie in a world of countless streaming services, offering countless options is time-consuming and often frustrating. This is multiplied when choosing a movie to watch with other people, due to differing preferences and mood.

## 3. Solution 
Provide a simple interface where:

- Users swipe through movies
- Preferences are recorded
- Matches are automatically detected when users agree during a session

## 4. Scope (MVP)
**Included**

- User registration (username + password)
- User login (no email verification)
- Movie browsing/swiping (like/dislike)
- Match detection between users
- View matched movies

**Not Included (Future Features)**

- Advanced recommendation system
- Group matching
- Push notifications

## 5. System Architecture
#### Frontend

- React (JavaScript)
- Handles UI, user interations, API calls

#### Backend

- Python API (Flask or FastAPI)
- Handles business logic, authentication, matching

#### Database

- Relational database (e.g. SQLite/PostgreSQL)
- Stores users, movies, likes, matches

## 6. Data Model
#### User

- id (int, primary key)
- username (string, unique)
- password (string, hashed)

#### Movie

- id (int, primary key)
- title (string)
- poster_url (string)

#### Like

- id (int, primary key)
- user_id (int, foreign key)
- movie_id (int, foreign key)
- liked (boolean)

#### Match

- id (int, primary key)
- movie_id (int, foreign key)
- user_1_id (int)
- user_2_id (int)

## 7. API Design

## 8. Core Logic (High-Level)

## 9. Frontend Pages

## 10. Project Structure

## 11. Development Plan

#### Phase 1 - Backend Foundations

- Create database models
- Implement user authentication
- Implement movie endpoint

#### Phase 2 - Core Functionality

- Implement swipe system
- Implement match detection system

#### Phase 3 - Frontend

- Build login UI
- Build Swipe UI
- Connect to API

#### Phase 4 

## 12 Risks & Considerations 

- Data consistency when creating matches
- Handling duplicate matches
- Ensuring users don't see same movie repeatedly
- Security (password hashing required)

## 13. Future Improvements

- Group matching (>2 users)
- Recommnedation algorithm
- Movie filtering (genre, rating)
- Deployment (cloud hosting)
- Real-time updates (WebSockets)
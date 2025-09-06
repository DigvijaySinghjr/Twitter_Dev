# Requirements

- User should be able to create a post
    - [The post/tweet cannot be more than 250 chars ]
    - [ Every post/tweet will be having support for image upload]
    
- Any post should be visible to all those users who follow the author 
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- we can comment on a comment
- we can like any comment also
- Retweeting

- User profile:
    - Name
    - Follower count
    - Bio
    - Last 10 tweets from the user 

- Pagination on tweets
- User auth

- Every tweet might be having a hashtag

---

 **"Project Features"** 

---

## Authentication Overview

here implements authentication using Passport, specifically the `passport-jwt` strategy. User passwords are securely hashed with `bcrypt` before being stored in the database.

**Authentication Flow:**
- Passport is set up and initialized as middleware in the application (see `index.js`).
- During sign-in:
    1. The system checks if the user exists in the database.
    2. If the user exists, the provided password is compared to the stored hash using the `comparePassword` method (which uses bcrypt).
    3. If the password matches, a JWT token is generated using the `genJWT()` method (which uses the `jsonwebtoken` package) and returned to the client.


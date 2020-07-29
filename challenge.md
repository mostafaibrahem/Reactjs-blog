![cultiv.llc](https://i.imgur.com/XIN25KK.png)

Cultiv Engineering Frontend Blog Challenge
==


Can you build a simple blog while following our [engineering best practices](https://github.com/cultiv-tech/onboarding/blob/master/README.md)?

## The Challenge

Given that you have a post with the following structure and [wireframe](https://i.imgur.com/VGUKt13.jpg):
```
Post:
- Title: string
- Author: object{id, name}
- Content: markdown
- Next: url
- Prev: url
- Created at: date
```

Use the technology stack you are comfortable with to create a dynamic blog that takes input from an API (API is not provided, mock your api using something like [Mirage.js](https://miragejs.com/)) with the following sections:

- **Home:** List of all blog posts (generate at least 4 posts)
- **Navigation:**
  - Home
  - Login
- **Single post** (follow the wireframe)

## Tests
- Each building block (component, module, etc) should have its own test

## Bonus 
- Mock and consume a GraphQL API

## Instructions

How to attempt this challenge:

1) Create a new repo in your account and note the git url
2) Clone this repo
3) Solve the challenge
4) Set your new repo as the origin: `git remote set-url origin ${your repo url}`
5) Push your solution to your repo

You must follow these steps for your solution to be accepted -- forks or other methods will not be considered.

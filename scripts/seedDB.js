require('dotenv').config()

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/progressing"
);

const goalSeed = [
  {
    title: "Project 3 with React",
    description: "This is our final group project for the UW Bootcamp",
    goalType: "event",
    // endDate: 2021-1-04,
    steps: [
      {
        name: "Presentation",
        steps: [
          {
            name: "Present to class"
          },
          {
            name: "Think of content for slideshow"
          },
          {
            name: "Create slideshow"
          },
          {
            name: "Update final styling"
          }
        ]
        },
      {
        name: "Style page",
        steps: [
          {
            name: "Set up carousel to display goals"
          },
          {
            name: "Configure custom colors"
          },
          {
            name: "Use custom logos and images"
          },
          {
            name: "Create mocks"
          }
        ]
        },
      {
        name: "Develop functionility of page",
        steps: [
          {
            name: "Set up form and push to database"
          },
          {
            name: "Render listed data onto goal component"
          },
          {
            name: "Develop progress bar with algorithm"
          },
          {
            name: "Apply update api's for toggle features"
          },
          {
            name: "Find a way to keep track of time left (moment js?)"
          },
        ]
        },
      {
        name: "Set up login and sign up page",
        steps: [
          {
            name: "Handle error messages"
          },
          {
            name: "Establish routes with react-router-dom"
          },
          {
            name: "Establish authorization with passport"
          },
          {
            name: "Create schema and set up MongoDB"
          },
        ]
        },
      {
      name: "Develop initial page",
      steps: [
        {
          name: "Create login component"
        },
        {
          name: "Create sign up component"
        },
        {
          name: "Create home component"
        },
        {
          name: "Create other pages/components"
        },
      ]
      }
    ],
    user_id: process.env.USER_ID,
    notes: null
  },
  {
    title: "Be more active",
    description: "I want to move more and be less sedantary",
    goalType: "event",
    // endDate: 2021-1-04,
    steps: [
      {
      name: "create physical activity routine",
      steps: []
      },
      {
       name: "eat better",
       steps: [
          {
            name: "eat veggies"
          }
        ], 
      }
    ],
    user_id: process.env.USER_ID,
    notes: "hope it doesn't rain too often when I want to walk"
  }, {
    title: "Brush up on C#",
    description: "I haven't worked with C# in years and want familiarize myself with it",
    goalType: "event",
    // endDate: 2021-12-04,
    steps: [
      {
      name: "Improve skill with C#",
      steps: [
        {
          name: "Read about a C# topic every day"
          }, {
          name: "Do a C# programming exercise every day",
          complete: true
          }
        ]
      }
    ],
    user_id: process.env.USER_ID,
  }, {
    title: "Learn to play guitar",
    description: "I want to learn to play guitar as a creative outlet",
    goaltype: "event",
    // endDate: 2021-5-04,
    steps: [{
      name: "Learn to read guitar tabs",
        steps: [],
        complete: true
      }, 
      {
        name: "Establish a practice routine",
        steps: [{
          name: "something random 1",
          complete: true
            }, {
          name: "something random 2",
          complete: true
            },
            {
          name: "something random 3"  
            }  
          ]
      }
    ],
    user_id: process.env.USER_ID,
  }
];

db.Goals
  .remove({})
  .then(() => db.Goals.collection.insertMany(goalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

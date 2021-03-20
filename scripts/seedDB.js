require('dotenv').config()

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/progressing"
);

const goalSeed = [{
    title: "Be more active",
    description: "I want to move more and be less sedantary",
    goalType: "event",
    milestones: [{
      type: "create physical activity routine",
      actionItems: [{
            type: "daily walk in the park for at least 30 minutes"
          }
        ]
      }
    ],
    user_id: process.env.USER_ID,
    notes: "hope it doesn't rain too often when I want to walk"
  }, {
    title: "Brush up on C#",
    description: "I haven't worked with C# in years and want familiarize myself with it",
    goalType: "event",
    milestones: [{
      type: "Improve skill with C#",
      actionItems: [{
            type: "Read about a C# topic every day"
          }, {
            type: "Do a C# programming exercise every day"
          }
        ]
      }
    ],
    user_id: process.env.USER_ID,
  }, {
    title: "Learn to play guitar",
    description: "I want to learn to play guitar as a creative outlet",
    goaltype: "event",
    milestones: [{
        type: "Learn to read guitar tabs",
        actionItems: [{
            type: "practice reading tabs"
          }, {
            type: "practice finger positioning for tabs"
          }  
        ]
      }, {
        type: "Establish a practice routine"
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

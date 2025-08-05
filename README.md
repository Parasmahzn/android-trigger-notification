# 🕑 [daily_reminder / late_reminder / missed_reminder]

This Node.js-based project is designed to send user reminders through an external API — depending on the use case:

- **daily_reminder**: for regular daily notifications
- **late_reminder**: for sending alerts when a user is late
- **missed_reminder**: for missed events or tasks

Each project (`daily_reminder`, `late_reminder`, `missed_reminder`) shares the same folder structure:
---

## 📁 Project Structure
[your_project]/
├── src/
│ └── index.js # Main reminder function logic
├── test.js # Script to test the reminder API
├── README.md # Project documentation


## 🚀 How to Test

To run the test script for each project, navigate to the project folder and execute:

```bash
cd daily_reminder
node test.js

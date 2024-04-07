import getConfidenceScores from "./index.js";

const testEmails = [
  "rhinos-doves0@icloud.com",
  "gollum.macron-0@icloud.com",
  "grade.pace_0@icloud.com",
  "cutlers.access-0@icloud.com",
  "cottony.probe-0@icloud.com",
  "hearth.dales_07@icloud.com",
  "08_uploads.diehard@icloud.com",
  "johndoe123@icloud.com",
  "sarah.connor@icloud.com",
  "mike_smith78@icloud.com",
  "emily.jones_music@icloud.com",
  "theodore.bear-2024@icloud.com",
  "olivia.parker1990@icloud.com",
  "alex.taylor_pro@icloud.com",
];

const results = getConfidenceScores(testEmails);
console.log(results);

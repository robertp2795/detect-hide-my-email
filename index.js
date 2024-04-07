import fs from "fs/promises"; // Note: Using the promise-based version of 'fs' for async/await support
import path from "path";

// Load the dictionary words into a Set for efficient lookups
const dictionaryPath = new URL("dictionary.txt", import.meta.url);
const dictionaryWords = new Set(
  (await fs.readFile(dictionaryPath, "utf8")).split(/\r?\n/)
);

const getConfidenceScores = (input) => {
  // Convert the input to an array if it is not already.
  const emails = Array.isArray(input) ? input : [input];

  // Process each email to assign confidence scores
  const results = emails.map((email) => {
    // Remove the @icloud.com domain from the email address.
    const trimDomain = email.split("@")[0];

    // Split the email address into keywords and keep only the keywords that are longer than 2 characters.
    const keywords = trimDomain
      .split(/[-._]/)
      .filter((keyword) => keyword.length > 2)
      .map((keyword) => keyword.toLowerCase().replace(/\d/g, "")); // Also remove numbers here

    // Count the number of words found in the dictionary.
    const foundWords = keywords.filter((keyword) =>
      dictionaryWords.has(keyword)
    ).length;

    // Assign confidence based on the number of found words.
    let confidence;
    if (foundWords === 0) {
      confidence = 0;
    } else if (foundWords === 1) {
      confidence = 50;
    } else {
      confidence = 100;
    }

    // Return the email and its confidence score
    return { email, confidence };
  });

  return results;
};

export default getConfidenceScores;

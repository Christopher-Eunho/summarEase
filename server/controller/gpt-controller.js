import axios from "axios";
import openai from "../chatgpt/chatgpt.js";
const clientUrl = "http://localhost:3000/";

function generateSummaryPrompt(url) {
    return `Provide a summary of this webpage in 60 words.
  
  Webpage: ${url}`;
 };

function generateKeywordPrompt(url) {
  return `Provide 8 keywords for this webpage in comma separated format.

Webpage: ${url}`;
};

function toStringArray(completionText, delimiter) {
  return completionText.slice(2).split(delimiter);
}

export const getTopics = async (url) => {

}

export const getTitle = async (url) => {

}

export const getSummary = async (url) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(url),
      temperature: 0.6,
      max_tokens: 200
    });
    //res.status(200).json({ result: completion.data.choices[0].text });
    const summary = completion.data.choices[0].text
    console.log(summary);
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}
 

export const handleUrl =  async (req, res) => {
    const url = req.body.url;
    const summary = getSummary(url);
    const topics = getTopics(url);
    const title = getTitle(url);

    
  
  }
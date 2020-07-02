require('dotenv').config()

module.exports={
  assistantId: process.env.ASSISTANT_ID,
  sessionId: process.env.SESSION_ID,
  api_key:process.env.API_KEY,
  url:process.env.URL,
  wordspace_id:process.env.WORKSPACE_ID,
  workspace_url:process.env.WORKSPACE_URL,
  skill_id:process.env.SKILL_ID,
}
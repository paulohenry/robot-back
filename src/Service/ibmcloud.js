const AssistantV2 = require('ibm-watson/assistant/v2');
const AssistantV1 = require('ibm-watson/assistant/v1')
const { IamAuthenticator } = require('ibm-watson/auth');
const watsonconfig = require('../Config/config-watson')


let session_id= ''
let response_v2= ''
let response_v1=''

// const assistant_v1 = new AssistantV1({

// })

const assistant_v1 = new AssistantV1({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({apikey: watsonconfig.api_key}),
  url: watsonconfig.url,
  disableSslVerification: true,
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});

const assistant_v2 = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({apikey: watsonconfig.api_key}),
  url: watsonconfig.url,
  disableSslVerification: true,
  headers: {
    "X-Watson-Learning-Opt-Out": "true",    
  }
});

module.exports.chatMessage = async(data) =>{
  
  await assistant_v2.createSession({
    assistantId: process.env.ASSISTANT_ID
    })
    .then(res => {
      session_id = res.result.session_id   
      console.log(session_id)
     
    })
    .catch(err => {
      session_id = err
      })
  
  await assistant_v2.message({
    assistantId: process.env.ASSISTANT_ID,
    sessionId: session_id ,
    input: {
      'message_type': 'text',
      'text': data.fala
      }})
    .then(res => {
     response_v2=res   
    })
    .catch(err => {
      response_v2=err      
    })
  return response_v2
}

module.exports.createIntents = async(date)=>{
  await assistant_v1.createIntent({
    workspaceId:process.env.SKILL_ID,
    includeAudit:true,
    intent:date.intent,
    description:date.description,
    examples:[]
  })
    .then(res=>{
      response_v1 = res
    })
    .catch(err=>{
      response_v1 = err
    })
    return response_v1
}
module.exports.listIntents = async()=>{
    await assistant_v1.listIntents({
      workspaceId:process.env.SKILL_ID,
      _export:true,
      includeAudit:true,
      pageLimit:20,
      sort:'updated',
      
    })
    .then(res=>{
      response_v1 = res
    })
    .catch(err=>{
      response_v1 = err
    })
    return response_v1
} 
module.exports.removeIntent = async(data)=>{
  await assistant_v1.deleteIntent({
    workspaceId:process.env.SKILL_ID,
    intent:data.intent,    
})
.then(res=>{ 
  console.log(res)
  response_v1=res
})
.catch(err=>{
  console.log(err)  
  response_v1=err
})
return response_v1
}
module.exports.removeExample = async(data)=>{
  await assistant_v1.deleteExample({
      workspaceId:process.env.SKILL_ID,
      intent:data.intent,
      text:data.text
  })
  .then(res=>{
    
    response_v1=res
  })
  .catch(err=>{
   
    response_v1=err
  })
  return response_v1
}

module.exports.createExample = async(data)=>{
  await assistant_v1.createExample({
      workspaceId:process.env.SKILL_ID,
      intent:data.intent,
      text:data.text,
      includeAudit:true,
  })
  .then(res=>{
    response_v1=res
  })
  .catch(err=>{
    response_v1=err
  })
  return response_v1
}
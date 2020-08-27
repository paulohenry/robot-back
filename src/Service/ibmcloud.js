const AssistantV2 = require('ibm-watson/assistant/v2');
const AssistantV1 = require('ibm-watson/assistant/v1')
const { IamAuthenticator } = require('ibm-watson/auth');



let session_id= ''
let response_v2= ''
let response_v1=''


module.exports.assistanteV1 = (apikey,url)=>{
  try{
  const assistant_v1 = new AssistantV1({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({apikey: apikey}),
  url: url,
  disableSslVerification: true,
  headers:{
    'X-Watson-Learning-Opt-Out': 'true'
    }
  });
  return assistant_v1
 }catch(error){
   return error
 }
}
module.exports.assistanteV2 = (apikey,url)=>{
  try{
  const assistant_v2 = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({apikey:apikey}),
  url: url,
  disableSslVerification: true,
  headers: {
    "X-Watson-Learning-Opt-Out": "true",    
   }
  });
  return assistant_v2
 }catch(error){
  return error
 }
}
module.exports.chatMessage = async(transcricao, assistantV2,ibm_assistant_id) =>{
  
  await assistantV2.createSession({
    assistantId: ibm_assistant_id
    })
    .then(res => {
      session_id = res.result.session_id   
      console.log(session_id)
     
    })
    .catch(err => {
      session_id = err
    })
  
  await assistantV2.message({
    assistantId: ibm_assistant_id,
    sessionId: session_id ,
    input: {
      'message_type': 'text',
      'text': transcricao
      }})
    .then(res => {
     response_v2=res   
    })
    .catch(err => {
      response_v2=err      
    })
  return response_v2
}

module.exports.createIntents = async(intent,description,assistantV1,skill_id)=>{
  await assistantV1.createIntent({
    workspaceId:skill_id,
    includeAudit:true,
    intent:intent,
    description:description,
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
module.exports.listIntents = async(assistantV1,skill_id)=>{
    await assistantV1.listIntents({
      workspaceId:skill_id,
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
module.exports.removeIntent = async(intent,assistantV1,skill_id)=>{

  await assistantV1.deleteIntent({
    workspaceId:skill_id,
    intent:intent,    
})
.then(res=>{ 
  response_v1=res
})
.catch(err=>{
  console.log(err)  
  response_v1=err
})
return response_v1
}
module.exports.removeExample = async(intent,text,assistantV1,skill_id)=>{
  await assistantV1.deleteExample({
      workspaceId:skill_id,
      intent:intent,
      text:text
  })
  .then(res=>{
    
    response_v1=res
  })
  .catch(err=>{
   
    response_v1=err
  })
  return response_v1
}

module.exports.createExample = async(intent,text,assistantV1,skill_id)=>{
  await assistantV1.createExample({
      workspaceId:skill_id,
      intent:intent,
      text:text,
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
module.exports.listDialog = async(assistantV1,skill_id)=>{
  await assistantV1.listDialogNodes({
    workspaceId:skill_id
  })
  .then(res=>{
    response_v1=res
  })
  .catch(err=>{
    response_v1=err
  })
  return response_v1
}
module.exports.removeDialog = async(dialog_node,assistantV1,skill_id)=>{
  await assistantV1.deleteDialogNode({
    workspaceId:skill_id,
    dialogNode:dialog_node
  })
  .then(res=>{
    response_v1=res
  })
  .catch(err=>{
    response_v1=err
  })
  return response_v1
}
module.exports.createDialog = async(request,assistantV1,skill_id)=>{
  await assistantV1.createDialogNode({
    workspaceId:skill_id,
    title:request.title,
    conditions:request.conditions,
    dialogNode:request.title,
    output:request.output
  })
  .then(res=>{
    response_v1=res;
  })
  .catch(err=>{
    response_v1=err;
  })
  return response_v1
}
module.exports.updateDialog = async(request,assistantV1,skill_id)=>{
  await assistantV1.updateDialogNode({
    workspaceId:skill_id,
    title:request.title,
    dialogNode:request.title,
    newOutput:request.newOutput
  })
  .then(res=>{
    response_v1=res;
  })
  .catch(err=>{
    response_v1=err;
  })
  return response_v1
}
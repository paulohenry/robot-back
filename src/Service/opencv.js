
const cv = require('opencv4nodejs')
const wCap = new cv.VideoCapture(0)

const faceClassifier  = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2)



wCap.set(cv.CAP_PROP_FRAME_WIDTH, 300)
wCap.set(cv.CAP_PROP_FRAME_HEIGHT,300)

const reader = ()=>{
  
  return wCap.read()  
}

const faceDetector =  (frame)=>{
    const detection =  faceClassifier.detectMultiScale(frame.bgrToGray())
    if(!detection.objects.length){
      return frame
    }

    
    detection.objects.forEach((rect, index)=>{
        const blue = new cv.Vec(255,0,0)
         frame.drawRectangle(
          new cv.Point(rect.x, rect.y),
          new cv.Point(rect.x + rect.width, rect.y+ rect.height),
          {color:blue, thickness:2}
        )
    })
   
    return frame
}

module.exports.cam = (face=false)=>{
  
  let frameWithFace = ''
  let data = ''
  let frame = ''
  frame = reader()
  if(face===true){   
    if(frame){
      frameWithFace = faceDetector(frame)
      data = cv.imencode('.jpg', frameWithFace).toString('base64')     
        } 
  }else if(face===false){
    if(frame){
  data = cv.imencode('.jpg', frame).toString('base64')
    }
  }
  return data
}

module.exports.stop = async ()=>{
  await  wCap.release()  
}

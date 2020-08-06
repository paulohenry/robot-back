const tf = require('@tensorflow/tfjs');
const mobilenetModule = require('@tensorflow-models/mobilenet');

const mobilenet = await mobilenetModule.load();
const classifier = knnClassifier.create();



// Add MobileNet activations to the model repeatedly for all classes.
module.exports.classifier = (image)=>{
  const img0 = tf.browser.fromPixels(image);
  const logits0 = mobilenet.infer(img0, 'conv_preds');
  classifier.addExample(logits0, 0);
  return 'classificado'
}
module.exports.predict= (inference)=>{
  const x = tf.browser.fromPixels(inference);
  const xlogits = mobilenet.infer(x, 'conv_preds');    
  const result= classifier.predictClass(xlogits);
  return result
}
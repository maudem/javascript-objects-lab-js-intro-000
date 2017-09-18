const recipes = []

let updateObjectWithKeyAndValue = (object, key, value) => {
  object = Object.assign({}, object)
  object[key] = value
  return object
}

let destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value
  return object
}

let deleteFromObjectByKey = (object, key, value) => {
  let obj = object 
  let newObj = Object.assign({}, object)
  delete newObj.key
  
}
const recipes = []

let updateObjectWithKeyAndValue = (object, key, value) => {
  object = Object.assign({}, object)
  object[key] = value
  return object
}

let destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object= {key: value}
  object;
  return object
}

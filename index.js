const recipes = []

let updateObjectWithKeyAndValue = (object, key, value) => {
  object = Object.assign({}, object)
  object[key] = value
  return object
}

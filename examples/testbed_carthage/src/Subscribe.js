import branch from 'react-native-branch'

console.info("Subscribing to Branch links")

branch.subscribe(({ error, params, uri }) => {
  if (error) {
    console.error("Error from Branch: " + error)
    return
  }

  console.info("Received link response from Branch")

  console.log("params: " + JSON.stringify(params))

  console.log("URI: " + uri)
})
var contentful = require('contentful-management')
var client = contentful.createClient({
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ''
})

// This API call will request a space with the specified ID
client.getSpace('59mi8sr8zemv')
.then((space) => {
  // Now that we have a space, we can get entries from that space
  space.getEntries()
  .then((entries) => {
    console.log(entries.items)
  })

  // let's get a content type
  space.getContentType('product')
  .then((contentType) => {
    // and now let's update its name
    contentType.name = 'New Product'
    contentType.update()
    .then((updatedContentType) => {
      console.log('Update was successful')
    })
  })
})

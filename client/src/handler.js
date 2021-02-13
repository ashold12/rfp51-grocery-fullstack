var handler = {

  URL: '',

  post: function (item, successCB = () => {}, errorCB = () => {}) {
    $.ajax({
      url: URL,
      type: 'POST',
      data: item,
      success: (data) => console.log(`Successful send.... Server Response: ${data}`),
      error: (error) => console.log(`Error sending message: ${err}`)
    })
  },

  retrieve: function (successCB = () => {}, errorCB = () => {}) {
    $.ajax({
      url: URL,
      type: 'GET',
      success: (data) => console.log(`look what i have: ${data}`),
      error: (err) => console.log(`error getting messages from server: ${err}`)
    })
  }
}

export default handler
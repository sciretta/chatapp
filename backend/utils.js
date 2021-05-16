const findUsername = (usernameValue, usernamesArr = []) => {
  let results = []
  usernamesArr.forEach((username) => {
    const isContained = username.includes(usernameValue)
    if (isContained) {
      results = [...results, username]
    }
  })
  return results
}

exports.findUsername = findUsername

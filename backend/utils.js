exports.findUsername = (usernameValue, usernamesArr = []) => {
  let results = []
  usernamesArr.forEach((username) => {
    const isContained = username.includes(usernameValue)
    if (isContained) {
      results = [...results, username]
    }
  })
  return results
}

exports.isUsernameAvaliable = (username, users) =>
  !!users &&
  !users?.map((user) => user.username).includes(username) &&
  username.length >= 3

const users = {};

exports.create = (socket, user) => {
  const id = user;
  let exists = true;
  if (users[id]) {
    exists = true;
  } else {
    exists = false;
    users[id] = socket;
  }
  return { name: id, exists: exists };
};

exports.get = id => users[id];

exports.remove = id => delete users[id];

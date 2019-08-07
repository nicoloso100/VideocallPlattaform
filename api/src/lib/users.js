const users = {};
var newId = 0;

exports.create = (socket) => {
  newId = newId + 1;
  const id = newId.toString();
  users[id] = socket;
  return id;
};

exports.get = id => users[id];

exports.remove = id => delete users[id];

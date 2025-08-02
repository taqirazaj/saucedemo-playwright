export function getRandomUsername(userList) {
  const randomIndex = Math.floor(Math.random() * userList.length);
  return userList[randomIndex];
}

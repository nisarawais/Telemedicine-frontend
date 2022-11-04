export default function authHeader() {
  const user = localStorage.getItem("SavedToken");
  if (user) {
    return { Authorization: user };
  } else {
    return {};
  }
}

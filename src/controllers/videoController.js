const fakeUser = {
  username: "han",
  loggedIn: false,
};

export const trending = (req, res) =>
  res.render("Home", { pageTitle: "Home", fakeUser });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};

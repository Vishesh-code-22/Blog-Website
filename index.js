// importing modules

import express from "express";
import bodyParser from 'body-parser';

// initializing values

const app = express();
const port = 3000;

// storing blogs in this object

let blogs = {
  blog1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis, quis iusto\
voluptas doloribus reprehenderit numquam non dolor soluta maxime cum fugiat\
magni debitis aut voluptatem quaerat vel quasi accusantium quibusdam\
dignissimos excepturi maiores molestiae. Ea officia sunt velit iusto\
laudantium fugiat! Earum nostrum, est laboriosam laudantium beatae incidunt\
rem repudiandae explicabo magni error culpa odit minima nemo necessitatibus\
sunt mollitia, nobis minus tenetur ullam facilis iste quaerat maiores sapiente\
soluta. Eaque dignissimos nam animi nesciunt maxime doloribus delectus unde\
explicabo id cupiditate quo quas similique assumenda voluptate, eos, nihil\
consequuntur est et, autem molestiae necessitatibus numquam deleniti. Iusto,\
consequuntur.",
  blog2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ante massa. Ut nec enim quis nisi scelerisque dapibus.\
Maecenas suscipit finibus purus, vel tempus nunc sagittis ut. Proin a enim consequat, sagittis ante eget, commodo dui. Duis ut\
ligula lacinia, vulputate arcu eget, mollis neque. Nam vitae rutrum nisl. Praesent sit amet ornare erat. Suspendisse pharetra\
egestas massa non porttitor. Ut eget placerat odio. Praesent at rutrum nulla, bibendum condimentum eros. Quisque varius,\
neque a convallis semper, magna lectus sollicitudin leo, sit amet ornare odio nisi ac ex.\
Suspendisse eu rutrum ligula, et vehicula odio. Suspendisse fermentum nec enim eget tristique. Donec at augue sit amet feli\
commodo iaculis. Duis vulputate fringilla nisi, non pellentesque magna mattis gravida. Sed hendrerit ante sapien. \
Morbi ultricies urna pharetra ullamcorper accumsan. Nunc diam massa, viverra id luctus quis, viverra ut leo. \
Fusce imperdiet consectetur tortor vitae gravida. Integer facilisis ut mi non tempor. In a mattis enim. \
Ut id eros sed massa sagittis mattis nec a tellus. Etiam dapibus convallis ante, eget tristique arcu suscipit ac. \
Curabitur scelerisque condimentum velit eu molestie. Nam id tincidunt tortor. Aliquam finibus pharetra lectus, \
consectetur sollicitudin augue facilisis ut.",
  blog3:
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ante massa. Ut nec enim quis nisi scelerisque dapibus.\
Maecenas suscipit finibus purus, vel tempus nunc sagittis ut. Proin a enim consequat, sagittis ante eget, commodo dui. Duis ut\
ligula lacinia, vulputate arcu eget, mollis neque. Nam vitae rutrum nisl. Praesent sit amet ornare erat. Suspendisse pharetra\
egestas massa non porttitor. Ut eget placerat odio. Praesent at rutrum nulla, bibendum condimentum eros. Quisque varius,\
neque a convallis semper, magna lectus sollicitudin leo, sit amet ornare odio nisi ac ex.\
Suspendisse eu rutrum ligula, et vehicula odio. Suspendisse fermentum nec enim eget tristique. Donec at augue sit amet feli\
commodo iaculis. Duis vulputate fringilla nisi, non pellentesque magna mattis gravida. Sed hendrerit ante sapien. \
Morbi ultricies urna pharetra ullamcorper accumsan. Nunc diam massa, viverra id luctus quis, viverra ut leo. \
Fusce imperdiet consectetur tortor vitae gravida. Integer facilisis ut mi non tempor. In a mattis enim. \
Ut id eros sed massa sagittis mattis nec a tellus. Etiam dapibus convallis ante, eget tristique arcu suscipit ac. \
Curabitur scelerisque condimentum velit eu molestie. Nam id tincidunt tortor. Aliquam finibus pharetra lectus, \
consectetur sollicitudin augue facilisis ut.",
  blog4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ante massa. Ut nec enim quis nisi scelerisque dapibus.\
Maecenas suscipit finibus purus, vel tempus nunc sagittis ut. Proin a enim consequat, sagittis ante eget, commodo dui. Duis ut\
ligula lacinia, vulputate arcu eget, mollis neque. Nam vitae rutrum nisl. Praesent sit amet ornare erat. Suspendisse pharetra\
egestas massa non porttitor. Ut eget placerat odio. Praesent at rutrum nulla, bibendum condimentum eros. Quisque varius,\
neque a convallis semper, magna lectus sollicitudin leo, sit amet ornare odio nisi ac ex.\
Suspendisse eu rutrum ligula, et vehicula odio. Suspendisse fermentum nec enim eget tristique. Donec at augue sit amet feli\
commodo iaculis. Duis vulputate fringilla nisi, non pellentesque magna mattis gravida. Sed hendrerit ante sapien. \
Morbi ultricies urna pharetra ullamcorper accumsan. Nunc diam massa, viverra id luctus quis, viverra ut leo. \
Fusce imperdiet consectetur tortor vitae gravida. Integer facilisis ut mi non tempor. In a mattis enim. \
Ut id eros sed massa sagittis mattis nec a tellus. Etiam dapibus convallis ante, eget tristique arcu suscipit ac. \
Curabitur scelerisque condimentum velit eu molestie. Nam id tincidunt tortor. Aliquam finibus pharetra lectus, \
consectetur sollicitudin augue facilisis ut.",
  blog5:
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ante massa. Ut nec enim quis nisi scelerisque dapibus.\
Maecenas suscipit finibus purus, vel tempus nunc sagittis ut. Proin a enim consequat, sagittis ante eget, commodo dui. Duis ut\
ligula lacinia, vulputate arcu eget, mollis neque. Nam vitae rutrum nisl. Praesent sit amet ornare erat. Suspendisse pharetra\
egestas massa non porttitor. Ut eget placerat odio. Praesent at rutrum nulla, bibendum condimentum eros. Quisque varius,\
neque a convallis semper, magna lectus sollicitudin leo, sit amet ornare odio nisi ac ex.\
Suspendisse eu rutrum ligula, et vehicula odio. Suspendisse fermentum nec enim eget tristique. Donec at augue sit amet feli\
commodo iaculis. Duis vulputate fringilla nisi, non pellentesque magna mattis gravida. Sed hendrerit ante sapien. \
Morbi ultricies urna pharetra ullamcorper accumsan. Nunc diam massa, viverra id luctus quis, viverra ut leo. \
Fusce imperdiet consectetur tortor vitae gravida. Integer facilisis ut mi non tempor. In a mattis enim. \
Ut id eros sed massa sagittis mattis nec a tellus. Etiam dapibus convallis ante, eget tristique arcu suscipit ac. \
Curabitur scelerisque condimentum velit eu molestie. Nam id tincidunt tortor. Aliquam finibus pharetra lectus, \
consectetur sollicitudin augue facilisis ut.",
};
let keys = Object.keys(blogs);

// initializing middleware

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// taking care of HTTP reqs

app.get("/", (req, res) => {
  let lastIndex = keys.length - 1;
  let blogsToShow = [];
  let blogsDemo = [];
  for (let i = 0; i < 3 ; i++){
    blogsToShow[i] = (lastIndex - 2) + i;
    blogsDemo[i] = blogs[keys[blogsToShow[i]]].substring(0, 500) + "...";
  }
  res.render("index.ejs", { blogsToShow, keys, blogsDemo });
});

app.get("/blogs", (req, res) => {
  let len = keys.length;
  let blogsToShow = [];
  let blogsDemo = [];
  for (let i = 0; i < len ; i++){
    blogsToShow[i] = i;
    blogsDemo[i] = blogs[keys[blogsToShow[i]]].substring(0, 150) + "...";
  }
  res.render("blogs.ejs", { blogsToShow, keys, blogsDemo });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.get("/edit", (req, res) => {
  let len = keys.length;
  let blogsToShow = [];
  let blogsDemo = [];
  for (let i = 0; i < len ; i++){
    blogsToShow[i] = i;
    blogsDemo[i] = blogs[keys[blogsToShow[i]]].substring(0, 150) + "...";
  }
  res.render("edit.ejs", { blogsToShow, keys, blogsDemo });
});

app.get("/delete", (req, res) => {
  let len = keys.length;
  let blogsToShow = [];
  let blogsDemo = [];
  for (let i = 0; i < len ; i++){
    blogsToShow[i] = i;
    blogsDemo[i] = blogs[keys[blogsToShow[i]]].substring(0, 150) + "...";
  }
  res.render("delete.ejs", { blogsToShow, keys, blogsDemo });
}); 

app.get("/showBlog/:id", (req, res) => {
  let blogId = req.params.id;
  let blogName = keys[blogId];
  let blogContent = blogs[blogName];
  res.render("showBlog.ejs", { blogName, blogContent, keys });
});

app.get("/editBlog/:id", (req, res) => {
  let blogId = req.params.id;
  let blogName = keys[blogId];
  let blogContent = blogs[blogName];
  res.render("editBlog.ejs", { blogName, blogContent, keys });
});

app.get("/deleteBlog/:id", (req, res) => {
  let blogId = req.params.id;
  let blogName = keys[blogId];
  let blogContent = blogs[blogName];
  res.render("deleteBlog.ejs", { blogName, blogContent, keys });
});

app.post("/deleteThisBlog/:id", (req, res) => {
  const blogToDelete = req.params.id;
  const keyIndex = keys.indexOf(blogToDelete);
  delete blogs[blogToDelete];
  keys.splice(keyIndex, 1);
  console.log(`Blog: '${blogToDelete}' has been deleted.`);
  res.redirect("/delete");
});

app.post("/editThisBlog/:id", (req, res) => {
  const blogToEdit = req.params.id;
  const keyIndex = keys.indexOf(blogToEdit);
  let newBlog = req.body;
  blogs[newBlog.blogTitle] = newBlog.blogContent;
  if (blogToEdit != newBlog.blogTitle){
    delete blogs[blogToEdit];
    keys[keyIndex] = newBlog.blogTitle;
  }
  console.log(`Blog: '${blogToEdit}' has been updated.`);
  res.redirect("/edit");
});

app.post("/submitBlog", (req, res) => {
  let newBlog = req.body;
  blogs[newBlog.blogTitle] = newBlog.blogContent;
  keys.push(newBlog.blogTitle);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

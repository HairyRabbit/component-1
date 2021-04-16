function update(id: string, content: string) {
  let tag = document.head.querySelector(`style#${id}`)
  if(!tag) {
    tag = document.createElement('style')
    tag.id = id
    document.head.appendChild(tag)
  }

  tag.innerHTML = content
}

update('index.scss', `
.body-d874b {
  color: red;
}

.page {
  padding: 20px;
}

.title-1cb55 {
  color: green;
}

.article-01932 {
  color: black;
}
`)
    
export const enum style {
  body = "body-d874b",
  title = "title-1cb55",
  article = "article-01932"
}

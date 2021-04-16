function update(id: string, content: string) {
  let tag = document.head.querySelector(`style#${id}`)
  if(!tag) {
    tag = document.createElement('style')
    tag.id = id
    document.head.appendChild(tag)
  }

  tag.innerHTML = content
}

update('F:\workspace\my\component-1\packages\react\Avatar\index.module.css.ts', /*css*/`
.main-d0885 {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  user-select: none;
}

.size_xs-622dd {
  width: 1.5rem;
  height: 1.5rem;
}

.size_sm-9f896 {
  width: 2rem;
  height: 2rem;
}

.size_md-671c1 {
  width: 2.5rem;
  height: 2.5rem;
}

.size_lg-0b5b2 {
  width: 3.5rem;
  height: 3.5rem;
}

.size_xl-4b751 {
  width: 5rem;
  height: 5rem;
}

.shape_circle-fb334 {
  border-radius: 50%;
}
.shape_rounded-b56f5 {
  border-radius: 4px;
}
`)
    
export enum style {
  main = "main-d0885",
  size_xs = "size_xs-622dd",
  size_sm = "size_sm-9f896",
  size_md = "size_md-671c1",
  size_lg = "size_lg-0b5b2",
  size_xl = "size_xl-4b751",
  shape_circle = "shape_circle-fb334",
  shape_rounded = "shape_rounded-b56f5"
}

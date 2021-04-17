function update(id: string, content: string) {
  let tag = document.getElementById(id)
  if(!tag) {
    tag = document.createElement('style')
    tag.id = id
    document.head.appendChild(tag)
  }

  tag.innerHTML = content
}

const file_path = 'F:/workspace/my/component-1/packages/react/Avatar/style.css.ts'

update(file_path, /*css*/`\
.main-d0885 {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  user-select: none;
  background-color: lightgray;
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

.round_none-51524 {
  border-radius: 0;
}

.round_round-7a72c {
  border-radius: 4px;
}

.round_circle-7bde9 {
  border-radius: 50%;
}

.round_size_lg-43749 {
  border-radius: 2px;
}

.round_size_md-3639c {
  border-radius: 4px;
}

.round_size_xl-af968 {
  border-radius: 8px;
}
`)
    
export enum style {
  main = "main-d0885",
  size_xs = "size_xs-622dd",
  size_sm = "size_sm-9f896",
  size_md = "size_md-671c1",
  size_lg = "size_lg-0b5b2",
  size_xl = "size_xl-4b751",
  round_none = "round_none-51524",
  round_round = "round_round-7a72c",
  round_circle = "round_circle-7bde9",
  round_size_lg = "round_size_lg-43749",
  round_size_md = "round_size_md-3639c",
  round_size_xl = "round_size_xl-af968"
}
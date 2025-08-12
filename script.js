
/////////////* Part 1 : Getting Started ////////////////////

var thisStyle = 'var(--main-bg)'

const body = document.body

const mainEl = document.querySelector("main")
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

console.log(mainEl.textContent);
mainEl.style.backgroundColor = thisStyle

mainEl.classList.add("flex-ctr")
body.append(mainEl)

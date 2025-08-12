
var menuLinks = [   /* in part 3 */
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];


/////////////* Part 1 : Getting Started ////////////////////

var thisStyle = 'var(--main-bg)'

const body = document.body

const mainEl = document.querySelector("main")
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

console.log(mainEl.textContent)
mainEl.style.backgroundColor = thisStyle

mainEl.classList.add("flex-ctr")
body.append(mainEl)

/////////////** Part 2 : Creating a Menu Bar ////////////////////
var thisStyle2 = 'var(--top-menu-bg)'
const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = thisStyle2

/////////////*** Part 3: Adding Menu Buttons ////////////////////

let a = ""
menuLinks.forEach(link => {
  a = document.createElement("a")
  a.setAttribute("href", link.href)
  a.textContent = link.text;
  topMenuEl.appendChild(a)
});
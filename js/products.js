const RAF = requestAnimationFrame
const nav = document.querySelector('product-mobile-menu')
const threshold = $nav.getBoundingClientRect()
let updating = false

const handleScroll = () => {
  console.info('updating')
  if (window.scrollY >= threshold.top || window.pageYOffset >= threshold.top)
    nav.classList.add('nav--fixed')
  else
    nav.classList.remove('nav--fixed')
  updating = false
}

window.onscroll = () => {
  if (updating) return
  else {
    updating = true
    RAF(handleScroll)
  }
}
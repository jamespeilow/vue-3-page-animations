/**
 * Transitions for the Home component.
 */
import gsap from 'gsap'

function beforeEnter(el) {
  if (!document.querySelector('.column')) { 
    return
  }

  gsap.set('.column', {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
  })
}

function enter(el, onComplete) {
  if (!el.querySelector('.column')) { 
    done()
    return
  }

  gsap.to('.column', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 0.5,
    stagger: 0.2,
    onComplete,
  })
}

export default {
  beforeEnter,
  enter,
}
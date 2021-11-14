/**
 * Transitions for the Home component.
 */
import gsap from 'gsap'

function beforeEnter(el) {
  gsap.set('.content__carousel', {
      x: '100%',
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%)',
    })
  gsap.set('.content__image', {
    x: 60,
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
  })
  gsap.set('.content__video', {
    x: 12,
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
  })
}

function enter(el, onComplete) {
  const enterTl = gsap.timeline({
    easing: 'power3.out',
    onComplete
  });

  enterTl
    .to('.content__carousel', {
      x: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1,
    })
    .to('.content__image', {
      x: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 0.6,
      stagger: 0.1,
    }, '-=0.5')
    .to('.content__video', {
      x: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1,
    }, '-=0.5')
}

export default {
  beforeEnter,
  enter,
}
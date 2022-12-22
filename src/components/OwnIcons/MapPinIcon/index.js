import { createIcon } from '@chakra-ui/icons'

// using `path`
export const MapPinIcon = createIcon({
  displayName: 'MapPinIcon',
  viewBox: '0 0 200 200',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 12C23 19 14 25 14 25C14 25 5 19 5 12C5 9.61305 5.94821 7.32387 7.63604 5.63604C9.32387 3.94821 11.6131 3 14 3C16.3869 3 18.6761 3.94821 20.364 5.63604C22.0518 7.32387 23 9.61305 23 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 15C15.6569 15 17 13.6569 17 12C17 10.3431 15.6569 9 14 9C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> ),
})

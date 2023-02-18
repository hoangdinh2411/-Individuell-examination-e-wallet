import bitcoin from '../images/vendor-bitcoin.svg'
import ninja from '../images/vendor-ninja.svg'
import blockchain from '../images/vendor-blockchain.svg'
import evil from '../images/vendor-evil.svg'

export const vendors = [
  {
    id: 0,
    image: bitcoin,
    name: 'Select a vendor',
    background: '#FFF',
    color: '#000',
  },
  {
    id: 1,
    image: bitcoin,
    name: 'Bitcoin INC',
    background:
      'linear-gradient(248.04deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34',
    color: '#000',
  },
  {
    id: 2,
    image: ninja,
    name: 'Ninja Bank',
    background:
      'linear-gradient(248.3deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #222222',
    color: '#C4C4C4',
  },
  {
    id: 3,
    image: blockchain,
    name: 'Block Chain INC',
    background:
      'linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, rgba(0, 0, 0, 0) 100%), #8B58F9',
    color: '#C4C4C4',
  },
  {
    id: 4,
    image: evil,
    name: 'Evil Corp',
    background:
      'linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355',
    color: '#C4C4C4',
  },
]

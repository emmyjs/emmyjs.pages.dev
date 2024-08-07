import { load, html, useRef } from 'emmy-dom/server'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export function counter ({ el }) {
  el.className = 'flex flex-col justify-center items-center space-y-3'
  const count = useRef(0)
  
  const spawnToast = (position) => {
    Toastify({
      text: `Counter value changed to ${count.current}`,
      style: {
        background: '#1F2937',
        color: '#fff',
        borderRadius: '10px',
      },
      gravity: 'bottom',
      position: position,
      duration: 600
    }).showToast()
  }

  const increaseCounter = () => {
    count.current++
    spawnToast('right')
  }

  const decreaseCounter = () => {
    count.current--
    spawnToast('left')
  }

  el.useEffect(() => {
    el.querySelector('#plusButton').addEventListener('click', increaseCounter)
    el.querySelector('#minusButton').addEventListener('click', decreaseCounter)
  }, [])

  return () => html`
    <h2 class='text-2xl font-bold'>Counter</h2>
    <p id='counter'>${ count.current }</p>
    <div class='flex flex-row justify-center items-center space-x-2'>
      <button id='plusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        +
      </button>
      <button id='minusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        -
      </button>
    </div>
  `
}

load(counter, 'Counter')

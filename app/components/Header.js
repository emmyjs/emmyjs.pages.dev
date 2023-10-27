import { load } from "../../emmy.js";

function Header () {
  const [hidden, setHidden] = this.useState(true);

  this.useEffect(() => {
    this.querySelector('[data-collapse-toggle]').addEventListener('click', () => {;
      setHidden(!hidden());
    });
  }, ['didMount']);

  this.useEffect(() => {
    const target = this.querySelector('#navbar-default');
    target.setAttribute('aria-expanded', !hidden());
    target.classList = hidden() ? 'hidden w-full md:block md:w-auto' : 'w-full md:block md:w-auto';
  }, [hidden]);

  return /*html*/`
    <nav class="border-gray-200 z-40">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://emmyjs.github.io/" class="flex items-center">
          <img src="/logo.png" alt="Emmy.js logo" class="h-8 mr-3">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Emmy.js</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div class="hidden w-50 md:block md:w-auto" id="navbar-default" aria-expanded="false">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <a href="/" onclick="route(event)" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/docs" onclick="route(event)" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Docs</a>
            </li>
            <li>
              <a href="/contact" onclick="route(event)" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

load(Header, 'Header');
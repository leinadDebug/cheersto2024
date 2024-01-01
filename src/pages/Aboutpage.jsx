import React, { useState } from "react";

function aboutpage() {
  const [isClicked, setisClicked] = useState(false);
  const [isAboutClicked, setisAboutClicked] = useState(false);
  const [isContactClicked, setisContactClicked] = useState(false);

  const Handleclick = () => {
    setisClicked(!isClicked);
    console.log(isClicked);
  };

  const HandleAbout = () => {
    setisAboutClicked(!isAboutClicked);
  };
  const HandleContact = () => {
    setisContactClicked(!isContactClicked);
  };

  return (
    <div className=" m-10 flex flex-col gap-52">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            onClick={Handleclick}
            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className={`${
              isClicked ? "block" : "hidden"
            } duration-700 absolute mt-14 `}
            class={` z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul class="py-2" aria-labelledby="dropdow">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white font-Mogilte">
            L3inad
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            React Front-End Developer
          </span>
          <div class="flex mt-4 md:mt-6">
            <a
              onClick={HandleAbout}
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              About
            </a>
            <a
              onClick={HandleContact}
              class=" inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
            >
              Message
            </a>
          </div>
        </div>
      </div>
      <div>
        <section>
          <p
            className={`${
              isAboutClicked ? "block" : "hidden"
            } font-Santor p-10 hover:animate-pulse`}
          >
            The Admin, Daniel Akujuaobi Chukwudi Eyinaeya , Tech Enthusiast and
            a React software dev, presents his apprieciation to his family,
            friends and loved ones in a unique and creative way. Showing how
            creative and proficient he is on Front-End eng.
          </p>
        </section>

        <p
          className={`${isContactClicked ? "block" : "hidden"} font-TrialRoman`}
        >
          To Contact:
          <ol>
            <li>email: akujuaobidaniel@gmail.com </li>
            <li> github: leinadDebug</li>
            <li>LinkedIn: Akujuaobidaniel</li>
            <p>Wishing you the very Best in the year 2024</p>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default aboutpage;

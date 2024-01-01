import React, { useState } from "react";


function Button({click}) {
  return (
    <div className="mt-16">
      {/* <!-- Modal toggle --> */}
      <button 
      
        non-onClick={click}
        data-modal-target="select-modal"
        data-modal-toggle="select-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        className="w-[100%] bg-transparent text-orange-400"
      >
        Toggle modal
      </button>

      {/* <!-- Main modal --> */}
    </div>
  );
}

export default Button;

import React, { useState } from "react";
import Button from "./Button";
import Cards from "./cards";

function Homepage() {
  const [popQuestion, setpopQuestion] = useState(false);

  const handlepop = () => {
    setpopQuestion(!popQuestion);
  };
  return (
    <>
      <div className=" p-5 m-5 rounded-md bg-orange-800">
        <div className="flex flex-col gap-5 mx-10 mt-8 ">
          <section className=" bg-amber-200  p-4 md:p-28 rounded-small md:rounded-medium lg:rounded-large ">
            {" "}
            <h2 className="text-6xl align-top font-Mogilte text-orange-500 ">
              HAPPY NEW YEAR
            </h2>
            <p className=" font-Santor text-lg font-light text-orange-400  ">
              {" "}
              Welcome to the year 2024
            </p>
          </section>
          <div className="flex text-pretty text-md ">
            <p className="text-orange-100 font-Bellefair text-right md: ">
              Seasonal greetings to you, The Admin wishes you greater things
              ahead, if you are part of the few people who got this, its a
              reminder of how special you are to The Admin and how you've played
              an important role in the year 2023. You've impacted alot to The
              Admin and i hope i did the same to you. i welcome you to the year
              2024 wishing you more grace, more favor 😋 , money 🤑 and
              happiness in this new year. Keep being the best you are and May
              God bless ya. thank you.{" "}
            </p>
          </div>
        </div>

        {/* this next page depend on your answer to one question */}
        {popQuestion && (
          <div
            className="
           text-amber-400 md:flex  md:gap-36"
          >
            <p className=" mt-10 lg:mt-20 px-5 font-Bellefair md:text-3xl">
              What best describes your relation with the Admin?
            </p>

            <Cards />
          </div>
        )}

        <Button click={handlepop} />
      </div>
    </>
  );
}

export default Homepage;

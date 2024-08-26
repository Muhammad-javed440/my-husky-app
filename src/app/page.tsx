"use client";
import Image from "next/image";
import AboutPage from "../components/AboutPage";
import styles from "./app.module.css";
import Button from "@/components/Button";
import Javed from "../../public/javed.jpg";
import Javed1 from "../../public/javed1.jpg";
import { use, useEffect, useState } from "react";
import CoditionalRandering from "@/components/CoditionalRandering";
import { useContext } from "react";
import { countContext } from "@/components/Context";
import Link from "next/link";
export default function Home() {
  const [name, setName] = useState("Muhammad Javed");
  const [age, setAge] = useState(45);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const obj = useContext(countContext);
  console.log(obj);

  const changeName = () => {
    setName("Muhammad Ali");
    setAge(35);
  };

  useEffect(() => {
    console.log("use effect called");
  }, [name]);
  useEffect(() => {
    console.log("2nd use effect called");
  }, [age]);
  useEffect(() => {
    console.log("3rd use effect called");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [count]);
  return (
    <main >
      <div className="flex flex-col py-4 m-4 bg-red-950" >
        <AboutPage />
        <button
          className="btn btn-primary py-2 mx-auto
         bg-green-600 rounded-md hover:bg-green-800
          hover:text-white"
        >
          Click me
        </button>
        <div className="mx-auto">
          <Image
            className={styles.img}
            width={150}
            height={150}
            alt="nature"
            src={Javed}
          />
        </div>
        <Button />
        <div className="mx-auto">
          <Image
            src={Javed1}
            alt=" picture"
            width={800}
            height={500}
            className="w-[800px] h-[400px] rounded-xl "
          />
        </div>

        <Button />
        <div className="mx-auto">
          <h1
            className="bg-yellow-300 text-center text-4xl text-bold 
          py-4 px-4"
          >
            Use State
          </h1>
          <p
            className="bg-yellow-300 text-center text-4xl text-bold 
          py-4 px-4"
          >
            {" "}
            {name} is {age}.
          </p>
          <button
            className="btn btn-primary py-2 mx-auto
             bg-green-600 rounded-md
              hover:bg-green-800
               hover:text-white"
            onClick={changeName}
          >
            Click me
          </button>
          <br></br>
          <br></br>
          <br></br>
          <button
            className="btn btn-primary py-2 mx-auto
   bg-green-600 rounded-md
    hover:bg-green-800
     hover:text-white"
            onClick={() => setCount(count + 1)}
          >
            on Click increment = {count}
          </button>
        </div>

        <CoditionalRandering />

        {show == true ? (
          <div className="mx-auto">
            <Image
              src={Javed1}
              alt=" picture"
              width={800}
              height={500}
              className="w-[800px] h-[400px] rounded-xl "
            />
          </div>
        ) : (
          <div className="mx-auto">
            <Image
              className="w-[800px] h-[400px] rounded-xl "
              width={150}
              height={150}
              alt="nature"
              src={Javed}
            />
          </div>
        )}

        <button
          className=" mx-auto bg-green-950 rounded-lg my-2 py-2
       hover:text-white"
          onClick={() => {
            setShow(!show);
          }}
        >
          Click me
        </button>
      </div>
      <h1 className="bg-yellow-300 text-center text-4xl text-bold py-4 px-4">
        Context Api
      </h1>
      <p className="bg-blue-300 text-center text-xl text-bold py-2 px-2 m-2" >
        <Link href="/test" >Test</Link>
      </p>
      <p className="bg-green-400 text-center m-2  text-bold py-4 px-4">
        {obj.count}
      </p>
      <div className="flex flex-row gap-2 py-2">
        <button
          className="btn btn-primary py-2 mx-auto
     bg-green-600 rounded-md
      hover:bg-green-800
       hover:text-white"
          onClick={() => obj.setCount(++obj.count)}
        >
          Increment
        </button>

        <button
          className="btn btn-primary py-2 mx-auto
     bg-green-600 rounded-md
      hover:bg-green-800
       hover:text-white"
          onClick={() => obj.setCount(--obj.count)}
        >
          Decrement
        </button>
      </div>
    </main>
  );
}

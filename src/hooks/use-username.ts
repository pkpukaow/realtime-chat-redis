import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const ANIMALS = [
  "cat",
  "dog",
  "bird",
  "rabbit",
  "hamster",
  "turtle",
  "snake",
  "rabbit",
];
const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymous-${word}-${nanoid(5)}`;
};

export const useUsername = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUserName(stored);
      } else {
        const username = generateUsername();
        localStorage.setItem(STORAGE_KEY, username);
        setUserName(username);
      }
    };

    main();
  }, []);

  return { userName };
};

import { useState, useEffect } from "react";

export function useTyping(words, speed = 76, pause = 2400, deleteSpeed = 36) {
  const [text, setText]       = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timer;

    if (!deleting) {
      setText(word.slice(0, charIdx + 1));
      if (charIdx + 1 === word.length) {
        timer = setTimeout(() => setDeleting(true), pause);
      } else {
        timer = setTimeout(() => setCharIdx((c) => c + 1), speed);
      }
    } else {
      setText(word.slice(0, charIdx - 1));
      if (charIdx - 1 === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
        setCharIdx(0);
        timer = setTimeout(() => {}, 100);
      } else {
        timer = setTimeout(() => setCharIdx((c) => c - 1), deleteSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, wordIdx, charIdx, deleting, words, speed, pause, deleteSpeed]);

  return text;
}

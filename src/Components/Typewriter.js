import React from "react";
import TextLoop from "react-text-loop";
import Fade from "react-reveal/Fade";

const wordList = [
  { item: "constantly rebranding", emoji: "🚀" },
  { item: "probably having a coffee", emoji: "☕" },
  { item: "trying to innovate", emoji: "🧪" },
  { item: "resilient by definition", emoji: "🐜" },
  { item: "always growing", emoji: "🌱" },
  { item: "coding for fun", emoji: "🥴" },
  { item: "coding for peace", emoji: "😌" },
  { item: "coding for personal growth", emoji: "🤓" },
  { item: "a writer", emoji: "🖋️" },
  { item: "a social worker", emoji: "🥰" },
  { item: "a self-proclaimed cook", emoji: "👨‍🍳" },
];

const Typewriter = () => {
  return (
    <div>
      <Fade bottom delay={750}>
        <h3 className="subtitle is-size-4  is-size-5-mobile  has-text-white">
          and I'm{" "}
          <TextLoop adjustingSpeed={100} delay={1700} noWrap={true}>
            {wordList.map(({ item, emoji }) => {
              return (
                <span
                  key={Math.random()}
                  className="is-size-4  is-size-5-mobile has-text-white"
                >
                  {item}
                  <span role="img" aria-label={item}>
                    {" "}
                    {emoji}
                  </span>
                </span>
              );
            })}
          </TextLoop>
        </h3>
      </Fade>
    </div>
  );
};
export default Typewriter;

import { useState } from "react";

/* eslint-disable react/prop-types */
const Questions = ({
  questions,
  question,
  questionNo,
  setQuestionNo,
  setAnswers,
}) => {
  const { question_text, options, options_type } = question;
  const [selectedOptionId, setSelectionOptionId] = useState(null);
  const handleNextQuestion = () => {
    setQuestionNo((prevState) => prevState + 1);

    // if (answers.length > 0) {
    //   const existingAnswer = answers.find(
    //     (each) => each.questionNo === questionNo
    //   );
    //   console.log(existingAnswer);

    //   if (existingAnswer) {
    //     setAnswers((prevAns) =>
    //       prevAns.map((answer) =>
    //         answer.questionNo === existingAnswer.questionNo
    //           ? { ...answer, selectedOptionId }
    //           : answer
    //       )
    //     );
    //   }
    // } else {}
    setAnswers((prevAns) => [...prevAns, { questionNo, selectedOptionId }]);
  };
  const handleSelectedOption = (optionId) => {
    setSelectionOptionId(optionId);
  };

  const RenderOptions = () => {
    if (options_type === "DEFAULT") {
      return (
        <ul className="flex justify-between w-full flex-wrap gap-8">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelectedOption(option.id)}
              className={`flex-auto   text-xl rounded-md p-4 w-2/5 
              ${
                selectedOptionId === option.id
                  ? "bg-[#5B6F94] text-[#F8FAFC]"
                  : "bg-[#EBF3FF] text-[#334155]"
              } 
                `}
            >
              {option.text}
            </li>
          ))}
        </ul>
      );
    } else if (options_type === "IMAGE") {
      return (
        <ul className="flex justify-between w-full flex-wrap gap-8">
          {options.map((option) => (
            <img
              onClick={() => handleSelectedOption(option.id)}
              src={option.image_url}
              key={option.id}
              alt={option.text}
              className={`flex-auto rounded-md w-2/5
                ${
                  selectedOptionId === option.id
                    ? "border border-[#263868]"
                    : ""
                }
                `}
            />
          ))}
        </ul>
      );
    } else if (options_type === "SINGLE_SELECT") {
      return (
        <select
          onChange={(event) => handleSelectedOption(event.target.value)}
          value={selectedOptionId || options[0].text}
          className="border-3 rounded border-[#263868] p-2"
        >
          {options.map((option) => (
            <option
              key={option.id}
              className={`flex-auto text-xl rounded-md p-4 w-2/5 
                ${
                  selectedOptionId === option.text
                    ? "bg-[#ECF1FF] text-[#0967D2]"
                    : "bg-white text-[#323F4B] "
                }
                `}
              value={option.text}
            >
              {option.text}
            </option>
          ))}
        </select>
      );
    }
  };

  return (
    <div
      data-testid="questionItem"
      className="flex flex-col justify-between w-3/5 p-8 bg-white"
    >
      <div>
        <h1 className=" text-[#164687] text-xl font-medium ">
          {questionNo}. {question_text}
        </h1>
        <hr className="my-8" />
        <RenderOptions />
      </div>
      {questionNo < questions.length && (
        <button
          onClick={handleNextQuestion}
          className="self-end bg-[#164687] text-white rounded text-sm font-medium p-4 mt-4"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Questions;

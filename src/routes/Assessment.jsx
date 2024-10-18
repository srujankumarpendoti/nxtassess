import { useEffect, useState } from "react";
import Header from "../components/Header";
import Failure from "../components/Failure";
import Questions from "../components/Questions";
import Information from "../components/Information";
import Loading from "../components/Loading";

const Assessment = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questionNo, setQuestionNo] = useState(1);
  const [answers, setAnswers] = useState([]);
  console.log(answers);

  useEffect(() => {
    const url = "https://apis.ccbp.in/assess/questions";
    const options = {
      method: "GET",
    };
    async function getData() {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        setIsFetched(true);
        setQuestionsData(data.questions);
      } else {
        setIsFetched(false);
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      {isFetched ? (
        <section className="flex w-full h-[90vh] p-4 bg-[#FAFBFE]">
          <Questions
            questions={questionsData}
            question={questionsData[questionNo - 1]}
            questionNo={questionNo}
            setQuestionNo={setQuestionNo}
            setAnswers={setAnswers}
            answers={answers}
          />
          <Information
            questions={questionsData}
            questionNo={questionNo}
            setQuestionNo={setQuestionNo}
            answers={answers}
          />
        </section>
      ) : isLoading ? (
        <Loading />
      ) : (
        <Failure />
      )}
    </>
  );
};

export default Assessment;

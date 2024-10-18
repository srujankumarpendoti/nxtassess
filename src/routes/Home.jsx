import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleStartAssessment = () => {
    navigate("/assessment");
  };
  return (
    <>
      <Header />
      <section className="w-full flex justify-around items-center p-20">
        <div className="p-8 rounded-md drop-shadow-2xl">
          <h3 className="text-[#164687] text-3xl font-bold mb-4">
            Instructions
          </h3>
          <p className="text-2xl text-[#496387] font-medium flex">
            <span className="text-[#475569] font-normal">1.</span>
            <span className="px-2">Total Questions: </span>
            <span className="font-normal">10</span>
          </p>
          <p className="text-2xl text-[#496387] font-medium flex">
            <span className="text-[#475569] font-normal">2.</span>
            <span className="px-2">Types of Questions: </span>
            <span className="font-normal">MCQs</span>
          </p>
          <p className="text-2xl text-[#496387] font-medium flex">
            <span className="text-[#475569] font-normal">3.</span>
            <span className="px-2">Duration: </span>
            <span className="font-normal">10 Mins</span>
          </p>
          <p className="text-2xl text-[#496387] font-medium flex">
            <span className="text-[#475569] font-normal">4.</span>
            <span className="px-2"> Marking Scheme: </span>
            <span className="font-normal">
              Every Correct response, get 1 mark
            </span>
          </p>
          <p className="text-2xl text-[#496387] font-normal flex">
            <span className="text-[#475569]">5. </span>
            <span className="px-2">
              All the progress will be lost, if you reload during the assessment
            </span>
          </p>
          <button
            onClick={handleStartAssessment}
            className="bg-[#164687] text-white py-2 px-4 my-8 rounded-md text-base"
          >
            Start Assessment
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/dr8jg61z3/image/upload/v1728724404/NXT%20Assess/Group_mmyrtr.png"
          className="w-2/5 ml-4"
          alt="assessment"
        />
      </section>
    </>
  );
};

export default Home;

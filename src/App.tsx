import useAgeCalculator from "./hooks/useAgeCalculator";

import DateInputArea from "./DateInputArea";
import YearsOldArea from "./components/YearsOldArea";
import Attribution from "./Attribution";

function App() {
  const { errorMessage, theDate, age, handleInput, onSubmit } =
    useAgeCalculator();

  return (
    <>
      <main className="relative mx-8 max-w-[85vw] rounded-[1.5rem] rounded-br-[100px] bg-white p-6 pb-8 max-md:w-[32rem] md:rounded-br-[12.5rem] md:p-14 md:pb-4 lg:w-[840px]">
        <DateInputArea
          theDate={theDate}
          errorMessage={errorMessage}
          onSubmit={onSubmit as () => void}
          handleInput={handleInput}
        />
        <YearsOldArea age={age} />
        <Attribution />
      </main>
    </>
  );
}

export default App;

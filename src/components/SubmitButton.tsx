import Arrow from "../assets/images/icon-arrow.svg";

function SubmitButton({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className="flex max-md:justify-center md:justify-end mb-[-2.1rem] md:mb-[-2.5rem]">
      <button
        title=""
        type="submit"
        className="w-20 h-20 items-center rounded-full bg-purple hover:bg-offblack focus:bg-offblack p-4 max-md:h-16 max-md:w-16"
        onClick={onSubmit}
      >
        <img src={Arrow} alt="Submit" />
      </button>
    </div>
  );
}

export default SubmitButton;

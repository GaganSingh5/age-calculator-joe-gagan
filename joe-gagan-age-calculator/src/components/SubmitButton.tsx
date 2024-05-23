import Arrow from "../assets/images/icon-arrow.svg";

function SubmitButton({ submit }) {
  return (
    <div className="flex justify-end">
      <button
        title=""
        type="button"
        className="w-14 h-14 bg-purple rounded-full p-4"
        onClick={submit}
      >
        <img src={Arrow} alt="" />
      </button>
    </div>
  );
}

export default SubmitButton;

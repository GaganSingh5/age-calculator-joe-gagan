export default function DateFieldInput({
  label,
  value,
  placeholder,
  errorMessage,
  onChange,
}: {
  label: string;
  value: string | undefined;
  placeholder: string;
  errorMessage: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const error = errorMessage !== undefined;

  return (
    <div className="flex flex-col gap-2 w-full max-w-40">
      <label htmlFor={label} className="uppercase max-md:text-sm">
        {label}
      </label>
      <input
        type="number"
        min="1"
        max={
          label === "Day"
            ? "31"
            : label === "Month"
            ? "12"
            : `${new Date().getFullYear()}`
        }
        className="remove-arrow text-black font-bold rounded border border-lightgray px-4 md:px-5 py-3 w-full max-w-40 md:w-40 text-5 md:text-[2rem] focus-within:outline-purple focus-within:outline"
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          borderColor: error ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)",
        }}
      />
      {errorMessage && (
        <p className="text-lightred text-sm md:text-base">{errorMessage}</p>
      )}
    </div>
  );
}

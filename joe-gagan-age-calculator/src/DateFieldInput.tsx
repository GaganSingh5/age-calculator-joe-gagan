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
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="uppercase max-md:text-sm">
        {label}
      </label>
      <input
        className="text-black font-bold rounded border border-lightgray px-5 py-3 w-full max-w-40 text-5 md:text-[2rem]"
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          borderColor: error ? "hsl(0, 100%, 67%)" : "hsl(0, 0%, 86%)",
        }}
      />
      {errorMessage && <p className="text-lightred">{errorMessage}</p>}
    </div>
  );
}

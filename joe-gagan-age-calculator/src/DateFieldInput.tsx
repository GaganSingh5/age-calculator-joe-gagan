export default function DateFieldInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label for={label} className="uppercase">
        {label}
      </label>
      <input
        className="text-black font-bold rounded border border-lightgray px-5 py-3 w-40 text-[2rem]"
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

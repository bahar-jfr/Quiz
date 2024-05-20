import { useOptionsContext } from "../../context/OptionsContext";

export function IntroSection() {
  const { optionsState, optionsDispatch } = useOptionsContext();
  return (
    <div className="bg-fuchsia-500 rounded-md text-white w-1/3 h-2/3">
      <h1>welcome</h1>
      <p>start</p>
      <button
        onClick={() => {
          optionsDispatch({ type: "CHANGE_PAGE", payload: 1 });
        }}
      >
        get start
      </button>
    </div>
  );
}

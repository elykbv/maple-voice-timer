import useSystemStore from "../stores/systemStore";
function Systems() {
  const { top, left, right, bottom } = useSystemStore();

  return (
    <>
      Top: {top ? "on" : " off"}
      Left: {left ? "on" : " off"}
      Right: {right ? "on" : " off"}
      Bottom: {bottom ? "on" : " off"}
    </>
  );
}

export default Systems;

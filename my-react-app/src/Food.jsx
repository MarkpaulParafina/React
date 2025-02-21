
function Food() {
    const food1 = "Regular Milktea";
    const food2 = "Taro Milktea";

  return (
    <ul>
        <li>Fraffe</li>
        <li>{food1}</li>
        <li>{food2.toLocaleUpperCase()}</li>
    </ul>
  );
}

export default Food;
import { useParams } from "react-router-dom";

// interface RouteParams {
//   coinId: string;
// }
export default function Coin() {
  const { coinId } = useParams<{ coinId: string }>();

  return <h1>Coin: {coinId}</h1>;
}

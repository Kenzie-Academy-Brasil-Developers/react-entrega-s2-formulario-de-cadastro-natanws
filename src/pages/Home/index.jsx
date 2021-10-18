import { useParams } from "react-router";
import { HomeContainer } from "./styles";

const Home = () => {
  const params = useParams();

  return (
    <HomeContainer>
      <div>Seja bem-vindo! {params.name}</div>
    </HomeContainer>
  );
};

export default Home;

import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const { ocid } = useParams<{ ocid: string }>();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">캐릭터 상세 페이지</h1>
      <p>OCID: {ocid}</p>
    </div>
  );
};

export default CharacterPage;

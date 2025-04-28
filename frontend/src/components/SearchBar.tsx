import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가
import axios from "../api/axios";

const SearchBar = () => {
  const [characterName, setCharacterName] = useState("");
  const navigate = useNavigate(); // ✅ useNavigate 훅 호출

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };

  const handleSearch = async () => {
    if (!characterName.trim()) {
      alert("캐릭터 이름을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.get("/character/search", {
        params: { name: characterName },
      });

      const ocid = response.data;
      console.log("조회된 ocid:", ocid);

      // ✅ 조회된 ocid를 가지고 /character/:ocid 페이지로 이동
      navigate(`/character/${ocid}`);
    } catch (error) {
      console.error("캐릭터 조회 중 오류 발생:", error);
      alert("캐릭터를 찾을 수 없습니다.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <input
        type="text"
        placeholder="캐릭터 이름을 입력하세요"
        value={characterName}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-l px-4 py-2 w-64 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
      >
        검색
      </button>
    </div>
  );
};

export default SearchBar;

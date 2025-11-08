import CharacterCard from "../CharacterCard";

export default function CharacterCardExample() {
  const character = {
    id: "1",
    name: "NEXUS-7",
    description: "Advanced AI entity with quantum processing capabilities. Primary directive: Data analysis and pattern recognition.",
  };

  return <CharacterCard character={character} />;
}

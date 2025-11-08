import CharacterList from "../CharacterList";

export default function CharacterListExample() {
  const characters = [
    {
      id: "1",
      name: "NEXUS-7",
      description: "Advanced AI entity with quantum processing capabilities.",
    },
    {
      id: "2",
      name: "CIPHER",
      description: "Elite hacker specializing in cryptographic systems and network infiltration.",
    },
  ];

  return (
    <div className="h-screen">
      <CharacterList characters={characters} />
    </div>
  );
}

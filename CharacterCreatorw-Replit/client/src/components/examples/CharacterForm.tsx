import CharacterForm from "../CharacterForm";

export default function CharacterFormExample() {
  const handleSubmit = (data: any) => {
    console.log("Character created:", data);
  };

  return (
    <div className="h-screen">
      <CharacterForm onSubmit={handleSubmit} />
    </div>
  );
}

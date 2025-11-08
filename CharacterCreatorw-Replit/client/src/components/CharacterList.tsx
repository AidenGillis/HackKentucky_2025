import { type Character } from "./CharacterCard";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  characters: Character[];
  onDelete: (id: string) => void;
}

export default function CharacterList({ characters, onDelete }: CharacterListProps) {
  const sortedCharacters = [...characters].reverse();
  
  return (
    <div className="h-full flex flex-col border-r-2 border-primary">
      <div className="border-b-2 border-primary p-6">
        <h2
          className="text-2xl font-bold text-primary tracking-widest"
          data-testid="text-characters-title"
        >
          &gt; CHARACTERS
        </h2>
      </div>
      <div
        className="flex-1 overflow-y-auto p-6 space-y-4"
        data-testid="container-character-list"
      >
        {sortedCharacters.length === 0 ? (
          <div
            className="text-muted-foreground text-sm text-center py-8"
            data-testid="text-empty-state"
          >
            NO CHARACTERS DETECTED_
            <br />
            CREATE YOUR FIRST CHARACTER
          </div>
        ) : (
          sortedCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
}

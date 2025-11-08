import { User, X } from "lucide-react";

export interface Character {
  id: string;
  name: string;
  profilePicture?: string;
  description: string;
}

interface CharacterCardProps {
  character: Character;
  onDelete: (id: string) => void;
}

export default function CharacterCard({ character, onDelete }: CharacterCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(character.id);
  };

  return (
    <div
      className="border-2 border-primary p-4 hover-elevate active-elevate-2 transition-all cursor-pointer relative"
      data-testid={`card-character-${character.id}`}
    >
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-primary hover:text-foreground transition-colors p-1 border-2 border-primary hover:bg-primary hover:text-background"
        data-testid={`btn-delete-${character.id}`}
        aria-label="Delete character"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          {character.profilePicture ? (
            <img
              src={character.profilePicture}
              alt={character.name}
              className="w-16 h-16 object-cover border-2 border-primary"
              data-testid={`img-profile-${character.id}`}
            />
          ) : (
            <div
              className="w-16 h-16 bg-card border-2 border-primary flex items-center justify-center"
              data-testid={`placeholder-profile-${character.id}`}
            >
              <User className="w-8 h-8 text-primary" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="text-lg font-bold text-foreground mb-2 tracking-wide"
            data-testid={`text-name-${character.id}`}
          >
            {character.name}
          </h3>
          <p
            className="text-sm text-muted-foreground line-clamp-2"
            data-testid={`text-description-${character.id}`}
          >
            {character.description}
          </p>
        </div>
      </div>
    </div>
  );
}

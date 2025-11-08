import { useQuery, useMutation } from "@tanstack/react-query";
import CharacterList from "@/components/CharacterList";
import CharacterForm, { type CharacterFormData } from "@/components/CharacterForm";
import { type Character } from "@/components/CharacterCard";
import { queryClient, apiRequest } from "@/lib/queryClient";

export default function Home() {
  const { data: characters = [], isLoading } = useQuery<Character[]>({
    queryKey: ["/api/characters"],
  });

  const createMutation = useMutation({
    mutationFn: async (data: CharacterFormData) => {
      return apiRequest("POST", "/api/characters", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/characters"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/characters/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/characters"] });
    },
  });

  const handleCreateCharacter = (data: CharacterFormData) => {
    createMutation.mutate(data);
  };

  const handleDeleteCharacter = (id: string) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-primary text-xl tracking-widest">
          LOADING CHARACTERS_
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/5">
        <CharacterList characters={characters} onDelete={handleDeleteCharacter} />
      </div>
      <div className="flex-1">
        <CharacterForm onSubmit={handleCreateCharacter} />
      </div>
    </div>
  );
}

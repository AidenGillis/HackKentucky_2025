import { useState, useRef } from "react";
import { Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export interface CharacterFormData {
  name: string;
  profilePicture?: string;
  description: string;
}

interface CharacterFormProps {
  onSubmit: (data: CharacterFormData) => void;
}

export default function CharacterForm({ onSubmit }: CharacterFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState<string | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSubmit({
      name: name.trim(),
      profilePicture,
      description: description.trim(),
    });

    setName("");
    setDescription("");
    setProfilePicture(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClear = () => {
    setName("");
    setDescription("");
    setProfilePicture(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b-2 border-primary p-6">
        <h2
          className="text-2xl font-bold text-primary tracking-widest"
          data-testid="text-creator-title"
        >
          &gt; CHARACTER CREATOR
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto p-8">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium uppercase tracking-wider text-foreground"
            >
              NAME *
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ENTER CHARACTER NAME_"
              className="bg-transparent border-2 border-primary text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
              data-testid="input-name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium uppercase tracking-wider text-foreground">
              PROFILE PICTURE
            </Label>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Preview"
                    className="w-32 h-32 object-cover border-2 border-primary"
                    data-testid="img-preview"
                  />
                ) : (
                  <div
                    className="w-32 h-32 border-2 border-dashed border-primary flex flex-col items-center justify-center gap-2 text-muted-foreground"
                    data-testid="placeholder-upload"
                  >
                    <User className="w-12 h-12" />
                    <span className="text-xs">NO IMAGE</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  data-testid="input-file"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-primary"
                  data-testid="button-upload"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  UPLOAD IMAGE
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Accepted formats: JPG, PNG, GIF
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-sm font-medium uppercase tracking-wider text-foreground"
            >
              DESCRIPTION
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="ENTER CHARACTER DESCRIPTION_"
              className="bg-transparent border-2 border-primary text-foreground placeholder:text-muted-foreground focus-visible:ring-primary min-h-32"
              data-testid="input-description"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={!name.trim()}
              className="flex-1"
              data-testid="button-create"
            >
              CREATE CHARACTER
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClear}
              className="border-2 border-primary"
              data-testid="button-clear"
            >
              CLEAR
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

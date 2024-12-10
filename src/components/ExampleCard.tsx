import { Button } from "./Button";

export interface ExampleCardProps {
  name: string;
  onClick: () => void;
}

export function ExampleCard({ name, onClick }: ExampleCardProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="transition-transform hover:scale-105"
    >
      {name}
    </Button>
  );
}
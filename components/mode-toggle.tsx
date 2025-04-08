import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface ModeToggleProps {
  isConversationMode: boolean
  setIsConversationMode: (value: boolean) => void
}

export function ModeToggle({ isConversationMode, setIsConversationMode }: ModeToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="mode-toggle" className={!isConversationMode ? "font-bold" : "text-muted-foreground"}>
        Code
      </Label>
      <Switch
        id="mode-toggle"
        checked={isConversationMode}
        onCheckedChange={setIsConversationMode}
      />
      <Label htmlFor="mode-toggle" className={isConversationMode ? "font-bold" : "text-muted-foreground"}>
        Chat
      </Label>
    </div>
  )
}

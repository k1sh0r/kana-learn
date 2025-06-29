import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { showToast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface FeedbackFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const toneOptions = [
  { id: "dry", label: "Felt too dry, needed more personality" },
  { id: "tooMuchText", label: "Too much text" },
  { id: "liked", label: "Liked it — lively and on point" },
  { id: "chatty", label: "Felt like chatting with a smart friend" },
  { id: "more", label: "I want more content in this style!" },
];

const feelingOptions = [
  { value: "lost", label: "Still a bit lost" },
  { value: "general", label: "I get the general idea" },
  { value: "ready", label: "Ready to try things hands-on" },
  { value: "excited", label: "Excited to keep going!" },
];

export function FeedbackForm({ open, onOpenChange }: FeedbackFormProps) {
  const router = useRouter();
  const [clarity, setClarity] = React.useState<string>();
  const [selectedTone, setSelectedTone] = React.useState<string[]>([]);
  const [liked, setLiked] = React.useState("");
  const [improvements, setImprovements] = React.useState("");
  const [feeling, setFeeling] = React.useState<string>();
  const [note, setNote] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("timestamp", new Date().toISOString());
    formData.append("clarity", clarity || "");
    formData.append(
      "tone",
      selectedTone
        .map((t) => toneOptions.find((o) => o.id === t)?.label || "")
        .join(", ")
    );
    formData.append("favorite", liked);
    formData.append("improvement", improvements);
    formData.append(
      "feeling",
      feelingOptions.find((f) => f.value === feeling)?.label || ""
    );
    formData.append("note", note);

    try {
      // Send the request and wait for it to complete
      await fetch(
        "https://script.google.com/macros/s/AKfycbyeehPcncp_Y0nA6GPnM9VZ986TnIo5Z2aCuyA1n8JQnpHuZbxlfkP_Vd8B1asud2uI/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      // Reset form fields
      setClarity(undefined);
      setSelectedTone([]);
      setLiked("");
      setImprovements("");
      setFeeling(undefined);
      setNote("");

      showToast({ title: 'Thank you for your feedback!', description: 'We appreciate your input.' });
      onOpenChange(false);
      router.push("/docs"); // Redirect to DocsHome
    } catch (error) {
      console.error("Form submission error:", error);
      showToast({
        title: "Unable to submit feedback",
        description: "Please try again. If the problem persists, contact support."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[100vh] md:max-h-[80vh] p-0 gap-0">
        <div className="sticky top-0 border-b">
          <DialogHeader className="px-6 py-4">
            <DialogTitle>Leave Your Feedback</DialogTitle>
            <DialogDescription>
              We want to make this course even better. Help us out — tell us what
              worked, what didn&apos;t, and what could use a touch-up.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <Label>1. How clear was the material?</Label>
                <RadioGroup
                  value={clarity}
                  onValueChange={setClarity}
                  className="flex flex-col gap-3"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div key={value} className="flex items-center space-x-6">
                      <RadioGroupItem
                        value={value.toString()}
                        id={`clarity-${value}`}
                      />
                      <Label htmlFor={`clarity-${value}`} className="font-normal">
                        {value === 1 &&
                          "I barely understood anything"}
                        {value === 2 && "It was hard to follow"}
                        {value === 3 &&
                          "Some parts made sense, others were confusing"}
                        {value === 4 && "Mostly clear"}
                        {value === 5 && "Crystal clear"}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>2. How did you feel about the tone and style?</Label>
                <div className="flex flex-col gap-3">
                  {toneOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.id}
                        checked={selectedTone.includes(option.id)}
                        onCheckedChange={(checked) => {
                          setSelectedTone(
                            checked
                              ? [...selectedTone, option.id]
                              : selectedTone.filter((id) => id !== option.id)
                          );
                        }}
                      />
                      <Label htmlFor={option.id} className="font-normal">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="liked">3. What did you like the most?</Label>
                <Textarea
                  id="liked"
                  placeholder='Example: "Perps are like betting on a horse — not owning it"'
                  value={liked}
                  onChange={(e) => setLiked(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="improvements">4. What could be improved?</Label>
                <Textarea
                  id="improvements"
                  placeholder="Example: I didn't really get how to choose a wallet"
                  value={improvements}
                  onChange={(e) => setImprovements(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label>5. After this course, you feel:</Label>
                <RadioGroup
                  value={feeling}
                  onValueChange={setFeeling}
                  className="flex flex-col gap-3"
                >
                  {feelingOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.value}
                        id={`feeling-${option.value}`}
                      />
                      <Label htmlFor={`feeling-${option.value}`} className="font-normal">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label htmlFor="note">6. Want to leave a note for the authors?</Label>
                <Textarea
                  id="note"
                  placeholder="A thank-you, a critique, an idea — or just a couple of words."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="!relative sticky border-t px-6 py-4 bottom-0 z-20 ">
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Feedback"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

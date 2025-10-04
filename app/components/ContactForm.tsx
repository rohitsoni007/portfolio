import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CONTACT_CONTENT, FORM_URL, FORM_FIELDS } from "@/lib/constants";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formBody = new FormData();
    formBody.append(FORM_FIELDS.NAME, formData.name);
    formBody.append(FORM_FIELDS.EMAIL, formData.email);
    formBody.append(FORM_FIELDS.MESSAGE, formData.message);
    // Here you would typically send the form data to your backend
    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again later.");
    }
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card
      className="gradient-card border-primary/10 animate-slide-up"
      style={{ animationDelay: "0.2s" }}
    >
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {CONTACT_CONTENT.form.name.label} *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50 border-primary/20 focus:border-primary transition-colors duration-300"
              placeholder={CONTACT_CONTENT.form.name.placeholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {CONTACT_CONTENT.form.email.label} *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50 border-primary/20 focus:border-primary transition-colors duration-300"
              placeholder={CONTACT_CONTENT.form.email.placeholder}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {CONTACT_CONTENT.form.message.label} *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-background/50 border-primary/20 focus:border-primary transition-colors duration-300 resize-none"
              placeholder={CONTACT_CONTENT.form.message.placeholder}
            />
          </div>

          <Button
            type="submit"
            className="w-full gradient-primary hover:glow-primary transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <Send className="w-4 h-4 mr-2" />
            {CONTACT_CONTENT.submitButton}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

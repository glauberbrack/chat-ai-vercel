"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useChat } from "ai/react";
import { ScrollArea } from "../ui/scroll-area";

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });

  return (
    <Card className="w-[480px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using blablabla</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[600px] pr-4 w-full space-y-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slat-600 text-sm"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>GB</AvatarFallback>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/57924169?v=4" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>GB</AvatarFallback>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/90422754?s=48&v=4" />
                  </Avatar>
                )}

                <p className="leading-releaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "User" : "Assistant"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2">
          <Input
            placeholder="Hit me!"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" onSubmit={handleSubmit}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

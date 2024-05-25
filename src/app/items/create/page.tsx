"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction, createUploadUrlAction } from "./actions";

export default async function HomePage() {

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold">
        Post an Item to Sell
      </h1>
      <form className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
            onSubmit={async (e) => {
              e.preventDefault()
              const form = e.currentTarget as HTMLFormElement
              const formData = new FormData(form)
              const file = formData.get("file") as File;

              const uploadUrl = await createUploadUrlAction(file.name, file.type)

              await fetch(uploadUrl, {
                method: "PUT",
                body: file,
              })

              const name = formData.get("name") as string;
              const startingPrice = parseInt(
                formData.get("startingPrice") as string
              )
              const startingPriceInCents = Math.floor(startingPrice * 100)

              await createItemAction({
                name,
                startingPrice: startingPriceInCents,
                fileName: file.name
              })
            }}>
        <Input required className="max-w-md" name="name" placeholder="Name your item" />
        <Input required className="max-w-md" 
               name="startingPrice" 
               type="number"
               step="0.01"
               placeholder="What to store your auction at?" />
        <Input type="file" name="file"></Input>
        <Button className="self-end" type="submit">Post Item</Button>
      </form>
    </main>
  );
}
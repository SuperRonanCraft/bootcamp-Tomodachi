import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
 
const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name must be at least 1 character'
  }).max(12, {
    'Name has to be under 12 characters'
  }),
});

export default function NewGameForm() {
  return (

  )
}
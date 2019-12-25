import { FormEvent } from "react"

export const submit = <T = Record<string, string>>(cb: (value: T) => void = () => {}) => (e: FormEvent) => {
  e.preventDefault()
  const elements: any[] = (e.nativeEvent.target as HTMLFormElement).elements as any
  const form: Record<string, string> = {}
  for (const element of Array.from(elements)) {
    if (element.placeholder) {
      form[element.placeholder] = element.value.toString()
    }
  }
  cb(form as any)
}
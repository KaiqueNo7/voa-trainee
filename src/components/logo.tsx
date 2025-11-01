import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Voa Trainee Logo"
      width={75}
      height={75}
    />
  )
}
import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative z-10 h-24 w-24 cursor-pointer">
      <Image
        src="https://res.cloudinary.com/drynqkitl/image/upload/v1740220285/Dp_oxgveh.jpg"
        alt="Profile avatar"
        width={1200}
        height={1200}
        className="rounded-full object-cover"
      />
      <div className="absolute -top-1 -left-1 -z-10 h-26 w-26 animate-pulse rounded-full bg-purple-600" />
    </div>
  );
}

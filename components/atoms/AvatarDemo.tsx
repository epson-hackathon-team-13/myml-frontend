import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function AvatarDemo({
  avatarData,
  avatarClass = "",
}: {
  avatarData: { src: string; alt: string; fallback: string };
  avatarClass?: string;
}) {
  return (
    <div>
      <Avatar className={avatarClass}>
        <AvatarImage src={avatarData.src} alt={avatarData.alt} />
        <AvatarFallback className={avatarClass}>
          {avatarData.fallback}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default AvatarDemo;

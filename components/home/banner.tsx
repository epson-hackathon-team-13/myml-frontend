import Image from "next/image";

const Banner = () => {
  return (
    <div className="pl-5 bg-primary/20 h-[300px] flex justify-between">
      <p className="text-28 font-semibold py-4 px-3 flex flex-col justify-center gap-3">
        <span>Start Korean</span>
        <span>
          with my{" "}
          <strong className="font-extrabold text-32 bg-primary py-1 px-2">
            Favorite K-POP song
          </strong>
        </span>
      </p>
      <Image
        src={"/png/banner-hand.png"}
        width={400}
        height={100}
        alt="한국어를 쓰고 있는 손"
      />
    </div>
  );
};

export default Banner;

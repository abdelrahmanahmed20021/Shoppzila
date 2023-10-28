export default function Title({ content }: { content: string }) {
  return (
    <div className="mt-[71px] mb-[41px] flex justify-start w-full font-[600] text-[1.6rem] sm:text-[2rem]">
      {content}
    </div>
  );
}

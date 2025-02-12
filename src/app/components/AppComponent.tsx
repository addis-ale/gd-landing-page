import Image from "next/image";
interface AppComponentProps {
  iconSrc: string;
  label: string;
}
const AppComponent = ({ iconSrc, label }: AppComponentProps) => {
  return (
    <div className="flex items-center gap-[14px] px-[15px] py-[10px] bg-black w-[310px]">
      {iconSrc && (
        <div className="w-[60px] h-[60px] flex items-center justify-center relative pt-2">
          <Image src={`${iconSrc}`} alt="app" fill className="pt-1" />
        </div>
      )}
      <span className="text-white text-[16px] pb-2">{label}</span>
    </div>
  );
};

export default AppComponent;

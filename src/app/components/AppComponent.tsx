import Image from "next/image";

interface AppComponentProps {
  iconSrc: string;
  label: string;
}

const AppComponent = ({ iconSrc, label }: AppComponentProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-black w-full sm:w-[310px]">
      {iconSrc && (
        <div className="w-12 h-12 flex items-center justify-center relative pt-2">
          <Image src={iconSrc} alt="app" fill className="pt-1" />
        </div>
      )}
      <span className="text-white text-sm sm:text-[16px] pb-2">{label}</span>
    </div>
  );
};

export default AppComponent;

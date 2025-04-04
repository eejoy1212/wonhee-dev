interface LandingSectionProps {
    title: string;
    children?: React.ReactNode;
    bgColor?: string;
    titleColor?: string;
    widthSize?: string;
  }
  
  const LandingSection = ({ title, children ,bgColor="bg-white",titleColor="text-[#FF6600]" , widthSize="3"} : LandingSectionProps) => {
    return (
        <div className={`w-full ${bgColor}`}>
            <section
        id={title.replace(/\s+/g, "").toLowerCase()}
        className={`max-w-${widthSize}xl mx-auto min-h-[50vh] py-16 text-black text-center scroll-mt-[80px]`}
      >
        <h2 className={`text-4xl font-bold mb-8 ${titleColor}`}>{title}</h2>
        {children}
      </section>
        </div>
      
    );
  };
  
  export default LandingSection;
  
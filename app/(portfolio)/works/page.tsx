import contents from "./contents";
import ExpandableBox from "@/app/ui/ExpandableBox";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] transition-all">
      {contents.map((content, index) => (
        <ExpandableBox
          key={index}
          title={content.title}
          subtitle={content.subtitle}
          link={content.link}
          time={content.time}
          description={content.description}
        />
      ))}
    </div>
  );
};

export default page;

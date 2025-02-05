import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

interface PropTypes {
  imageName: string;
  imageSrc: string;
}
const CategoryCard = (props: PropTypes) => {
  const { imageName, imageSrc } = props;
  return (
    <div className="m-4">
      <div className="group flex w-full cursor-pointer flex-col items-center gap-2">
        <Image
          src={imageSrc}
          alt={imageName}
          className="w-3/4 rounded-full transition-transform group-hover:scale-110"
          height={60}
          width={60}
        />
        <h4 className="text-center text-sm">{imageName}</h4>
      </div>
    </div>
  );
};

export default CategoryCard;

import CategoryCard from "@/components/commons/UI/CategoryCard/CategoryCard";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";

interface PropTypes {
  isCategoryLoading: boolean;
}

const HomeCategory = (props: PropTypes) => {
  const { isCategoryLoading } = props;
  return (
    <div className="lg:mx-0 lg:mb-16">
      {!isCategoryLoading ? (
        <Card className="pb-4" shadow="md">
          <CardHeader className="font-semibold">Categories</CardHeader>
          <Divider />
          <CardBody className="gap-8 overflow-visible">
            <div className="grid grid-cols-3 justify-center md:grid-cols-8 lg:grid-cols-10">
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
              <CategoryCard
                imageName="Electronics"
                imageSrc="/images/category-images/tv.jpg"
              />
              <CategoryCard
                imageName="Computer & Laptops"
                imageSrc="/images/category-images/laptop.jpg"
              />
            </div>
          </CardBody>
        </Card>
      ) : (
        <Skeleton className="h-[90%] w-full lg:rounded-2xl" />
      )}
    </div>
  );
};

export default HomeCategory;

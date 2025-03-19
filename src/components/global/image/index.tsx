import Image from "next/image";
import myImage from "../public/my-image.jpg";

const MyImage = () => {
  return <Image src={myImage} alt="Description" width={500} height={300} />;
};

export default MyImage;
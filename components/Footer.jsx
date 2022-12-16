import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-500 flex justify-around items-center p-3 mt-5 sticky top-[100vh]  ">
      <a
        href="https://cafecito.app/marcoluchi11"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          width={170}
          height={150}
          srcSet="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
          src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
          alt="Invitame un café en cafecito.app"
        />
      </a>
      <small className="text-white">
        &copy; 2020-2022. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;

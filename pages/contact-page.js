import Layout from "../components/Layout";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="fony-bold">Contant info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            width={60}
            height={60}
            alt="Avator"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">city A</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
          <p className="font-bold my-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-123-456</p>
        </div>
        {/* <div className="mt-6 flex justify-around">
          <div>
            <a
              href="https://github.com/GomaGoma676/nextjs-blog-todos"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <svg
              className="w-6 h-6 mr-3 text-blue-500"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};
export default Contact;

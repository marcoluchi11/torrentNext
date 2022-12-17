const Error = ({ message }) => {
  return (
    <div role="alert" className="w-1/2">
      <div className="bg-red-600 text-center text-xl text-white rounded-b  px-3 py-2  mb-5 mt-0 ">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;

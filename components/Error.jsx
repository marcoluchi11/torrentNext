const Error = ({ message }) => {
  return (
    <div className="bg-red-500  text-center  text-black px-4 py-3 m-5 md:w-1/4 w-3/4 rounded">
      <p>{message}</p>
    </div>
  );
};

export default Error;

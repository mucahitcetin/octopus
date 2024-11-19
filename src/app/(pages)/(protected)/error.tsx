"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold text-red-500 mb-4">{error.message}</h1>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-md" onClick={reset}>
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;

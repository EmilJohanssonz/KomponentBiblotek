type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <section className="card bg-amber-300 flex justify-center h-14 p-3 border-solid border-2 cursor-pointer rounded-lg drop-shadow-lg mt-1">
      <h2 className="text-red-600">Hej {title}</h2>
      <p className="text-2xl text-blue-800 font-bold font-mono pl-2">
        PÅ dig {children}
      </p>
    </section>
  );
};

export default Card;

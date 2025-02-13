type ListProps = {
  items: string[];
};

const List = ({ items }: ListProps) => {
  return (
    <ul className="flex justify-center h-10 border-2 text-center p-1 border-amber-900 shadow-md bg-emerald-200 rounded-3xl drop-shadow-2xl">
      {items.map((item, index) => (
        <li className="pr-2 border-1 pl-1 rounded-e-xs border-white text-cyan-400 text-sm"key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;

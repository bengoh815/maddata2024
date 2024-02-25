export type Commodity = {
  id: number;
  name: string;
  age?: number; // Optional property
};

const Item: React.FC<{ data: Commodity }> = ({ data }) => {
  return <div>{data.id}</div>;
};

export default Item;

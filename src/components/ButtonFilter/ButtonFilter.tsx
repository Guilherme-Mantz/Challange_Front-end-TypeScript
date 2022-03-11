interface Props {
    categories: string[]
};

export default function ButtonFilter({categories}: Props) {
  return (
    <>
    {categories.map((filter: string) => {
        return <div className="col mb-3 pe-1 ps-1" key={filter}><button type="button" className="btn btn-primary">{filter}</button></div>
    })}
    </>
  )
};
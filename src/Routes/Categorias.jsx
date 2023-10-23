import Dropdown from "./Dropdown";

function CATEGORIAS() {
  const items = [
    {
      slug: "/link1/",
      anchor: "Link 1"
    },
    {
      slug: "/link2/",
      anchor: "Link 2"
    },
    {
      slug: "/link3/",
      anchor: "Link 3"
    }
  ];

  return (
    <div className="App">
      <h1>Accesible Dropdown in react</h1>
      <Dropdown dropdownTitle="Dropdown" items={items} />
    </div>
  );
}

export default CATEGORIAS
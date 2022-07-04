import Botao from "./Botao";

function App(){

	const botao = [
		{
			palavra: "Tools",
		},
		{
			palavra: "Pricing",
		},
    {
			palavra: "Blog",
		},
    {
			palavra: "About",
		},
    {
			palavra: "Customers",
		},
	];

	return(

		<div className="cont"> 
			{
			botao.map((cons, cont) => {
					return <Botao key={cont}
							palavra={cons.palavra}
							
						/>;
				})
			}
	  </div>
	);
}

export default App;
import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("empezando el efecto");

    if (!!loading) {
      setTimeout(() => {
        console.log("haciendo la validacion");

        setLoading(false);

        console.log("terminando la validacion");
      }, 3000);
    }
    console.log("terminando el efecto");
  }, [loading]);

  return (
    <React.Fragment>
      <div>
        <h1>Eliminar {name}</h1>
        <p>
          Por favor, escribe el codigo de seguridad para comprobar que quieres
          eliminar
        </p>

        {error && <p>Error: el codigo es incorrecto</p>}

        {loading && <p>Cargando...</p>}

        <input placeholder="Codigo de seguridad" />
        <button onClick={() => setLoading(true)}>Comprobar</button>
      </div>
    </React.Fragment>
  );
}

export { UseState };

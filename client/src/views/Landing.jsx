import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Proyecto Tienda</h1>
            <p className="mb-5">
              Proyecto Final de Ejemplo Tutoria, Tienda SykoStore
            </p>
            <div className="flex gap-4 justify-center">
              <Link to={"/login"}>
                <button className="btn btn-primary">Iniciar Sesión</button>{" "}
                {/*                 //usando Link de react-router-dom
                 */}
              </Link>
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className="btn btn-secondary"
              >
                Registrarse
              </button>
              {/*               usando useNavigate de react-router-dom
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

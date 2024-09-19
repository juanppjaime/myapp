    import { useParams } from "react-router-dom";
    import { useState, useEffect } from "react";

    export default function Detail() {
    const [mascotas, setMascotas] = useState([]);
    const [buscada, setBuscada] = useState(null); 
    const [foto, setFoto] = useState(null);
    const [raza, setRaza] = useState(null);
    const params = useParams();
    const URL =
        "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setMascotas(data);
        });
    }, [URL]);

    useEffect(() => {
        if (mascotas.length > 0) {
        const encontrada = mascotas.find(
            (mascota) => mascota["id"] === parseInt(params.mascotaId)
        );
        if (encontrada) {
            setBuscada(encontrada["nombre"]);
            setRaza(encontrada["raza"]);
            setFoto(encontrada["foto"]);
        }
        }
    }, [mascotas, params.mascotaId]); 

    return (
        <div>
        <h1>{`I am ${buscada}` }</h1>
        <img src={foto}></img>
        <h2>{raza}</h2>

        </div>
    );
    }

import React, { useState, useEffect } from "react";
import { DocumentCardImageExample } from "./components/Grid";
import { useDispatch } from "react-redux";
import { ModalBasicExample } from "./components/Modal";
import { SearchBox } from "@fluentui/react";
import './Main.scss';

interface Movie {
    overview: string;
    release_date: any;
    poster_path: any;
    id: number;
    title: string;
    img: string;
}

function Main() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const dispatch = useDispatch();

    const peticion = async () => {
        const url = 'https://api.themoviedb.org/3/discover/movie';
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjExNDIwOTUwZDAwY2UxNWEwNWVkMTdiYjcxZWVlZiIsInN1YiI6IjY2NGY0MGRjY2I2ZTg4ZDRhODgyYjVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5AM-jG1uLfukL-klWYCAnuFyF3hSlAGV7aA9m3rIX3o';

        try {
            const respuesta = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (respuesta.ok) {
                const data = await respuesta.json();
                console.log('datos recibidos', data);
                setMovies(data.results);
                setFilteredMovies(data.results); // Inicialmente mostrar todas las películas
            } else {
                console.error('error al hacer la solicitud', respuesta.status);
            }
        } catch (error) {
            console.error('error en la solicitud');
        }
    }

    useEffect(() => {
        peticion();
    }, []);

    // Función para manejar cambios en el campo de búsqueda
    const handleSearchChange = (newValue: string) => {
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(newValue.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    return (
        <div className="container">
            <h1 className="title">PRUEBA TÉCNICA RAONA</h1>
            <SearchBox
                placeholder="Buscar películas por título..."
                onChange={(event, newValue) => handleSearchChange(newValue || "")}
            />
            <div className="card-container">
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        <DocumentCardImageExample
                            title={movie.title}
                            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            date={movie.release_date}
                        />
                        <ModalBasicExample title={movie.title} details={movie.overview} />
                    </li>
                ))}
            </div>
        </div>
    );
}

export default Main;

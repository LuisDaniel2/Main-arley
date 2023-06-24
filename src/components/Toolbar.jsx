import Button from "react-bootstrap/Button";

export function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <>
            <div>
                <Button onClick={onPlayMovie}> Cargar Pelicula</Button>

                <Button onClick={onUploadImage}> Cargar Pelicula</Button>
            </div>
        </>
    )
}
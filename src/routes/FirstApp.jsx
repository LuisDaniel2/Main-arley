import { PropTypes } from "prop-types";

export const FirstApp= ( { tittle, subtittle, subt2 })=> {

   return (
    <>
    <h1> {tittle} </h1>
    <h2> {subtittle} </h2>
    <h2> {subt2} </h2>
    </>
   )
}

FirstApp.propTypes = {
    tittle: PropTypes.string.isRquired,
    subtittle: PropTypes.number.isRquired,
    subt2: PropTypes.string,
}

FirstApp.defaultProps = {
    subt2: "Sin subtitulo"

}

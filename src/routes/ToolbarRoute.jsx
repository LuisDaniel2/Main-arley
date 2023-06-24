import { Toolbar } from "../components/Toolbar";


export function ToolbarRoute() {
  return (
    <>
    <Toolbar
    onPlayMovie={() => alert('Se reproduce pelicula')}
    onUploadImage={() => alert('Se muestra imagen')} />
    </>
    
  )
}

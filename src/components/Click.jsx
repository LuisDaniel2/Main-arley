import Button from "react-bootstrap/Button";

function clicking() {
    alert('click alert')
}

export function ButtonClick() {
    return (
        <div className="Container">
            <Button variant="primary" onClick={clicking}> Click here </Button>
        </div>
    )
}
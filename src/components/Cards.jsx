import { Card } from "react-bootstrap"

export function Cards() {

    const profiles = [
        {
            rol: "Student",
            name: "Jordy",
            age: 19,
            likes: "Play Fortnite",
            img: "https://crehana-blog.imgix.net/media/filer_public/ae/4e/ae4e52f0-b676-4a7c-842c-77e969cd3f62/fotografia-primerisimo-primer-plano.jpeg?auto=format&q=50",
        },
        {
            rol: "Studen",
            name: "Luis",
            age: 18,
            likes: "Skate Boarding",
            img: "https://www.blogdelfotografo.com/wp-content/uploads/2022/06/primerisimo_portada.jpg",
        },
        {
            rol: "Teacher",
            name: "Denim",
            age: 26,
            likes: "Trading",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacmamL1K0wE2y-JlazSMzYlvwJwvM2uZQeutGuZLP&s",
        },
    ];

    return (
        <>
            <Card className="mt-3" style={{ width: "18rem" }}>
                {profiles.map((e) => (
                    <div>
                        <Card.Header> {e.rol} </Card.Header>
                        <Card.Body>
                            <Card.Title> {e.name} </Card.Title>
                            <Card.Text>
                                {" "}
                                {e.likes}, Edad: {e.age}{" "}
                            </Card.Text>
                            <Card.Img variant="top" src={e.img} />
                        </Card.Body>
                    </div>
                ))}
            </Card>
        </>

    )
}

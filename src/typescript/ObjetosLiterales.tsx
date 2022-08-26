
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion{
    pais: string;
    casaNo: number 
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: "Oscar",
        edad: 45,
        direccion: {
            pais: "Ecuador",
            casaNo: 78
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>{JSON.stringify(persona, null, 2)}</pre>
        </>
    )
}

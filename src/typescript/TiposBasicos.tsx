
//rafc

export const TiposBasicos = () => {

    const nombre:string = 'Fernando';
    const edad = 35;
    const estaActivo:boolean = true;  
    
    //let sexo = 'Masculino';
    //sexo = 123;
    
    let poderes:string[] = ['Velocidad','Volar','Respirar bajo el agua'];
    poderes.push('Telepatia'); 
    return (
        <>
            <h3>TiposBasicos</h3>
            {nombre},{edad},{(estaActivo) ? 'Activo' : 'No Activo'}
            <br/>
            {poderes.join(', ')}
        </>
    )
}

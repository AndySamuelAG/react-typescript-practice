import { useForm } from "../hooks/useForm"

interface FormData {
    email: string,
    name: string,
    edad: number
}

export const Formulario = () => {
    const { name, email, edad, formulario, handleChange:setFormulario } = useForm<FormData>({
        email: 'prueba@gmail.com',
        name: 'Hola',
        edad: 20
    })

    // const { name, email } = formulario;

    return (
        <>
            <h2>Formulario - customHooks</h2>
            <form>
                <div className="mb-2">
                    <label className="form-label">Nombre</label>
                    <input 
                        className="form-control"
                        name="name"
                        type="text"
                        onChange={ setFormulario }
                        value={name}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Email</label>
                    <input 
                        className="form-control"
                        name="email"
                        type="email"
                        onChange={ setFormulario }
                        value={email}
                    />
                </div>
            </form>

            <pre>{ JSON.stringify(formulario) }</pre>
        </>
    )
}

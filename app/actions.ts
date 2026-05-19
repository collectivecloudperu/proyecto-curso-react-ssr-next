"use server";

export async function enviarContacto(formData: FormData) {
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const mensaje = formData.get("mensaje");

    console.log("NUEVO MENSAJE RECIBIDO EN EL SERVIDOR");
    console.log(`Nombre: ${nombre}`);
    console.log(`Email: ${email}`);
    console.log(`Mensaje: ${mensaje}`);

    return {
        success: true,
        message: `!Gracias ${nombre}! Tu mensaje fue recibido correctamente en el servidor.`
    };
}
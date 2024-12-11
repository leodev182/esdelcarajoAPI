class UserDataProcessor {
  /**
   * Procesa y valida los datos del usuario.
   * @param {Object} data - Datos enviados por el cliente.
   * @param {string} data.name - Nombre del usuario.
   * @param {string} data.lastname - Apellido del usuario.
   * @param {string} data.email - Email del usuario.
   * @param {string} data.password - Contraseña del usuario.
   * @param {string} [data.nickname] - Apodo del usuario (opcional).
   * @returns {Object} - Datos aplanados y validados.
   * @throws {Error} - Si falta algún campo obligatorio o hay errores de validación.
   */
  processUserData(data) {
    const { name, lastname, email, password, nickname } = data;

    // Validar que todos los campos obligatorios están presentes
    if (!name || !lastname || !email || !password) {
      throw new Error("Faltan campos obligatorios.");
    }

    // Validar que el email tiene un formato válido
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("El email tiene un formato inválido.");
    }

    // Retornar los datos aplanados y validados
    return { name, lastname, email, password, nickname };
  }
}

// Exportar una instancia de la clase
export default new UserDataProcessor();

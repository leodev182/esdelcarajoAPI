class AdminService {
  #adminLimit = 3; // Límite de administradores
  #adminCount = 0; // Contador de administradores (esto debería persistirse en el controlador)

  // Método para manejar la creación de un perfil de usuario con el rol de administrador
  assignAdminRole(data, adminCount) {
    try {
      // Verificamos cuántos administradores hay (pasamos el contador como argumento)
      if (adminCount >= this.#adminLimit) {
        throw new Error(
          "Ya se han creado los tres administradores permitidos."
        );
      }

      // Si aún no hemos alcanzado el límite, asignamos el rol de admin
      const adminData = {
        ...data,
        role: "admin", // Asignamos el rol de administrador
      };

      // Devolvemos los datos del administrador sin interactuar con la base de datos
      return adminData;
    } catch (error) {
      throw new Error(
        `Error al asignar el rol de administrador: ${error.message}`
      );
    }
  }

  // Método para asignar el rol de usuario normal
  assignUserRole(data) {
    return {
      ...data,
      role: "user", // Asignamos el rol de usuario normal
    };
  }
}

export default new AdminService();

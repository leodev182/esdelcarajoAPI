class AdminService {
  #adminLimit = 3; // Límite de administradores

  #assignRoleBasedOnAdminCount = (userPackage, adminCount) => {
    if (adminCount < this.#adminLimit) {
      return this.assignAdminRole(userPackage);
    }
    return this.assignUserRole(userPackage);
  };

  // Método para manejar la creación de un perfil de usuario con el rol de administrador
  assignAdminRole(data) {
    return {
      ...data,
      role: "admin", // Asignamos el rol de administrador
    };
  }

  // Método para asignar el rol de usuario normal
  assignUserRole(data) {
    return {
      ...data,
      role: "user", // Asignamos el rol de usuario normal
    };
  }

  // Método público para ser usado desde fuera de la clase
  assignRole(userPackage, adminCount) {
    return this.#assignRoleBasedOnAdminCount(userPackage, adminCount);
  }
}

export default new AdminService();

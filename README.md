# PNT2_gestorVisitas
Instalar las dependencias que figuran en requirements.txt (Flask, SqlAlchemy)
El servidor se encuentra en srv_gestor_visitas y escucha el puerto 9001
Para crear la base se debe invocar al endpoint /crearbase
La aplicacion web se encuentra en gestor_visitas
Existen 3 roles que cumplen la funcion de Administrador, Operador, Profesional.
Cada Rol tiene su pantalla inicial y su menú de opciones específico para el Rol
El Administrador puede dar de alta usuario de los otros 2 Roles, para ello debe 
  acceder a la opción deseada del menú
El Operador puede generar visitas. Ingresando a su correspondiente menú
  En la pantalla de generar visita se buscando al paciente por DNI y completan los campos
  referida a la informacion del paciente. 
  Se seleccionan los campos faltantes y el botón guardar genera la visita
El Profesional puede acceder desde su menú a sus visitas programadas y optar por ver
  las del día o las de una fecha en particular (falta completar la funcionalidad)

Existen 3 usuarios por default, uno para cada rol
Usuario    Password    Rol
userA      1324      Administrador
userO      1234      Operador
userP      1234      Profesional

Existe un paciente creado cuyo DNI es: 29044158
Por dudas o consultas escribirme a gustavomaciel@hotmail.com

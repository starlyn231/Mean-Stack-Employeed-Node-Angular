// la interface es basicamente la descripcion de lo que contiene un objeto.
export interface Employee {
  name: string;
  position: string;
  Departament: string;
  salary: number;
  createAt?: string;
  updateAt?: string;
  _id?: string;
}

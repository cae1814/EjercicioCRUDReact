import { useState, useEffect } from "react";
import axios from "axios";
import { HookHelper } from "../Hooks/HookHelper";
import {alertReactCrud} from "../js/functions.js";
import "../assets/font-awesome/css/font-awesome.min.css";
import defImgUser from "../assets/img/unkuser.jpg";

export const EjercicioCrudReactP2 = () => {
  const {getUsers, data, submitHandler, submitDeletetHandler, setJoperacion, setIdUser, setJname, setJpassword, setJemail, setJrole, setJavatar} = HookHelper();
  
  useEffect(() => {
    getUsers();
  }, []);

  const [id, setId] = useState();
  const [operacion, setOperacion] = useState();

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [avatar, setAvatar] = useState();

const l_submitDeletetHandler = (id, name) => {
  setId(id);
  setName(name);
  setIdUser(id);
}

const l_changeName = (p_name) => {
  setName(p_name);
  setJname(p_name);
}

const l_changePassword = (p_password) => {
  setPassword(p_password);
  setJpassword(p_password);
}

const l_changeEmail = (p_email) => {
  setEmail(p_email);
  setJemail(p_email);
}

const l_changeRole = (p_role) => {
  setRole(p_role);
  setJrole(p_role);
}

const l_changeAvatar = (p_avatar) => {
  setAvatar(p_avatar);
  setJavatar(p_avatar);
}

const l_submitUpdatetHandler = (p_operacion, p_id, p_name, p_password, p_email, p_role, p_avatar) => {
  setOperacion(p_operacion);
  setJoperacion(p_operacion);

  // Almacenamiento local //
  setId(p_id);
  setName(p_name);
  setPassword(p_password);
  setEmail(p_email);
  setRole(p_role);
  setAvatar(p_avatar);

  // Hook //
  setIdUser(p_id);
  setJname(p_name);
  setJpassword(p_password);
  setJemail(p_email);
  setJrole(p_role);
  setJavatar(p_avatar);
}

  return (
    <>
      <div className="mt-2 ml-4">
        <nav className="nav nav-pills nav-fill">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/EjercicioReactJs">Ejercicio React Js</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/ejercicioReactJS2">Ejercicio React Js2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/EjercicioCrudReact">Ejercicio CRUD React</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/EjercicioCrudReactP2">Ejercicio CRUD React p2</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <section className="container mt-4 mb-1 show" id="crud1">
          <div className="text-start" id="employees">
            <h5 className="font-size-17">CRUD React JS Parte 2 | fecha: 11/09/2024</h5>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9" style={{ paddingright: "7px" }} >
            <div className="row">
                <div className="col-sm-10 col-md-10 col-lg-10">
                  <div className="row h4 pb-1 mb-5 border-bottom border-danger font-size-16 font-family-app">Listado de Usuarios</div>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <button type="button" className="btn btn-primary btn-sm" onClick={() => l_submitUpdatetHandler(1)} data-bs-toggle="modal" data-bs-target="#confEdit"><i className='fa fa-edit' style={{ fontSize: "16px" }}></i>&nbsp;Crear</button>&nbsp;
                  <button type="button" className="btn btn-primary btn-sm" onClick={() => Load()}><i className='fa fa-refresh' style={{ fontSize: "16px" }}></i>&nbsp;Refrescar</button>&nbsp;
                </div>
              </div>
            <div className="row g-3 align-items-center">
              <div className="row col-lg-12 col-md-12 col-sm-12">
              <div className="bd-example">
                <table className="table table-hover font-size-13">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Name</th>
                      <th scope="col">Password</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">CreationAt</th>
                      <th scope="col">UpdateAt</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((item) => (
                  <tr key={item.id}>
                    <td scope="row">{item.id}</td>
                    <td> <div className="text-center"><img src={item.avatar} width="40px" className="rounded" alt="..." /></div></td>                    
                    <td> {item.name} </td>
                    <td> {item.password} </td>
                    <td> {item.email} </td>
                    <td> {item.role} </td>
                    <td> {item.creationAt} </td>
                    <td> {item.updatedAt} </td>
                    <td>
                      <button type="button" className="btn btn-primary btn-sm" onClick={() => l_submitUpdatetHandler(2, item.id, item.name, item.password, item.email, item.role, item.avatar)} data-bs-toggle="modal" data-bs-target="#confEdit"><i className='fa fa-edit' style={{ fontSize: "16px" }}></i>&nbsp;Editar</button>&nbsp;
                      <button type="button" className="btn btn-danger btn-sm" onClick={() => l_submitDeletetHandler(item.id, item.name)} data-bs-toggle="modal" data-bs-target="#confDelete"><i className='fa fa-trash-o' style={{ fontSize: "16px" }}></i>&nbsp;Borrar</button>
                    </td>
                  </tr>
                ))}
                  </tbody>
                </table>
              </div>
              </div>           
            </div>
          </div>
          <br></br>
        </section>
      </div>


      <div className="modal fade" id="confDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="staticBackdropLabel" style={{ fontSize: "14px"}} ><b>Ejercicio Crud React | Delete Row</b></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: "16px"}}><span className="font-color-red"><i className='fa fa-exclamation-triangle' style={{ fontSize: "17px" }}></i>&nbsp;<b>Cuidado!</b></span></p>
              <p style={{ fontSize: "16px"}}>¿Esta seguro que desea borrar el usuario <b>{name}</b>?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary btn-sm" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={submitDeletetHandler} data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="confEdit" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="staticBackdropLabel" style={{ fontSize: "14px"}} ><b>Ejercicio Crud React | User Management</b></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card" style={{ width: "100%"}}>
                <div className="text-center mt-3">
                  <img src={avatar}className="card-img-top" alt="..." style={{ width: "50%"}} />
                </div>
                  <div className="card-body">
                  <form onSubmit={submitHandler}>
                      <legend className="font-size-17 text-center"><b>{name}</b></legend>
                      <div className="mb-2">
                        <label htmlFor="name" className="form-label font-size-14">Name</label>
                        <input type="text" name="name" id="name" className="form-control font-size-14" placeholder="Name for user" defaultValue={name} onChange={(e) => l_changeName(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="password" className="form-label font-size-14">Password</label>
                        <input type="text" name="password" id="password" className="form-control font-size-14" placeholder="Password for user" defaultValue={password} onChange={(e) => l_changePassword(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="email" className="form-label font-size-14">Email</label>
                        <input type="email" name="email" id="email" className="form-control font-size-14" placeholder="Email for user" defaultValue={email} onChange={(e) => l_changeEmail(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="avatar" className="form-label font-size-14">Avatar Url</label>
                        <input type="text" name="avatar" id="avatar" className="form-control font-size-14" placeholder="Avatar for user" defaultValue={avatar} onChange={(e) => l_changeAvatar(e.target.value)} />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="role" className="form-label font-size-14">Role</label>
                        <select name="role" id="role" className="form-select" aria-label="Default select example" onChange={(e) => l_changeRole(e.target.value)}>
                          <option value={role} defaultValue>{role}</option>
                          <option value="customer">customer</option>
                          <option value="admin">admin</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary btn-sm" data-bs-dismiss="modal"><i className='fa fa-check-square' style={{ fontSize: "16px" }}></i>&nbsp;Guardar</button>                    
                  </form>
                  </div>
                </div>
              </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary btn-sm" data-bs-dismiss="modal"><i className='fa fa-reply' style={{ fontSize: "16px" }}></i>&nbsp;Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

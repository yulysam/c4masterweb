const express = require('express');
const router = express.Router();

////////////////////////////////////////////////////////////////////////////////////
const Objetivo = require('../models/objetivos');

router.get('/objetivos', async (req, res) => {
    const objetivos = await Objetivo.find();
    res.json(objetivos);
});

router.get('/objetivo/:id', async (req, res) => {
    const objetivo = await Objetivo.findById(req.params.id);
    res.json(objetivo);
});

router.post('/objetivo', async (req, res) => {
    const {descripcion, tipo, proyecto} = req.body;
    const objetivo = new Objetivo({descripcion, tipo, proyecto});
    await objetivo.save();
    res.json({status: 'Objetivo Guardado'});
});

router.put('/objetivo/:id', async (req, res) => {
    const {descripcion, tipo, proyecto} = req.body;
    const newObjetivo = {descripcion, tipo, proyecto};
    await Objetivo.findByIdAndUpdate(req.params.id, newObjetivo);
    res.json({status: 'Objetivo Actualizada'});
});

router.delete('/objetivo/:id', async (req, res) => {
    await Objetivo.findByIdAndRemove(req.params.id);
    res.json({status: 'Objetivo Eliminado'});
});
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const Inscripcion = require('../models/inscripcion');

router.get('/inscripcions', async (req, res) => {
    const inscripcions = await Inscripcion.find();
    res.json(inscripcions);
});

router.get('/inscripcion/:id', async (req, res) => {
    const inscripcion = await Inscripcion.findById(req.params.id);
    res.json(inscripcion);
});

router.post('/inscripcion', async (req, res) => {
    const {proyecto, estudiante, estado, fecha_ingreso, fecha_egreso} = req.body;
    const inscripcion = new Inscripcion({proyecto, estudiante, estado, fecha_ingreso, fecha_egreso});
    await inscripcion.save();
    res.json({status: 'Inscripcion Guardado'});
});

router.put('/inscripcion/:id', async (req, res) => {
    const {proyecto, estudiante, estado, fecha_ingreso, fecha_egreso} = req.body;
    const newInscripcion = {proyecto, estudiante, estado, fecha_ingreso, fecha_egreso};
    await Inscripcion.findByIdAndUpdate(req.params.id, newInscripcion);
    res.json({status: 'Inscripcion Actualizada'});
});

router.delete('/inscripcion/:id', async (req, res) => {
    await Inscripcion.findByIdAndRemove(req.params.id);
    res.json({status: 'Inscripcion Eliminado'});
});
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const Proyecto = require('../models/proyectos');

router.get('/proyectos', async (req, res) => {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
});

router.get('/proyecto/:id', async (req, res) => {
    const proyecto = await Proyecto.findById(req.params.id);
    res.json(proyecto);
});

router.post('/proyecto', async (req, res) => {
    const {nombre, objetivos, presupuesto, fecha_inicio, fecha_fin, lider, estado, fase} = req.body;
    const proyecto = new Proyecto({nombre, objetivos, presupuesto, fecha_inicio, fecha_fin, lider, estado, fase});
    await proyecto.save();
    res.json({status: 'Proyecto Guardado'});
});

router.put('/proyecto/:id', async (req, res) => {
    const {nombre, objetivos, presupuesto, fecha_inicio, fecha_fin, lider, estado, fase} = req.body;
    const newProyecto = {nombre, objetivos, presupuesto, fecha_inicio, fecha_fin, lider, estado, fase};
    await Proyecto.findByIdAndUpdate(req.params.id, newProyecto);
    res.json({status: 'Proyecto Actualizado'});
});

router.delete('/proyecto/:id', async (req, res) => {
    await Proyecto.findByIdAndRemove(req.params.id);
    res.json({status: 'Proyecto Eliminado'});
});
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const Usuario = require('../models/usuarios');

router.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});

router.get('/usuario/:id', async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
});

router.post('/usuario', async (req, res) => {
    const {correo, identificacion, nombre, apellido, rol, estado} = req.body;
    const usuario = new Usuario({correo, identificacion, nombre, apellido, rol, estado});
    await usuario.save();
    res.json({status: 'Usuario Guardado'});
});

router.put('/usuario/:id', async (req, res) => {
    const {correo, identificacion, nombre, apellido, rol, estado} = req.body;
    const newUsuario = {correo, identificacion, nombre, apellido, rol, estado};
    await Usuario.findByIdAndUpdate(req.params.id, newUsuario);
    res.json({status: 'Usuario Actualizado'});
});

router.delete('/usuario/:id', async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Eliminado'});
});
/////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
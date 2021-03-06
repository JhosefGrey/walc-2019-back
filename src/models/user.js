'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    primerApellido: String,
    segundoApellido: String,
    primerNombre: String,
    segundoNombre: String,
    sexo: String,
    paisNacimiento: String,
    ciudadNacimiento: String,
    fechaNacimiento: String,
    paisNacionalidad: String,
    tipoDocumentoIdentidad: String,
    numeroDocumentoIdentidad: String,
    direccionHabitacion: String,
    telefonoHabitacion: String,
    celularPersonal: String,
    emailPersonal: String,
    emailInstitucional: String,
    preferenciaAlimentaria: String,
    descripcionAlimentaria: String,
    alergia: String,
    descripcionAlergia: String,
    tipoOrganizacion: String,
    nombreOrganizacion: String,
    siglasOrganizacion: String,
    urlOrganizacion: String,
    direccionOrganizacion: String,
    ciudadOrganizacion: String,
    paisOrganizacion:String,
    telefonoOrganizacion: String,
    faxOrganizacion: String,
    cargoOrganizacion:String,
    periodoCargoOrganizacion: String,
    responsabilidadesOrganizacion: String,
    institucionEduacion: String,
    periodoEstudioEduacion: String,
    desdeEduacion: String,
    hastaEducacion: String,
    ciudadEduacion: String,
    paisEduacion:String,
    gradoAlcanzadoEduacion: String,
    nombreEmergencia: String,
    apellidoEmergencia: String,
    parentescoEmergencia: String,
    telefonoEmergencia: String,
    emailEmergencia: String,
    interesado: { type: Schema.ObjectId, ref: "Conferencia" },
    participcionAnterior: String,
    anoParticipado: String,
    trackParticipado: String,
    expectativaTaller: String,
    ayudaEconomica: String,
    justificacionEconomica: String,
    password: String,
    telefono: String,
    profesion: String,    
    empresa: String,
    preinscrito: { type: Schema.ObjectId, ref: "Conferencia" },
    inscrito: { type: Schema.ObjectId, ref: "Conferencia" },
    saldo: Number,
    rol: String,
    image: String
});

module.exports = mongoose.model('User', UserSchema);
import React from 'react'
import { CheckCircle, XCircle, Clock, Calendar, MessageCircle, ThumbsUp } from "lucide-react";

const ComparisonTable = () => {
    return (
    <section className="bg-white pt-10 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Ahorra tiempo, dinero y esfuerzo con un solo sistema
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 mb-12">
                Compara cómo trabajas hoy contra lo que puedes lograr con Senda CRM.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-16">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-gray-900 text-gray-100 text-lg">
                        <tr>
                            <th className="px-6 py-4">Tarea</th>
                            <th className="px-6 py-4">Sin Senda</th>
                            <th className="px-6 py-4">Con Senda</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 bg-white divide-y divide-gray-100">
                    <tr>
                        <td className="px-6 py-4">Responder mensajes</td>
                        <td className="px-6 py-4 text-red-600">
                        <span className="inline-flex items-center gap-2">
                            <XCircle size={18} /> Manual, lento
                        </span>
                        </td>
                        <td className="px-6 py-4 text-green-600">
                        <span className="inline-flex items-center gap-2">
                            <CheckCircle size={18} /> Automático 24/7
                        </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Agendar citas</td>
                        <td className="px-6 py-4 text-red-600">
                        <span className="inline-flex items-center gap-2">
                            <XCircle size={18} /> WhatsApp personal
                        </span>
                        </td>
                        <td className="px-6 py-4 text-green-600">
                        <span className="inline-flex items-center gap-2">
                            <CheckCircle size={18} /> Calendario integrado
                        </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Recordatorios</td>
                        <td className="px-6 py-4 text-red-600">
                        <span className="inline-flex items-center gap-2">
                            <XCircle size={18} /> Se olvidan
                        </span>
                        </td>
                        <td className="px-6 py-4 text-green-600">
                        <span className="inline-flex items-center gap-2">
                            <CheckCircle size={18} /> Automáticos por WhatsApp
                        </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Reputación online</td>
                        <td className="px-6 py-4 text-red-600">
                        <span className="inline-flex items-center gap-2">
                            <XCircle size={18} /> Difícil de controlar
                        </span>
                        </td>
                        <td className="px-6 py-4 text-green-600">
                        <span className="inline-flex items-center gap-2">
                            <CheckCircle size={18} /> Solicita reseñas automáticamente
                        </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Costo mensual</td>
                        <td className="px-6 py-4 text-red-600">
                        <span className="inline-flex items-center gap-2">
                            <XCircle size={18} /> $6,100+ en personal
                        </span>
                        </td>
                        <td className="px-6 py-4 text-green-600">
                        <span className="inline-flex items-center gap-2">
                            <CheckCircle size={18} /> Desde $1,899 MXN
                        </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Visual Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-center">
                    <MessageCircle className="mx-auto mb-3 text-[#597EBE]" size={32} />
                    <h3 className="font-semibold text-lg text-gray-800">Asistente Virtual 24/7</h3>
                    <p className="text-sm text-gray-600">Responde en WhatsApp, Messenger e Instagram automáticamente.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-center">
                    <Calendar className="mx-auto mb-3 text-[#597EBE]" size={32} />
                    <h3 className="font-semibold text-lg text-gray-800">Citas sin esfuerzo</h3>
                    <p className="text-sm text-gray-600">Tus clientes agendan desde tu sitio o redes sociales.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-center">
                    <Clock className="mx-auto mb-3 text-[#597EBE]" size={32} />
                    <h3 className="font-semibold text-lg text-gray-800">Seguimiento automático</h3>
                    <p className="text-sm text-gray-600">Confirmaciones y recordatorios sin mover un dedo.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-center">
                    <ThumbsUp className="mx-auto mb-3 text-[#597EBE]" size={32} />
                    <h3 className="font-semibold text-lg text-gray-800">Mejor reputación</h3>
                    <p className="text-sm text-gray-600">Solicita reseñas después de cada cita automáticamente.</p>
                </div>
            </div>
        </div>
    </section>
    )}

export default ComparisonTable

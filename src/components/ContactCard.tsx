import React, { useState } from "react";

const GHL_API_KEY = import.meta.env.VITE_GHL_API_KEY;
const LOCATION_ID = import.meta.env.VITE_LOCATION_ID;

const ContactCard = () => {
  const [toast, setToast] = useState({ type: "", message: "", visible: false });

  const showToast = (type: string, message: string) => {
    setToast({ type, message, visible: true });
    setTimeout(() => setToast({ ...toast, visible: false }), 3000);
  };

  const sendToGHLAPI = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement; 

    const formData = {
      email: form.email.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      company: form.company.value,
    };

    if (!formData.email || !formData.firstName || !formData.phone) {
      showToast("warning", "Todos los campos obligatorios deben ser llenados.");
      return;
    }

    try {
      const response = await fetch("https://services.leadconnectorhq.com/v1/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GHL_API_KEY}`, 
        },
        body: JSON.stringify({
          locationId: LOCATION_ID, 
          contact: {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            companyName: formData.company,
          },
        }),
      });

      if (response.ok) {
        showToast("success", "Información enviada correctamente.");
        form.reset(); // Reset the form on success
      } else {
        showToast("error", "Error al enviar la información.");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("error", "No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="relative max-w-md mx-auto">
      {/* Toast Notifications */}
      {toast.visible && (
        <div
          className={`fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-white rounded-lg shadow-md transition-transform transform ${
            toast.type === "success" ? "bg-green-600" :
            toast.type === "error" ? "bg-red-600" :
            "bg-orange-500"
          }`}
        >
          <div className="inline-flex items-center justify-center w-8 h-8 text-white bg-opacity-20 rounded-lg">
            {toast.type === "success" ? "✔️" : toast.type === "error" ? "❌" : "⚠️"}
          </div>
          <div className="ms-3 text-sm font-normal">{toast.message}</div>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={sendToGHLAPI} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" className="w-full p-2 border rounded-lg" required />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Nombre</label>
            <input type="text" name="firstName" className="w-full p-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700">Apellido</label>
            <input type="text" name="lastName" className="w-full p-2 border rounded-lg" required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Teléfono</label>
            <input type="tel" name="phone" className="w-full p-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700">Empresa</label>
            <input type="text" name="company" className="w-full p-2 border rounded-lg" required />
          </div>
        </div>

        <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactCard;

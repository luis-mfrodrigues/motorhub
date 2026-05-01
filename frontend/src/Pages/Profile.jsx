import { useState } from "react";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import "../styles/profile.css";

import ProfileTabs from "@/components/ProfileTabs.jsx";
import PersonalData from "@/components/PersonalData.jsx";
import CompanyData from "@/components/CompanyData.jsx";
import AccountData from "@/components/AccountData.jsx";

function Profile() {
  const [profileType] = useState("personal");

  const [activeTab, setActiveTab] = useState("data");

  // 🔥 estado dos dados da conta
  const [accountData, setAccountData] = useState({
    email: "a248@gmail.com",
    password: ""
  });

  // 🔥 estado dos erros
  const [errors, setErrors] = useState({});

  // 🔥 validação
  const validate = () => {
    let newErrors = {};

    if (!accountData.email.includes("@")) {
      newErrors.email = "Email inválido";
    }

    if (accountData.password.length < 6) {
      newErrors.password =
        "A palavra-passe inserida não cumpre com os requisitos obrigatórios!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // 🔥 botão único
  const handleSave = () => {
    if (activeTab === "account") {
      if (!validate()) return;
      console.log("Conta:", accountData);
    }

    if (activeTab === "data") {
      console.log("Dados pessoais/empresa");
    }
  };

  const renderContent = () => {
    if (activeTab === "data") {
      return profileType === "company"
        ? <CompanyData />
        : <PersonalData />;
    }

    if (activeTab === "account") {
      return (
        <AccountData
          data={accountData}
          setData={setAccountData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    }
  };

  return (
    <>
      <Navbar />
      <ProfileTabs />

      <div className="profile-page">
        <div className="profile-header">
          <h1>Perfil</h1>

          <div className="profile-subtabs">
            <button
              className={activeTab === "data" ? "active" : ""}
              onClick={() => setActiveTab("data")}
            >
              {profileType === "company"
                ? "Dados da Empresa"
                : "Dados Pessoais"}
            </button>

            <button
              className={activeTab === "account" ? "active" : ""}
              onClick={() => setActiveTab("account")}
            >
              Dados de Conta
            </button>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            {renderContent()}

            <div className="form-actions">
              <button className="btn-primary" onClick={handleSave}>
                Atualizar Dados
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
import { useState } from "react";
function PersonalData() {
  const [image, setImage] = useState(null);

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImage(URL.createObjectURL(file));
  }
};
  return (
    <div className="profile-form">

      <div className="profile-left">
        <label htmlFor="upload-avatar" className="avatar-circle">

  {image ? (
    <img src={image} className="avatar-image" />
  ) : (
    <div className="avatar-placeholder">👤</div>
  )}

  <div className="avatar-icon">📷</div>

  <input
    id="upload-avatar"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    style={{ display: "none" }}
  />
</label>
      </div>

      <div className="profile-right">

        <div className="form-row">
          <div className="form-group">
            <label>Nome</label>
            <input defaultValue="Roberto" />
          </div>

          <div className="form-group">
            <label>Apelido</label>
            <input defaultValue="Freitas" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Data de Nascimento</label>
            <input defaultValue="23/05/2002" />
          </div>

          <div className="form-group">
            <label>Residência</label>
            <input defaultValue="Barcelos" />
          </div>
        </div>

        <div className="form-group full">
          <label>Nacionalidade</label>
          <input defaultValue="Portuguesa" />
        </div>

      </div>
    </div>
  );
}

export default PersonalData;
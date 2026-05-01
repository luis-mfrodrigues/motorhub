function CompanyData() {
  return (
    <div className="profile-form">

      <div className="profile-right">

        <div className="form-row">
          <div className="form-group">
            <label>Nome da Empresa *</label>
            <input value="Lorem Ipsum" />
          </div>

          <div className="form-group">
            <label>Telefone</label>
            <input value="251000000" />
          </div>

          <div className="form-group">
            <label>Facebook</label>
            <input value="facebook.com/lorem" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Morada *</label>
            <input value="Braga..." />
          </div>

          <div className="form-group">
            <label>Instagram</label>
            <input />
          </div>

          <div className="form-group">
            <label>Website</label>
            <input value="www.site.com" />
          </div>
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea rows="5"></textarea>
        </div>

      </div>

    </div>
  );
}

export default CompanyData;